import React from "react";
import { makeStyles, Container } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="xl" className={classes.root}>
        Home
      </Container>
    </div>
  );
};

export default HomePage;
