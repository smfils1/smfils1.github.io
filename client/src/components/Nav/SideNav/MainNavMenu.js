import React from "react";
import { useDispatch } from "react-redux";
import { grey } from "@material-ui/core/colors";
import clsx from "clsx";
import {
  List,
  makeStyles,
  useMediaQuery,
  useTheme,
  Typography,
} from "@material-ui/core";

import NavItem from "../NavItem";
import { toggleDrawer } from "../../../redux/actions/layout";
import content from "../../../content.json";

const useStyles = makeStyles((theme) => ({
  img: {
    width: 110,
    height: 110,
    borderRadius: "50%",
  },
  mainNav: {
    height: "100%",
  },
  mainNavLinks: {
    height: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    marginTop: theme.spacing(2),
    fontWeight: 700,
    lineHeight: "1em",
  },
  subtitle: {
    color: grey[500],
  },
}));

const MainNavMenu = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMinScreenMd = useMediaQuery(theme.breakpoints.up("md"));
  const dispatch = useDispatch();
  const handleItemClick = () => {
    if (!isMinScreenMd) {
      dispatch(toggleDrawer(isMinScreenMd));
    }
  };

  const Profile = ({ name, career }) => (
    <div className={classes.profile}>
      <img alt="profile" className={classes.img} src={content.profilePic1} />
      <Typography variant="h5" className={classes.title}>
        {name}
      </Typography>
      <Typography variant="button" className={clsx(classes.subtitle)}>
        {career}
      </Typography>
    </div>
  );

  return (
    <List className={classes.mainNav}>
      <Profile name={content.fullName} career={content.career} />
      <div className={classes.mainNavLinks}>
        <NavItem to="/" title="Home" onClick={handleItemClick} />{" "}
        <NavItem title="Portfolio" onClick={handleItemClick} />
      </div>
    </List>
  );
};

export default MainNavMenu;
