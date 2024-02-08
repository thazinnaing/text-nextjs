"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";


const navLinks=[
    {name: "Register",href:"/register"},
    {name: "Login", href: "/login"},
    {name: "Forgot Password",href: "/forgot-password"},
]

const AuthLayout = ({
    children
}:{
    children:React.ReactNode
}) => {

    const pathname=usePathname();
    const [input, setInput]=useState("")

  return (
    <div>
        <input onChange={e=>setInput(e.target.value)} type="text" value={input} placeholder="Enter an input text" className="text-black"/>
        {navLinks.map(link=>{
            const isActive=pathname.startsWith(link.href)
            return(
                <Link href={link.href} key={link.name}
                className={isActive ? "font-bold mr-4 text-red-500" : "text-blue-500 mr-4"}>{link.name}</Link>
            )
        })}
        {children}

    </div>
  )
}

export default AuthLayout
