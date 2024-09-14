import { useStore } from "./../UserContextStore/Store.js";


const ListPosts = () => {
    const { postsList } = useStore();
    return (
        <div className=" p-4 flex items-center justify-center flex-col">
            <div className="text-center text-purple-40">ALL POSTS</div>

            {/* usage of fontawesome icons
            <i class="fa-solid fa-pencil"></i> */}

            { postsList.map(item => (
                <div key={item.id} className="p-4 shadow-lg w-[60%] text-center">
                    <div className="text-red-500">{item.name}</div>
                    <div className="text-[#3d4689] text-[0.875rem]">{item.description}</div>
                </div>
            ))} 
            <div></div>
        </div>
    )
}
export default ListPosts;