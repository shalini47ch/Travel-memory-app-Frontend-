import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../actions/posts";
import "./styles.css";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    //this will help in repopulating the form
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = (e) => {
    //prevent default helps to solve the issue of page refresh
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  return (
    <Paper className="paper">
      <form
        autoComplete="off"
        noValidate
        className="form"
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" style={{ marginLeft: "20px" }}>
          {currentId ? "Update" : "Create"} a Travel Memory
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          sx={{ margin: "8px" }}
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        ></TextField>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          sx={{ margin: "8px" }}
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        ></TextField>
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          sx={{ margin: "8px" }}
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        ></TextField>
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          sx={{ margin: "8px" }}
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })}
        ></TextField>
        <div className="fileInput">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          ></FileBase>
        </div>
        <Button
          className="buttonSubmit"
          variant="contained"
          size="large"
          type="submit"
          color="primary"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={clear}
          color="error"
          style={{marginTop:"5px"}}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};
export default Form;
