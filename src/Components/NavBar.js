import { Link, Outlet, useLocation } from 'react-router-dom';
import './../App.css';
import { useState } from "react";

const NavBar = () => {
    const location = useLocation();
    const activePath = location.pathname;

    const [tabs, setTabs] = useState([
        { label: 'View Posts', key: 'listposts', path: '/listposts', icon: 'fa-solid fa-list' }, // View Posts Icon
        { label: 'Add Post', key: 'addposts', path: '/addposts', icon: 'fa-solid fa-plus' }, // Add Post Icon
        { label: 'Settings', key: 'settings', path: '/settings', icon: 'fa-solid fa-cog' }, // Settings Icon
        { label: 'Help', key: 'help', path: '/help', icon: 'fa-solid fa-question' } // Help Icon
    ]);

    const blogIcon = 'fa-solid fa-layer-group'; // App Icon

    return (
        <div className="min-h-screen w-[250px] bg-gray-900 text-gray-200 flex flex-col justify-between px-4 py-6 shadow-2xl">
            {/* Brand Header */}
            <div>
                <div className="flex flex-row items-center mb-8">
                    <i className={`${blogIcon} text-4xl text-gray-500`}></i>
                    <span className="ml-3 text-2xl font-semibold tracking-wide text-white">BLOG POST</span>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-4">
                    {tabs.map((item) => (
                        <Link to={item.path} key={item.key}>
                            <div className={`flex items-center space-x-3 p-3 rounded-lg transition duration-300 ease-in-out
                                ${activePath.includes(item.key)
                                    ? 'bg-gray-700 text-white shadow-lg'
                                    : 'bg-transparent text-gray-400 hover:bg-gray-800 hover:text-gray-200'}`}>
                                <i className={`${item.icon} text-lg`}></i>
                                <span className="text-base font-medium">{item.label}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Footer / Help Section */}
            <div className="mt-10">
                <div className="flex items-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out">
                    <i className="fa-solid fa-sign-out-alt text-lg text-gray-400"></i>
                    <span className="ml-3 text-base font-medium text-gray-300">Logout</span>
                </div>
            </div>

            {/* Outlet for rendering routes */}
            <Outlet />
        </div>
    );
};

export default NavBar;
