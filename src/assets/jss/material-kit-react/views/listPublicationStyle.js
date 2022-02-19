import { container } from "assets/jss/material-kit-react.js";

const componentsStyle = (theme) => ({
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "0px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    [theme.breakpoints.down("md")]: {
      margin: "0% 0.6% 0px",
    },
  },
  linkStyles: {
    textDecoration: "none",
    "&:link": {
      color: "#000",
    },
    "&:visited": {
      color: "#000",
    },
  },
  textCenter: {
    textAlign: "center",
  },
  description: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "40vw",
  },
  addButton: {
    backgroundColor: "green",
    color: "white",
    margin: 15,
  },
  icon: {
    margin: "0 10px",
    cursor: "pointer",
  },
});

export default componentsStyle;
