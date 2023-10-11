"use client";
import React, { useState } from "react";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { X } from "lucide-react";
  import { Label } from "../ui/label";
  import { Input } from "../ui/input";
  import { Button } from "../ui/button";
  import Image from "next/image";

  export default function LoginModal() {
    const [open,setOpen] = useState<boolean>(false);
    return (
    <AlertDialog open={open}>
    <AlertDialogTrigger asChild>
    <li onClick={()=>{setOpen(true)}} className="hover:bg-gray-200 rounded-md p-2 cursor-pointer">Login</li>
    </AlertDialogTrigger>
    <AlertDialogContent>
        <AlertDialogHeader>
        <AlertDialogTitle asChild>
            <div className="flex justify-between">
                <span>Login</span>
                <X className = "cursor-pointer" onClick={()=>{setOpen(false)}}/>
            </div>
        </AlertDialogTitle>
        <AlertDialogDescription>
            <form>
                <h1 className="text-lg font-bold">Welcome to Airbnb</h1>
                <div className="mt-5">
                    <Label htmlFor="email">Email</Label>
                    <Input placeholder="Enter your email" id="email"></Input>
                    <span className="text-red-400"></span>
                </div>
                <div className="mt-5">
                    <Label htmlFor="password">Password</Label>
                    <Input placeholder="Enter your password" id="password"></Input>
                    <span className="text-red-400"></span>
                </div>
                <div className="mt-5 items-center">
                <Button className="bg-brand w-full">Continue</Button>
                </div>
                <h1 className="text-center mt-5 font-bold text-lg">-- OR --</h1>
                <Button variant="outline" className="w-full mt-5">
                    <Image 
                    src="/images/google.png"
                    width={25}
                    height={25}
                    alt="google_logo"
                    className="mr-5"
                    />
                    Continue with Google 
                </Button>
                <Button variant="outline" className="w-full mt-5">
                    <Image 
                    src="/images/github.png"
                    width={25}
                    height={25}
                    alt="github"
                    className="mr-5"
                    />
                    Continue with Github 
                </Button>
            </form>
        </AlertDialogDescription>
        </AlertDialogHeader>
        
    </AlertDialogContent>
    </AlertDialog>
)
}