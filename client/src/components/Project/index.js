import React from "react";
import { makeStyles, Typography, Button, Grid } from "@material-ui/core/";
import content from "../../content.json";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./overrides.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    paddingBottom: theme.spacing(2),
  },
  title: {
    paddingBottom: theme.spacing(1),
  },
  details: {
    padding: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0),
    },
  },
  tag: {
    color: "black",
    background: "white",
    border: "solid 2px rgb(201, 163, 143)",
    padding: theme.spacing(0.5, 1),
    margin: theme.spacing(1),
    marginLeft: theme.spacing(0),
    display: "inline",
  },
  btn: {
    borderRadius: 0,
    color: "white",
    background: "black",
    margin: theme.spacing(1),
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    margin: theme.spacing(0, 1),
  },
  images: {
    height: "100%",
    width: "100%",
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Project = ({ project }) => {
  const classes = useStyles();
  const images = project.images.map((image) => ({
    original: image,
    thumbnail: image,
  }));
  const Tag = ({ value }) => <div className={classes.tag}>{value}</div>;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={8}>
          {" "}
          <div>
            <Typography className={classes.title} variant="h4">
              {" "}
              {project.title}
            </Typography>
            <Typography variant="body1">
              {" "}
              <strong>{project.description}</strong>
            </Typography>
            <div className={classes.details}>
              <ul>
                {project.details.map((detail, i) => (
                  <li key={i}>
                    <Typography variant="body1">{detail}</Typography>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Typography variant="caption">TECHNOLOGIES</Typography>
              <div className={classes.tags}>
                {project.technologies.map((tech, i) => (
                  <Tag key={i} value={tech} />
                ))}
              </div>
            </div>
            <div>
              <Button className={classes.btn} href={project.repo}>
                Github Repo
              </Button>
              <Button className={classes.btn} href={project.application}>
                Open Application
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} alignItems="center">
          <div className={classes.images}>
            <ImageGallery
              originalClass={"testing"}
              thumbnailClass={"testing"}
              items={images}
              defaultImage={project.images[0]}
              showThumbnails={true}
              showNav={false}
              lazyLoad={true}
              showIndex={false}
              showPlayButton={false}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Project;
