"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ToggleTheme } from "@/components/toggle-theme"
// import { MotionDiv } from '@/components/ui/motion-div';
import { cn } from "@/lib/utils"
import { LINKS, NAVLINKS } from "@/lib/constants";
import { usePathname } from "next/navigation"
import { useOutsideClick } from "@/lib/hooks/use-outside-click"

export default () => {
    const [isOpen, setIsOpen] = useState(false)
    const menuButtonRef = React.useRef<HTMLButtonElement>(null);

    return (
        <>
            <header className="fixed z-40 w-screen px-5 mt-1 sm:px-2 h-20 csm:h-[4.5rem] flex justify-between items-center text-base" >
                <nav className="flex justify-between items-center w-[80rem] mx-auto rounded-2xl px-5 sm:px-3 py-2.5 csm:py-2 bg-foreground/[0.04] sm:bg-foreground/5 backdrop-blur-md shadow-md">
                    <Logo />
                    <NavLinksContainer setIsOpen={setIsOpen} />
                    <ExtraLinks />
                    <MenuButton menuButtonRef={menuButtonRef} isOpen={isOpen} setIsOpen={setIsOpen} />
                </nav>
            </header>

            {isOpen && <MobileNav menuButtonRef={menuButtonRef} setIsOpen={setIsOpen} />}
        </>
    )
}

const Logo = () => (
    <div
        className="motion-preset-slide-down-lg motion-delay-100 motion-duration-1000 flex justify-center items-center pr-56 csm:pr-1"
    // initial={{ opacity: 0, x: -30 }}
    // animate={{ opacity: 1, x: 0 }}
    // transition={{ duration: 0.4 }}
    >
        <Link href="/" className="csm:w-[1.85rem] w-9 active:scale-95 transition-transform duration-300">
            <Image className="grayscale hover:grayscale-0 transition-all duration-500" src="/favicon/favicon.ico" alt="site-logo" width={40} height={30} priority />
        </Link>
    </div>
)

const NavLinksContainer = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => (
    <div
        className="motion-preset-slide-down-lg motion-delay-500 motion-duration-1000 px-[0.3rem] py-[0.67rem] border-[0.5px] border-foreground/[0.07] rounded-full csm:hidden "
    // initial={{ opacity: 0, scale: 0.85 }}
    // animate={{ opacity: 1, scale: 1 }}
    // transition={{ duration: 0.5 }}
    >
        <NavLinks setIsOpen={setIsOpen} />
    </div>
)

const NavLinks = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => (
    <ul className={cn("relative flex csm:flex-col csm:space-y-6 items-center justify-center gap-x-3")}>
        {NAVLINKS.map(({ title, href }, i) => {
            const isActive = href === usePathname()
            return (
                <li key={i} className=" grid grid-cols-1 space-y-9 justify-center items-center place-items-center">
                    <div className="active:scale-95 csm:mb-0.5 transition-transform duration-300">
                        <Link
                            href={href}
                            onClick={() => setIsOpen(false)}
                            className={cn('rounded-full underline-offset-2 px-[1.35rem] csm:px-6 z-20 py-[0.5rem] csm:py-2.5 hover:bg-foreground/[0.02] text-foreground/60 transition-all duration-300', isActive && "bg-foreground/5 text-foreground")}
                        >
                            {title}
                        </Link>
                    </div>
                    {isActive && <div className="absolute w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent " />}
                </li>
            )
        })
        }
    </ul >
)

const ExtraLinks = () => (
    <div
        className="motion-preset-slide-down-lg motion-delay-700 motion-duration-1000 flex justify-center items-center gap-1 will-change-auto sm:hidden"
    // initial={{ opacity: 0, x: 30 }}
    // animate={{ opacity: 1, x: 0 }}
    // transition={{ duration: 0.4 }}
    >
        <IconLink href={LINKS.github} label="Github" />
        <IconLink href={LINKS.resume} label="Resume" />
        <ToggleTheme />
    </div>
)

const IconLink = ({ href, label }: { href: string; label: string }) => (
    <a
        href={href}
        target="_blank"
        className="flex justify-center items-center transition-colors duration-500 gap-1 px-3 py-2 rounded-full cursor-pointer hover:bg-foreground/10"
    >
        {label} <Image className="dark:invert bg-transparent rotate-[220deg]" src="/images/svg/arrow.svg" alt="arrow icon" width={15} height={19} />
    </a>
);

type menuButtonProps = {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    menuButtonRef?: React.RefObject<HTMLButtonElement>
}

const MenuButton = ({ isOpen, setIsOpen, menuButtonRef }: menuButtonProps) => (
    <button
        ref={menuButtonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={cn("motion-preset-slide-down-lg motion-delay-300 motion-duration-1000 relative group hidden csm:block")}>
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
)

const MobileNav = ({ menuButtonRef, setIsOpen }: { menuButtonRef?: React.RefObject<HTMLButtonElement>, setIsOpen: (isOpen: boolean) => void }) => {
    const divRef = React.useRef<HTMLDivElement>(null);
    useOutsideClick(divRef, () => setIsOpen(false), menuButtonRef);

    return (
        <>
            {/* <div className="fixed inset-0 z-20 h-screen w-screen " onClick={() => setIsOpen(false)} /> */}
            <div
                ref={divRef}
                className={cn(
                    "fixed z-30 flex gap-3.5 justify-center items-center text-center inset-0 h-[45svh] max-w-[95svw] max-h-[90svh] top-20 mx-auto",
                    "bg-zinc-300/40 dark:bg-zinc-600/20 backdrop-blur-lg",
                    "border border-foreground/20 shadow-lg rounded-xl",
                    "motion-opacity-in-0 motion-scale-in-[0.5] motion-translate-x-in-[25%] motion-translate-y-in-[-42%] motion-duration-200/translate motion-duration-300/scale motion-duration-500/opacity"

                )}

            // initial={{ opacity: 0, y: -20 }}
            // animate={{ opacity: 1, y: 0, }}
            // transition={{ duration: 0.3 }}
            >
                <NavLinks setIsOpen={setIsOpen} />
                <div className="w-[1px] bg-background h-[15svh] hidden sm:block" />
                <div className="sm:flex sm:flex-col sm:justify-center sm:items-center gap-2 will-change-auto hidden " >
                    <IconLink href={LINKS.github} label="Github" />
                    <IconLink href={LINKS.resume} label="Resume" />
                    <ToggleTheme className={"ml-0"} />
                </div>
            </div>
        </>
    )
}
