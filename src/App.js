import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Form from "./Form/Form";
import Posts from "./Posts/Posts";
import "./styles.css";
import "./index.css";

//Now the next step is to create an app component mainly functional component
const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  //now using the logic of useeffect to call the dispatcher
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId,dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar
        className="appBar"
        position="static"
        sx={{ height: "70px" }}
        color="error"
      >
        <Typography
          className="heading"
          variant="h2"
          align="center"
          color="inherit"
          sx={{ fontSize: "28px" }}
        >
          Travel Memories
        </Typography>
        {/* <img className="image" src={memories} alt="memories" height="60"/> */}
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}></Posts>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
export default App;
