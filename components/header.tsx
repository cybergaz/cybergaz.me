"use client"

import React, { useCallback } from "react"
import { Navbar } from "@/components/nav"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ToggleTheme } from "@/components/toggle-theme"
import { Separator } from "@/components/ui/separator"
import { Menu } from "lucide-react"
import { motion, useScroll, useSpring } from 'framer-motion';


const MotionLink = motion(Link)
export default () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const updateScroll = () => {
            window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false)
        };

        window.addEventListener("scroll", updateScroll);
        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, []);

    return (
        <header className="fixed top-4 z-40 px-2 pr-4 w-screen bg-transparent" >
            <div
                className="inset-x-0 mx-auto flex h-[60px] max-w-5xl items-center justify-between px-12 border-[1px] border-[rgba(200,200,200,0.05)] rounded-full backdrop-blur-md bg-[rgba(17,25,40,0.2)] will-change-transform transition-colors"
            // initial={{ visibility: "hidden", y: -10 }}
            // animate={isScrolled ? { visibility: "visible", y: 0 } : { opacity: 0, y: -10 }}
            // transition={{ duration: 0.4 }}
            >
                <MotionLink href="/" whileTap={{ scale: 0.8 }} transition={{ duration: 0.2 }}> <Image src="/favicon/favicon.ico" alt="site-logo" width={30} height={30} /> </MotionLink>
                <div className="flex items-center justify-center gap-x-8 csm:gap-x-2 transition-all duration-500">
                    <Navbar />
                    <Separator orientation="vertical" className='h-[1.35rem] bg-zinc-700 translate-x-1 csm:hidden' />
                    <ToggleTheme />
                </div>
            </div>
        </header >


    )
}
