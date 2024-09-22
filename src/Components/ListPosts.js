import { useState } from "react";
import { useStore } from "./../UserContextStore/Store.js";
import EditPost from "./EditPost.js";
import { Link } from "react-router-dom";


const ListPosts = () => {
    const { postsList } = useStore();
    const [postIndex, setpostIndex] = useState(-1);
    const closePopup = () => {
        setpostIndex(-1);
    }
    return (
        <div className=" p-4 flex items-center justify-center flex-col">
            <div className="text-center text-purple-40">ALL POSTS</div>

            {/* usage of fontawesome icons
            <i class="fa-solid fa-pencil"></i> */}

            { postsList.map((item, index) => (
                <div key={item.id} className="p-4 shadow-lg w-[60%] text-center flex flex-row gap-3">
                    <div>
                        <div className="text-red-500">{item.name}</div>
                        <div className="text-[#3d4689] text-[0.875rem]">{item.description}</div>
                    </div>
                    {/* <i className="fa-solid fa-pencil cursor-pointer" onClick={() => {setpostIndex(index)}}></i> */}
                    <Link to={`/editposts/${index}`}><i className="fa-solid fa-pencil cursor-pointer"></i></Link>
                </div>
            ))} 
            {/* {postIndex >=0 && <EditPost postDetails={postsList[postIndex]} postIndex={postIndex} closePopup = {closePopup}/> } */}
        </div>
    )
}
export default ListPosts;