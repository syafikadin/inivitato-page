import React from 'react';

export default function Sidebar({ toggleSidebar }: any) {
    return (
        <div className="sidebar position-fixed top-0 end-0 w-50 h-100 bg-dark text-white">
            <button onClick={toggleSidebar} className="btn btn-light m-3">Close</button>
            {/* Menu Sidebar */}
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
}
