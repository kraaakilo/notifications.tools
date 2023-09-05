import React from 'react';
import Navbar from "@/components/Navbar";

const Layout = ({children} : {children : React.ReactNode}) => {
    return (
        <div>
            <Navbar/>
            <div className="radial-gradient">
                {children}
            </div>
        </div>
    );
};

export default Layout;