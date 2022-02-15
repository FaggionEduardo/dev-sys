import React from "react";
import RoutesComponent from "./routes";
import { AuthProvider } from "./hooks/auth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RoutesComponent />
      </AuthProvider>
    </div>
  );
}

export default App;
