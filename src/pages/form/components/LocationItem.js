import React from "react";

import {
  FormControlLabel,
  Paper,
  RadioGroup,
  Grid,
  TextField,
  Typography,
  IconButton,
} from "@material-ui/core";

import BorderColorIcon from "@material-ui/icons/BorderColor";
import DeleteIcon from "@material-ui/icons/Delete";

import { makeStyles } from "@material-ui/core/styles";

import {
  addLocationItem,
  removeLocationItem,
} from "../../../store/locationList/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    width: "100%",
    margin: "0 0 10px 0",
  },
  label: {
    margin: "0 15px",
  },
});

function LocationItem(props) {
  const classes = useStyles();
  const { label, id, background, removeEnabled } = props;
  const { addLocationItem, removeLocationItem } = props;

  const style = { ...props.style, background };

  const handleClick = (event) => {
    const value = Number(event.currentTarget.value);
    props.onChange(!!value);
  };

  return (
    <Paper className={classes.root} style={style}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={8}>
          <Typography
            noWrap
            variant="body1"
            component="h2"
            className={classes.label}
          >
            {label}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="baseline"
          >
            <IconButton onClick={addLocationItem}>
              <BorderColorIcon />
            </IconButton>

            {removeEnabled ? (
              <IconButton
                onClick={() => {
                  removeLocationItem({ id });
                }}
              >
                <DeleteIcon />
              </IconButton>
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addLocationItem, removeLocationItem }, dispatch);

export default connect(null, mapDispatchToProps)(LocationItem);
