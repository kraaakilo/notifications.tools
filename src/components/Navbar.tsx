import React from 'react';
import {Button} from "@/components/ui/button";

const Navbar = () => {
    return (
        <div className="px-8 py-4 border border-b-2 flex items-center justify-between">
            <div>Awesomia</div>
            <Button variant={"secondary"}>Abonnement</Button>
        </div>
    );
};

export default Navbar;