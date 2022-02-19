import { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { isExpired } from "react-jwt";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storagedUser = sessionStorage.getItem("user");
    const storagedToken = sessionStorage.getItem("token");

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      setToken(storagedToken);
    }
  }, []);

  function api() {
    if (isExpired(token)) {
      Logout();
    }

    return axios.create({
      baseURL: "http://localhost:4000",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  async function Login(userData) {
    const response = await api().post("/users/authenticate", userData);

    sessionStorage.setItem(
      "user",
      JSON.stringify({
        id: response.data.id,
        username: response.data.username,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
      })
    );
    sessionStorage.setItem("token", response.data.token);
    setUser({
      id: response.data.id,
      username: response.data.username,
      firstName: response.data.firstName,
      lastName: response.data.lastName,
    });
    setToken(response.data.token);
  }

  function Logout() {
    setUser(null);
    setToken(null);
    sessionStorage.clear();
  }
  return (
    <AuthContext.Provider value={[user, setUser, token, Login, Logout, api]}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const [user, setUser, token, Login, Logout, api] = useContext(AuthContext);

  return {
    isAuthenticate: user && token,
    user,
    setUser,
    token,
    Login,
    Logout,
    api,
  };
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { AuthProvider, useAuth };
