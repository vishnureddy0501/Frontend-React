import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import './../App.css'
import { useState } from "react";
const NavBar = () => {
    const location = useLocation();
    const params = useParams();
    const activePath = location.pathname;
    // console.log(location, params); // using this we get all the information about current route.
    const [tabs, setTabs] = useState([{label: 'View Posts', key: 'listposts', path: '/listposts', icon: 'fa-solid fa-gauge'}, {label: 'Add Post', icon: 'fa-regular fa-address-book', key: 'addposts', path: '/addposts'},
        {icon: 'fa-solid fa-screwdriver-wrench', label: 'Settings', key: 'settings', path: '/settings'},
        {icon: 'fa-solid fa-handshake-angle', label: 'help', key: 'help', path: '/help'}
    ]);
    const blogIcon = 'fa-solid fa-recycle';
    return (
        <div className='bg-black text-white text-[1rem] text-[600] flex flex-col gap-3 px-4 py-6 basis-[15%]'>
            <div className='px-4 py-6 flex flex-row gap-4 items-center text-[1.25rem]'>
                <div className={`${blogIcon}`}></div>
                <div className='text-[500]'>UNIFYDATA</div>
            </div>
            {
                tabs.map(item => (
                    <div key={item.key} 
                        className={`cursor-pointer text-gray-400 hover:text-white ${activePath.includes(item.key) ? 'text-red-600' : ''}`}
                    >
                        <div className={`${item.icon} mr-2 w-[20%]`}></div>
                        <Link to={item.path}>{item.label}</Link>
                    </div>
                ))
            }
        <Outlet />
        </div>
    )
}
export default NavBar;