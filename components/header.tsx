"use client"

import React from "react"
import Link from "next/link"
import { Link as ScrollLink } from 'react-scroll'
import Image from "next/image"
import { useEffect, useState } from "react"
import { ToggleTheme } from "@/components/toggle-theme"
import { Separator } from "@/components/ui/separator"
import { Menu } from "lucide-react"
import { motion, useScroll, useSpring } from 'framer-motion';
import { cn } from "@/lib/utils"
import { NAVLINKS } from "@/lib/constants";
import { usePathname } from "next/navigation"
import { Tabs, Tab } from "@nextui-org/tabs";


const MotionLink = motion(Link)
export default () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

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
        <motion.header
            className="fixed top-2 z-40 px-2 w-screen bg-transparent font-medium"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="flex justify-between items-center max-w-5xl mx-auto h-[60px] px-12 rounded-full bg-foreground/5 backdrop-blur-lg">

                <MotionLink href="/" whileTap={{ scale: 0.8 }} transition={{ duration: 0.2 }}> <Image className="grayscale hover:grayscale-0 transition-all duration-500" src="/favicon/favicon.ico" alt="site-logo" width={30} height={30} /> </MotionLink>

                <div className="flex justify-center items-center gap-x-8 transition-all duration-500">
                    <div className="csm:hidden">
                        <ul className="flex items-center justify-center gap-x-8">
                            {NAVLINKS.map(({ title, href }, i) => {
                                // const isActive = href === pathname
                                return (
                                    <li key={i} >
                                        <ScrollLink
                                            to={href}
                                            offset={-80}
                                            duration={500}
                                            isDynamic={true}
                                            className={cn('rounded px-3 py-2 text-md text-zinc-800 dark:text-zinc-400 hover:text-violet-700 hover:dark:text-blue-400 transition-colors cursor-pointer')} >

                                            {title}

                                        </ScrollLink>
                                    </li>
                                )
                            })
                            }
                        </ul >
                    </div>

                    <Separator orientation="vertical" className='h-[1.35rem] bg-background translate-x-1 csm:hidden' />
                    <ToggleTheme />
                    <Separator orientation="vertical" className='h-[1.35rem] bg-background translate-x-1 hidden csm:block' />

                    {/* hamburger menu */}
                    <button onClick={() => setIsOpen(!isOpen)} className={cn("relative group hidden csm:block")}>
                        <div className={cn("relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200")}>
                            <div className={cn("flex flex-col justify-between w-[14px] h-[14px] transform transition-all duration-300 origin-center")}>

                                {/* Menu */}
                                <div className={cn("bg-white h-[2px] w-5 rounded-full transform transition-all duration-300 origin-left", { ["translate-x-10"]: isOpen })}></div>
                                <div className={cn("bg-white h-[2px] w-5 rounded-full transform transition-all duration-300 delay-75", { ["translate-x-10"]: isOpen })}></div>
                                <div className={cn("bg-white h-[2px] w-5 rounded-full transform transition-all duration-300 origin-left delay-150", { ["translate-x-10"]: isOpen })}></div>

                                {/* Cross */}
                                <div className={cn("absolute items-center justify-between transform transition-all duration-500 top-2 -translate-x-10 flex w-0", { ["translate-x-0 w-12"]: isOpen })}>
                                    <div className={cn("absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300", { ["rotate-45"]: isOpen })}></div>
                                    <div className={cn("absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ", { ["-rotate-45"]: isOpen })}></div>
                                </div>
                            </div>
                        </div>
                    </button>

                </div>

            </nav>

            <div className={cn("hidden csm:block")}>
                {isOpen && <>

                    <div className="fixed inset-0 -z-10 h-screen w-screen" onClick={() => setIsOpen(false)} />
                    <motion.div
                        className={cn("bg-foreground/10 z-30 backdrop-blur-md rounded-xl fixed flex pb-2 justify-center items-center text-center inset-0 translate-y-[45vh] h-[60svh] max-w-[90svw] max-h-[90svh] m-auto")}
                        initial={{ opacity: 0, y: "43vh" }}
                        animate={{ opacity: 1, y: "45vh", }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        <ul className="flex-col space-y-5">
                            {NAVLINKS.map(({ title, href }, i) => {
                                // const isActive = pathname.search(href) !== -1

                                return (
                                    <li key={i} >
                                        <ScrollLink
                                            to={href}
                                            offset={-80}
                                            duration={500}
                                            isDynamic={true}
                                            className={cn('rounded px-3 py-2 hover:text-violet-700 active:dark:text-violet-500 transition-colors cursor-pointer text-foreground')}
                                        >
                                            {title}

                                        </ScrollLink>
                                    </li>
                                )
                            })
                            }
                        </ul >
                    </motion.div>
                </>
                }

            </div>
        </motion.header >

    )
}
