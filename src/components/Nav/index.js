import React from "react";
import { useSelector } from "react-redux";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import clsx from "clsx";

import TopNav from "./TopNav";
import SideNav from "./SideNav";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    overflow: "hidden",
  },
  toolbar: {
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));
const NavBar = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMaxScreenSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isDrawerOpen = useSelector(({ layout }) => layout.isDrawerOpen);
  return (
    <div className={classes.root}>
      {isMaxScreenSm && !isDrawerOpen && <TopNav />}
      <SideNav />
      <div className={classes.content}>
        <div className={clsx({ [classes.toolbar]: isMaxScreenSm })} />
        {children}
      </div>
    </div>
  );
};

export default NavBar;
