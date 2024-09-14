import { useState, useEffect } from "react";
import { useStore } from "./../UserContextStore/Store.js";

const AddPosts = () => {
    const [newPost, setNewPost] = useState({name: '', description: ''});
    const { postsList, setPostsList } = useStore();
    const addPost = async () => {
        await setPostsList([...postsList, {...newPost, id : new Date().getTime()}]);
        setNewPost({name: '', description: ''});
    }
    useEffect(() => {
        console.log(postsList);
    }, [postsList]);
    return (
        <div className=" p-4">
            <div>Add New Post</div>
            <div>Post Subject</div>
            <input type="text" placeholder="enter subject" className=" border-2" value = {newPost.name} onChange={(event) => {setNewPost({...newPost, name: event.target.value})}}/>
            <div>Post Description</div>
            <input type="text" className=" border-2" placeholder = "enter description" value = {newPost.description} onChange={(event) => {setNewPost({...newPost, description: event.target.value})}}/>
            <div className="border-2 px-[6px] py-[4px] w-[fit-content] mt-1" onClick={() => {addPost()}}>Add Post</div>
        </div>
    )
}
export default AddPosts;