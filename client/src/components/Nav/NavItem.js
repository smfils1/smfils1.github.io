import React from "react";
import { NavLink } from "react-router-dom";
import { ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: grey[300],
    "&:hover": { backgroundColor: grey[400] },
  },
  icon: {
    padding: theme.spacing(0, 1),
  },
  listItem: {
    textAlign: "center",
  },
  link: {
    color: "inherit" /* blue colors for links too */,
    textDecoration: "none" /* no underline */,
    "&:hover": {
      color: "inherit" /* blue colors for links too */,
    },
  },
  text: {
    fontSize: "1.3em",
    fontWeight: 100,
  },
}));

const NavItem = ({ to, title, onClick }) => {
  const classes = useStyles();
  const Item = (
    <ListItem className={classes.listItem} onClick={onClick}>
      <ListItemText primary={title} classes={{ primary: classes.text }} />
    </ListItem>
  );

  return to ? (
    <NavLink to={to} className={classes.link}>
      {Item}
    </NavLink>
  ) : (
    <> {Item} </>
  );
};

export default NavItem;
