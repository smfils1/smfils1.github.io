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
  paragraph: {
    padding: theme.spacing(0.5),
    color: "white",
    backgroundColor: "black",
    display: "inline", //
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

  return (
    <div className={classes.root}>
      <div className={classes.landing}>
        {/* <img className={classes.img} src={content.profilePic2} /> */}
        <div className={classes.content}>
          <Typography className={classes.intro} variant="h3">
            I'm {content.fullName},
          </Typography>
          {/* {content.aboutMe.map((paragraph) => ( */}
          <Typography className={classes.paragraph} variant="h5">
            {" "}
            {content.shortAboutMe}
          </Typography>
          {/* ))} */}
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
    </div>
  );
};

export default HomePage;
