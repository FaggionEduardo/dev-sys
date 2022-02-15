import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const completedStyle = {
  section: {
    padding: "50px 5vw 20px 5vw",
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
};

export default completedStyle;
