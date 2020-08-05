import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Toolbar, IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

import { toggleDrawer } from "../../../redux/actions/layout";

const useStyles = makeStyles((theme) => ({
  youtubeLogo: {
    height: "35px",
    padding: theme.spacing(0, 1),
    [theme.breakpoints.up("md")]: {
      height: "40px",
    },
  },
  toolbar: {
    paddingRight: "0px",
  },
  iconButton: {
    color: "white",
  },
}));

const StartNav = ({ mobile }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  // const isMinScreenLg = useMediaQuery(theme.breakpoints.up("lg"));

  // useEffect(() => {
  //   if (!mobile) dispatch(setDrawer(isMinScreenLg));
  // });

  return (
    <Toolbar
      classes={{
        gutters: classes.toolbar,
      }}
    >
      <IconButton
        aria-label="open drawer"
        edge="start"
        className={classes.iconButton}
        onClick={() => dispatch(toggleDrawer())}
      >
        <MenuIcon />
      </IconButton>
    </Toolbar>
  );
};

export default StartNav;
