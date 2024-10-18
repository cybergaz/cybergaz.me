"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ToggleTheme } from "@/components/toggle-theme"
import { ArrowUpRight } from "lucide-react"
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils"
import { NAVLINKS } from "@/lib/constants";
import { useRouter, usePathname } from "next/navigation"

export default () => {
    // const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    // useEffect(() => {
    //     const updateScroll = () => {
    //         window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false)
    //     };
    //
    //     window.addEventListener("scroll", updateScroll);
    //     return () => {
    //         window.removeEventListener("scroll", updateScroll);
    //     };
    // }, []);

    return (
        <>
            <header
                className="fixed z-40 px-20 csm:px-10 w-screen h-20 csm:h-[4.5rem] flex justify-between items-center font-monte font-medium text-sm backdrop-blur-lg"
            >
                <div className="flex justify-center items-center">
                    <Link href="/" className="pr-1 csm:pr-1 csm:w-9 hidden csm:block w-8 active:scale-95 transition-transform duration-300"> <Image className="grayscale hover:grayscale-0 transition-all duration-500" src="/favicon/favicon.ico" alt="site-logo" width={40} height={30} /> </Link>
                    <motion.span
                        className="text-xl mr-40 csm:mr-1 csm:hidden will-change-transform cursor-pointer"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => router.push("/")}
                    >
                        CyberGaz
                    </motion.span>
                </div>

                <motion.div
                    className="px-[0.4rem] py-4 border-[0.5px] border-foreground/10 bg-foreground/10 rounded-full csm:hidden will-change-auto"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <ul className="flex items-center justify-center gap-x-3">
                        {NAVLINKS.map(({ title, href }, i) => {
                            const isActive = href === pathname
                            return (
                                <li key={i} >
                                    <div className="active:scale-95 transition-transform duration-300">
                                        <Link
                                            href={href}
                                            className={cn('rounded-full px-[1.35rem] py-[0.7rem] hover:bg-foreground/5 transition-all duration-500', isActive && "bg-foreground/10")}
                                        >
                                            {title}
                                        </Link>
                                    </div>
                                </li>
                            )
                        })
                        }
                    </ul >
                </motion.div>

                <motion.div
                    className="flex justify-center items-center gap-1 will-change-auto"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <a className="flex justify-center items-center  transition-colors duration-500 gap-1 px-3 py-2 rounded-full hover:bg-foreground/10">
                        Github <ArrowUpRight width={20} />
                    </a>
                    <a className="flex justify-center items-center transition-colors duration-500 gap-1 px-3 py-2 rounded-full hover:bg-foreground/10">
                        Resume <ArrowUpRight width={20} />
                    </a>
                    <ToggleTheme />
                </motion.div>

                <button onClick={() => setIsOpen(!isOpen)} className={cn("relative group hidden csm:block")}>
                    <div className={cn("relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200")}>
                        <div className={cn("flex flex-col justify-between w-[14px] h-[14px] transform transition-all duration-300 origin-center")}>

                            <div className={cn("bg-foreground h-[2px] w-5 rounded-full transform transition-all duration-300 origin-left", { ["translate-x-10"]: isOpen })}></div>
                            <div className={cn("bg-foreground h-[2px] w-5 rounded-full transform transition-all duration-300 delay-75", { ["translate-x-10"]: isOpen })}></div>
                            <div className={cn("bg-foreground h-[2px] w-5 rounded-full transform transition-all duration-300 origin-left delay-150", { ["translate-x-10"]: isOpen })}></div>

                            <div className={cn("absolute items-center justify-between transform transition-all duration-500 top-2 -translate-x-10 flex w-0", { ["translate-x-0 w-12"]: isOpen })}>
                                <div className={cn("absolute bg-foreground h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300", { ["rotate-45"]: isOpen })}></div>
                                <div className={cn("absolute bg-foreground h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ", { ["-rotate-45"]: isOpen })}></div>
                            </div>
                        </div>
                    </div>
                </button>
            </header>

            <div className={cn("hidden csm:block")}>
                {isOpen &&
                    <>
                        <div className="fixed inset-0 z-10 h-screen w-screen" onClick={() => setIsOpen(false)} />
                        <motion.div
                            className={cn("bg-foreground/10 z-30 backdrop-blur-md rounded-xl fixed flex pb-2 justify-center items-center text-center inset-0 h-[60svh] max-w-[90svw] max-h-[90svh] m-auto")}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0, }}
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            <ul className="flex-col space-y-5">
                                {NAVLINKS.map(({ title, href }, i) => {
                                    const isActive = href === pathname

                                    return (
                                        <li key={i}>
                                            <div className="active:scale-95 transition-transform duration-300" onClick={() => setIsOpen(false)}>
                                                <Link
                                                    href={href}
                                                    className={cn('rounded-full px-[1.35rem] py-[0.7rem] hover:bg-foreground/5 transition-all duration-500', isActive && "bg-foreground/10")}
                                                >
                                                    {title}
                                                </Link>
                                            </div>
                                        </li>
                                    )
                                })
                                }
                            </ul >
                        </motion.div>
                    </>
                }

            </div>
        </>
    )
}
