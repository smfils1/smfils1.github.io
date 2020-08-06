import React from "react";
import {
  makeStyles,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core/";
import content from "../../content.json";
import Info from "../Info";
import { grey } from "@material-ui/core/colors";
import clsx from "clsx";
import Typical from "react-typical";

import Portfolio from "./Portfolio";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  landing: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(10),
    height: "100vh",
    width: "100%",
    backgroundImage: `url(${content.profilePic2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // filter: "grayScale(50%)",
    position: "relative",
  },
  writer: {
    padding: theme.spacing(0.5),
    color: "white",
    backgroundColor: "black",
    display: "inline",
    fontSize: "1.5em",
  },
  content: {
    margin: theme.spacing(2),
  },
  intro: {
    fontWeight: 500,
    color: "white",
    textShadow: "1px 1px 1px rgb(0, 0, 0)",
    marginBottom: theme.spacing(1),
  },
  img: {
    // flex: " 0 0 41.666667%",
    // maxWidth: "41.666667%",
    alignSelf: "center",
  },
  info: {
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    backgroundColor: grey[300],
  },
  mobile_info: {
    //transform: "translate(-50%, 0)",
    position: "absolute",
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.only("xs"));

  const AboutMe = () => {
    const base = content.shortAboutMe.base;
    const writer = [];
    content.shortAboutMe.loop.forEach((value) => {
      writer.push(base, 150, base + value, 150);
    });
    return (
      <Typical steps={writer} loop={Infinity} className={classes.writer} />
    );
  };
  return (
    <div className={classes.root} id="home">
      <div className={classes.landing}>
        <div className={classes.content}>
          <Typography className={classes.intro} variant="h3">
            I'm {content.fullName},
          </Typography>
          <AboutMe />
        </div>
      </div>
      <div
        className={clsx({
          [classes.info]: isSmallScreen,
          [classes.mobile_info]: !isSmallScreen,
        })}
      >
        <Info />
      </div>
      <Portfolio />
    </div>
  );
};

export default HomePage;
