import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { SiGooglegemini } from "react-icons/si";
import React from "react";

function Header() {
    return (
        <div className="p-3 px-5 flex items-center justify-between shadow-md">
            <div className="flex gap-3 items-center  ">
                <SiGooglegemini className="text-3xl text-white bg-primary rounded-full p-1" />
                <h1 className="text-xl font-semibold">Ai shortz</h1>
            </div>
            <div className="flex gap-3 items-center">
                <Button>Dashboard</Button>
                <UserButton/>
            </div>
        </div>
    )
}

export default Header