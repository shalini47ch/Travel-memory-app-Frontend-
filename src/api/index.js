//now using the logic of axios to solve this 
import axios from "axios";

//create a variable called url to get the lists of posts present 

const url="https://travel-memory-app.onrender.com/posts";

export const fetchPosts=()=>axios.get(url);

export const createPost=(newPost)=>axios.post(url,newPost);

//now create a update post to fetch the data from the url
export const updatePost=(id,updatedPost)=>axios.patch(`${url}/${id}`,updatedPost);

//create a deletePost to fetch the data from the api 
export const deletePost=(id)=>axios.delete(`${url}/${id}`);

//create a likeCount 
export const likePost=(id)=>axios.patch(`${url}/${id}/likePost`);

