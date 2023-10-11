import React from "react";
import Image from "next/image";
export default function Logo(){
    return (
        <div>
            <Image src="/images/logo.png" width={120} height={120} alt="logo"/>
        </div>
    )
}