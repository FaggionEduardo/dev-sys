import { container } from "assets/jss/material-kit-react";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const completedStyle = (theme) => ({
  section: {
    padding: "0.5% 0 0.5% 0",
  },
  user: {
    fontSize: "3vw",
    [theme.breakpoints.down("md")]: {
      fontSize: "4vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "5vw",
    },
  },
  container: {
    width: "auto",
    margin: "2%",
    backgroundColor: "#FFFFFF",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "& h1": {
      fontSize: "1.4vw",
    },
    "& h2": {
      fontSize: "1.2vw",
      fontWeight: 400,
    },
    "& h3": {
      fontSize: "1.6vw",
    },
    "& h4": {
      fontSize: "1vw",
      fontWeight: 400,
    },
    [theme.breakpoints.down("md")]: {
      "& h1": {
        fontSize: "2.4vw",
      },
      "& h2": {
        fontSize: "2.2vw",
        fontWeight: 400,
      },
      "& h3": {
        fontSize: "2.6vw",
      },
      "& h4": {
        fontSize: "2vw",
        fontWeight: 400,
      },
    },
    [theme.breakpoints.down("xs")]: {
      "& h1": {
        fontSize: "4vw",
      },
      "& h2": {
        fontSize: "3.8vw",
        fontWeight: 400,
      },
      "& h3": {
        fontSize: "4.2vw",
      },
      "& h4": {
        fontSize: "3.4vw",
        fontWeight: 400,
      },
    },
  },
  linkStyles: {
    textDecoration: "none",
    "&:link": {
      color: "#3C4858",
    },
    "&:visited": {
      color: "#3C4858",
    },
  },
  ...imagesStyles,
});

export default completedStyle;
