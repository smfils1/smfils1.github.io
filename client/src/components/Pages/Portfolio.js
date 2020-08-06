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

import Project from "../Project";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(4),
    backgroundColor: grey[100],
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
  text: {
    paddingBottom: theme.spacing(2),
  },
  description: {
    padding: theme.spacing(0.5),
    color: "white",
    backgroundColor: "black",
    display: "inline", //
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <div className={classes.root} id="portfolio">
      <Typography className={classes.text} variant="h4">
        PORTFOLIO
      </Typography>
      <div>
        {" "}
        <Typography
          className={clsx(classes.description, classes.tedxt)}
          variant="body1"
          dangerouslySetInnerHTML={{ __html: content.description }}
        />
      </div>
      <Project />
    </div>
  );
};

export default Portfolio;
