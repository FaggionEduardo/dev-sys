import { container } from "assets/jss/material-kit-react";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const completedStyle = {
  section: {
    padding: "70px 0",
  },
  container: {
    ...container,
  },
  ...imagesStyles,
};

export default completedStyle;
