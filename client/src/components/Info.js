import React from "react";
import { makeStyles, Typography } from "@material-ui/core/";
import content from "../content.json";
import { grey } from "@material-ui/core/colors";
import { School, Email, LocationOn } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 150,
    display: "flex",
    flexDirection: "column",
    color: "white",
    padding: theme.spacing(2),
    backgroundColor: grey[900],
    [theme.breakpoints.up("sm")]: {
      width: 300,
      backgroundColor: "black",
    },
  },
  icon: {
    margin: theme.spacing(0.5),
  },
}));

const Info = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="button" className={classes.title}>
        {content.career}
      </Typography>
      <div>
        <Email className={classes.icon} />
        <Typography variant="caption" className={classes.title}>
          {content.email}
        </Typography>
      </div>
      <div>
        <School className={classes.icon} />
        <Typography variant="caption" className={classes.title}>
          {content.education}
        </Typography>
      </div>
      <div>
        <LocationOn className={classes.icon} />
        <Typography variant="caption" className={classes.title}>
          {content.location}
        </Typography>
      </div>
    </div>
  );
};

export default Info;
