import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, useTheme } from "@material-ui/core";
import { useSelector } from "react-redux";
import StartNav from "./StartNav";

const useStyles = makeStyles((theme) => ({
  root: {},
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",

    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

const TopNav = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobileSearchClick = useSelector(
    ({ layout }) => layout.isMobileSearchClick
  );

  return (
    <div>
      {/* <CssBaseline /> */}
      <AppBar elevation={0} position="fixed" className={classes.appBar}>
        <StartNav />
      </AppBar>
    </div>
  );
};

export default TopNav;
