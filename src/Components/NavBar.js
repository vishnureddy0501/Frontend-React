import { Link, Outlet } from 'react-router-dom';
import './../App.css'
import { useState } from "react";
const NavBar = () => {
    const [tabs, setTabs] = useState([{name: 'View Posts', key: 'View Posts', path: '/listposts'}, {name: 'Add Post', key: 'Add Post', path: '/addposts'}]);
    const [activeApp, setActiveApp] = useState('View Posts');
    return (
        <div className='bg-black text-white text-[1rem] text-[600] flex flex-row gap-3 p-4'>
            {
                tabs.map(item => (
                    <div key={item.key} onClick={() => setActiveApp(item.key)} 
                        className={`cursor-pointer hover:text-red-600 ${item.key === activeApp ? 'text-red-600' : ''}`}
                    >
                        <Link to={item.path}>{item.name}</Link>
                    </div>
                ))
            }
        <Outlet />
        </div>
    )
}
export default NavBar;