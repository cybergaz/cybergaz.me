"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ToggleTheme } from "@/components/toggle-theme"
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
            <header className="fixed z-40 w-screen px-5 h-20 csm:h-[4.5rem] flex justify-between items-center font-monte font-medium text-sm " >
                <nav className="flex justify-between items-center w-[110rem] mx-auto rounded-2xl px-5 py-2 bg-foreground/[0.025] dark:bg-foreground/[0.012] backdrop-blur-lg">
                    <motion.div
                        className="flex justify-center items-center pr-56 csm:pr-1"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => router.push("/")}
                    >
                        <Link href="/" className="csm:w-8 w-9 active:scale-95 transition-transform duration-300"> <Image className="grayscale hover:grayscale-0 transition-all duration-500" src="/favicon/favicon.ico" alt="site-logo" width={40} height={30} /> </Link>
                    </motion.div>
                    {/* <motion.span */}
                    {/*     className="text-xl mr-40 csm:mr-1 hidden will-change-transform cursor-pointer" */}
                    {/*     initial={{ opacity: 0, x: -30 }} */}
                    {/*     animate={{ opacity: 1, x: 0 }} */}
                    {/*     transition={{ duration: 0.4 }} */}
                    {/*     onClick={() => router.push("/")} */}
                    {/* > */}
                    {/*     CyberGaz */}
                    {/* </motion.span> */}

                    <motion.div
                        className="px-[0.4rem] py-4 border-[0.5px] border-foreground/10 bg-foreground/[0.03] dark:bg-foreground/[0.01] self-center rounded-full csm:hidden will-change-auto"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="relative flex items-center justify-center gap-x-3">
                            {NAVLINKS.map(({ title, href }, i) => {
                                const isActive = href === pathname
                                return (
                                    <li key={i} className=" grid grid-cols-1 space-y-9 justify-center items-center place-items-center">
                                        <div className="active:scale-95 transition-transform duration-300">
                                            <Link
                                                href={href}
                                                className={cn('rounded-full px-[1.35rem] z-20 py-[0.7rem] hover:bg-foreground/[0.02] transition-all duration-300', isActive && "bg-foreground/5")}
                                            >
                                                {title}

                                            </Link>
                                            {/* <span className=" inset-x-0 w-12 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" /> */}
                                        </div>
                                        {isActive && <div className="absolute w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent " />}
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
                        transition={{ duration: 0.3 }}
                    >
                        <a className="flex justify-center items-center  transition-colors duration-500 gap-1 px-3 py-2 rounded-full cursor-pointer hover:bg-foreground/10">
                            Github <Image src="/images/arrow.svg" alt="sun_svg" width={24} height={24} />
                        </a>
                        <a className="flex justify-center items-center transition-colors duration-500 gap-1 px-3 py-2 rounded-full cursor-pointer hover:bg-foreground/10">
                            Resume <Image src="/images/arrow.svg" alt="sun_svg" width={24} height={24} />
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
                </nav>
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
