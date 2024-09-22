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
        <div className=" flex items-center justify-center h-[100%]">
            <div className=" p-8 shadow-xl w-[fit-content] h-[fit-content]">
                <div className=" capitalize text-[#f04e45] text-[600] mb-2">Add New Post</div>
                <div className="text-[#404255] mb-1">Post Subject</div>
                <input type="text" placeholder="enter subject" className=" border-2 mb-2" value = {newPost.name} onChange={(event) => {setNewPost({...newPost, name: event.target.value})}}/>
                <div className="text-[#404255] mb-1">Post Description</div>
                <textarea className="border-2 mb-2 px-2 py-1 h-[10rem] align-text-top" placeholder = "enter description" value = {newPost.description} onChange={(event) => {setNewPost({...newPost, description: event.target.value})}}></textarea>
                <div className="flex flex-row gap-3 justify-end mt-2">
                    <div className="px-[6px] py-[4px] w-[fit-content] mt-1 text-[white] text-[0.875rem] text-[600] bg-[red] rounded-[4px]" onClick={() => {addPost()}}>Clear</div>
                    <div className="px-[6px] py-[4px] w-[fit-content] mt-1 text-[white] text-[0.875rem] text-[600] bg-[#3d4689] rounded-[4px]" onClick={() => {addPost()}}>Add Post</div>
                </div>
            </div>
        </div>
    )
}
export default AddPosts;