import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    minWidth: "40%",
  },
}));

export default function ModalIcon({
  icon,
  className,
  children,
  buttonTitle,
  buttonStyle,
  buttonAction,
}) {
  const classes = useStyles();
  const Icon = icon;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Icon onClick={handleOpen} className={className} />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {children}
            <Button
              variant="contained"
              style={{
                margin: 10,
              }}
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              onClick={buttonAction}
              style={buttonStyle}
            >
              {buttonTitle}
            </Button>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
ModalIcon.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.object,
  className: PropTypes.string,
  buttonTitle: PropTypes.string,
  buttonStyle: PropTypes.object,
  buttonAction: PropTypes.func,
};
