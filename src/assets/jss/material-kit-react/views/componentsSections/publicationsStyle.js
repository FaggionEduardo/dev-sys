import { container } from "assets/jss/material-kit-react";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const completedStyle = {
  section: {
    padding: "50px 0 20px 0",
  },
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    ...container,
  },
  linkStyles: {
    "&:link": {
      color: "#3C4858",
    },
  },
  ...imagesStyles,
};

export default completedStyle;
