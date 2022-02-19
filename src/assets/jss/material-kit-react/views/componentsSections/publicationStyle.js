import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const completedStyle = (theme) => ({
  user: {
    fontSize: "4vw",
    [theme.breakpoints.down("md")]: {
      fontSize: "5vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "6vw",
    },
  },
  section: {
    color: "#3C4858",
    padding: "10px 5vw 20px 5vw",
    "& h1": {
      fontSize: "2vw",
    },
    "& h2": {
      fontSize: "1.8vw",
      fontWeight: 400,
    },
    "& h3": {
      fontSize: "2vw",
    },
    "& h4": {
      fontSize: "1.6vw",
      fontWeight: 400,
    },
    [theme.breakpoints.down("md")]: {
      "& h1": {
        fontSize: "3.4vw",
      },
      "& h2": {
        fontSize: "3.2vw",
        fontWeight: 400,
      },
      "& h3": {
        fontSize: "3.6vw",
      },
      "& h4": {
        fontSize: "3vw",
        fontWeight: 400,
      },
    },
    [theme.breakpoints.down("xs")]: {
      "& h1": {
        fontSize: "4.8vw",
      },
      "& h2": {
        fontSize: "4.6vw",
        fontWeight: 400,
      },
      "& h3": {
        fontSize: "5.vw",
      },
      "& h4": {
        fontSize: "4.2vw",
        fontWeight: 400,
      },
    },
  },
  ...imagesStyles,
  linkStyles: {
    textDecoration: "none",
    "&:link": {
      color: "#3C4858",
    },
    "&:visited": {
      color: "#3C4858",
    },
  },
});

export default completedStyle;
