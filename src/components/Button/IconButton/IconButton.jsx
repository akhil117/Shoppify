import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import { TiVendorMicrosoft } from "react-icons/ti";

const styles = (theme) => ({
  extendedIcon: {

  }
});

function FloatingActionButtons(props) {
  const { classes, width, padding, font, backgroundColor,microsoftLoginHandler } = props;
  return (
    <Fab
      variant="extended"
      aria-label="Delete"
      onClick={microsoftLoginHandler}
      style={{ display: "flex", justifyContent: "center", alignItems: "center", width: width, backgroundColor: backgroundColor, color: '#FFF', fontSize: font, borderRadius: "4px", height: "6%", padding:padding }}
      className={classes.fab}
    >
      <TiVendorMicrosoft style={{ fontSize: "2rem" }} />
      <label style={{ flexGrow: "1", textAlign: "center" }}>  Microsoft Login </label>
    </Fab>

  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FloatingActionButtons);
