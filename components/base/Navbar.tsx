import React from "react";
import Logo from "./Logo";
import { MenuIcon, Search } from "lucide-react"
import NavMenu from "./NavMenu";


export default function Navbar(){
    return (
        <div className="flex items-center justify-between px-10 border-b-2">
        <div>
          <Logo/>
        </div>
        <div className="flex items-center space-x-2 border rounded-2xl p-2">
        <span>Any where</span>
        <span>|</span>
        <span>Any week</span>
        <span>|</span>
        <span className="text-gray-400">Add guest</span>
        <span className="bg-brand text-white rounded-full p-2"><Search height={17} width={17}/></span>
        </div>
        <div className="flex space-x-4">
          <span>Add your home</span>
          <NavMenu/>
        </div>
      </div>
    )
}