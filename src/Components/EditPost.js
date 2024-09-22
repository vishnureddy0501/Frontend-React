import { useState, useEffect } from "react";
import { useStore } from "./../UserContextStore/Store.js";

const EditPost = (props) => {
    const [newPost, setNewPost] = useState({name: props.postDetails.name, description: props.postDetails.description});
    const { postsList, setPostsList } = useStore();
    const addPost = async () => {
        const newData = structuredClone(postsList);
        newData[props.postIndex] = newPost;        
        await setPostsList(newData);
        setNewPost({name: '', description: ''});
        props.closePopup();
    }
    useEffect(() => {
        console.log(postsList);
    }, [postsList]);
    return (
        <div className=" w-[70vw] h-[50vh] fixed top-[50%] left-[50%] bg-white translate-x-[-50%] translate-y-[-50%] shadow-lg">
            <div className="bg-[#3d4689] text-white p-4 flex flex-row items-center justify-between">
                <div>Edit the Post</div>
                <div className=" cursor-pointer" onClick={() => {props.closePopup()}}><i class="fa-solid fa-xmark"></i></div>
            </div>
            <div className="p-4">
            <div>Post Subject</div>
            <input type="text" placeholder="enter subject" className=" border-2" value = {newPost.name} onChange={(event) => {setNewPost({...newPost, name: event.target.value})}}/>
            <div>Post Description</div>
            <input type="text" className=" border-2" placeholder = "enter description" value = {newPost.description} onChange={(event) => {setNewPost({...newPost, description: event.target.value})}}/>
            <div className="border-2 px-[6px] py-[4px] w-[fit-content] mt-1" onClick={() => {addPost()}}>Save Post</div>
            </div>
        </div>
    )
}
export default EditPost;