import { useState } from "react";
import { useStore } from "./../UserContextStore/Store.js";
import { Link } from "react-router-dom";

const ListPosts = () => {
    const { postsList } = useStore();
    const [postIndex, setpostIndex] = useState(-1);
    const closePopup = () => {
        setpostIndex(-1);
    }
    return (
        <div className="p-8 flex items-center justify-center flex-col">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">All Posts</h1>

            {postsList.map((item, index) => (
                <div key={item.id} className="flex justify-between items-center w-[60%] bg-white shadow-md p-5 mb-4 rounded-lg transition-transform transform hover:scale-105">
                    <div className="text-left">
                        <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
                        <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <Link to={`/editposts/${index}`} className="text-gray-500 hover:text-blue-500 transition-colors">
                        <i className="fas fa-edit text-xl"></i>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ListPosts;
