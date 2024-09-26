import { useState, useEffect } from "react";
import { useStore } from "./../UserContextStore/Store.js";

const AddPosts = () => {
    const [newPost, setNewPost] = useState({ name: '', description: '' });
    const { postsList, setPostsList } = useStore();

    const addPost = async () => {
        await setPostsList([...postsList, { ...newPost, id: new Date().getTime() }]);
        setNewPost({ name: '', description: '' });
    };

    useEffect(() => {
        console.log(postsList);
    }, [postsList]);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
            <div className="p-8 shadow-xl w-[400px] bg-white rounded-lg">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Add New Post</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Post Subject</label>
                    <input
                        type="text"
                        placeholder="Enter subject"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={newPost.name}
                        onChange={(event) => setNewPost({ ...newPost, name: event.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Post Description</label>
                    <textarea
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md h-40 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter description"
                        value={newPost.description}
                        onChange={(event) => setNewPost({ ...newPost, description: event.target.value })}
                    />
                </div>
                <div className="flex justify-end space-x-3">
                    <button
                        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
                        onClick={() => setNewPost({ name: '', description: '' })}
                    >
                        Clear
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                        onClick={addPost}
                    >
                        Add Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddPosts;
