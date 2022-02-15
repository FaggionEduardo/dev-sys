import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const completedStyle = {
  section: {
    padding: "50px 150px 20px 150px",
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
