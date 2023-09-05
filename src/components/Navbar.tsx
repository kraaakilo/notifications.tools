import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="px-8 py-4 border border-b-2 flex items-center justify-between">
            <div>
                <Link href="/">Awesomia</Link>
            </div>
        </div>
    );
};

export default Navbar;