import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import "./styles.css";
import { useDispatch } from "react-redux";
import { deletePost,likePost } from "../../actions/posts";

const Post = ({ post ,setCurrentId}) => {
  const dispatch=useDispatch()
  return (
    <Card className="card">
      <CardMedia
        className="media"
        style={{height: 0, paddingTop: '56.25%'}}
        image={post.selectedFile}
        title={post.title}
      />
      <div className="overlay">
        <Typography variant="h6" style={{fontSize:"18px"}}>{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className="overlay2">
        <Button style={{ color: "white"}} size="large" onClick={() =>setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="default"/>
        </Button>
      </div>
      <div className="details">
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag}`)}
        </Typography>
      </div>

      <Typography className="title" variant="h5" gutterBottom style={{fontSize:"16px"}}>
          {post.title}
        </Typography>

      <CardContent>
        <Typography className="message" variant="body2" color="textSecondary" component="p" style={{fontSize:"16px"}}>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className="cardActions">
        <Button size="small" color="primary" onClick={() =>dispatch(likePost(post._id))}>
          <ThumbUpIcon fontSize="small" />
          &nbsp;Like&nbsp;
          {post.likeCount}
        </Button>

        <Button size="small" color="primary" onClick={() =>dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
export default Post;
