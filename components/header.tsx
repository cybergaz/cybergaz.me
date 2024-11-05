"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ToggleTheme } from "@/components/toggle-theme"
import { MotionDiv } from '@/components/ui/motion-div';
import { cn } from "@/lib/utils"
import { LINKS, NAVLINKS } from "@/lib/constants";
import { usePathname } from "next/navigation"

export default () => {
    // const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

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
            <header className="fixed z-40 w-screen px-5 sm:px-1 h-20 csm:h-[4.5rem] flex justify-between items-center font-monte font-medium text-sm " >
                <nav className="flex justify-between items-center w-[105rem] mx-auto rounded-2xl px-5 sm:px-3 py-2 bg-foreground/[0.02] backdrop-blur shadow-md">
                    <MotionDiv
                        className="flex justify-center items-center pr-56 csm:pr-1"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link href="/" className="csm:w-[1.85rem] w-9 active:scale-95 transition-transform duration-300"> <Image className="grayscale hover:grayscale-0 transition-all duration-500" src="/favicon/favicon.ico" alt="site-logo" width={40} height={30} /> </Link>
                    </MotionDiv>

                    <MotionDiv
                        className="px-[0.3rem] py-3.5 border-[0.5px] border-foreground/[0.07] rounded-full csm:hidden "
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
                                                className={cn('rounded-full underline-offset-2 px-[1.35rem] z-20 py-[0.7rem] hover:bg-foreground/[0.02] transition-all duration-300', isActive && "bg-foreground/5")}
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
                    </MotionDiv>

                    <MotionDiv
                        className="flex justify-center items-center gap-1 will-change-auto sm:hidden"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <a href={LINKS.github} target="_blank" className="flex justify-center items-center  transition-colors duration-500 gap-1 px-3 py-2 rounded-full cursor-pointer hover:bg-foreground/10">
                            Github <Image className="dark:invert rotate-[220deg]" src="/images/arrow.svg" alt="sun_svg" width={15} height={19} />
                        </a>
                        <a href={LINKS.resume} target="_blank" className="flex justify-center items-center transition-colors duration-500 gap-1 px-3 py-2 rounded-full cursor-pointer hover:bg-foreground/10">
                            Resume <Image className="dark:invert rotate-[220deg]" src="/images/arrow.svg" alt="sun_svg" width={15} height={19} />
                        </a>
                        <ToggleTheme />
                    </MotionDiv>

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
                        <div className="fixed inset-0 z-20 h-screen w-screen " onClick={() => setIsOpen(false)} />
                        <MotionDiv
                            className={cn("bg-foreground/10 z-30 backdrop-blur rounded-xl fixed flex gap-3.5 justify-center items-center text-center inset-0 h-[60svh] max-w-[90svw] max-h-[90svh] m-auto")}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0, }}
                            transition={{ duration: 0.3 }}
                        >
                            <ul className="flex-col space-y-7">
                                {NAVLINKS.map(({ title, href }, i) => {
                                    const isActive = href === pathname

                                    return (
                                        <li key={i}>
                                            <div className="active:scale-95 transition-transform duration-300" onClick={() => setIsOpen(false)}>
                                                <Link
                                                    href={href}
                                                    className={cn('rounded-full px-6 py-2.5 hover:bg-foreground/5 transition-all duration-500', isActive && "bg-foreground/5")}
                                                >
                                                    {title}
                                                </Link>
                                            </div>
                                        </li>
                                    )
                                })
                                }
                            </ul >

                            <div className="w-[1px] bg-background h-[15svh] hidden sm:block" />
                            <div className="sm:flex sm:flex-col sm:justify-center sm:items-center gap-2 will-change-auto hidden " >
                                <a href={LINKS.github} target="_blank" className="flex justify-center items-center  transition-colors duration-500 gap-1 px-3 py-2 rounded-full cursor-pointer hover:bg-foreground/10">
                                    Github <Image className="dark:invert rotate-[220deg]" src="/images/arrow.svg" alt="sun_svg" width={15} height={19} />
                                </a>
                                <a href={LINKS.resume} target="_blank" className="flex justify-center items-center transition-colors duration-500 gap-1 px-3 py-2 rounded-full cursor-pointer hover:bg-foreground/10">
                                    Resume <Image className="dark:invert rotate-[220deg]" src="/images/arrow.svg" alt="sun_svg" width={15} height={19} />
                                </a>
                                <ToggleTheme className={"ml-0"} />
                            </div>
                        </MotionDiv>
                    </>
                }

            </div>
        </>
    )
}
