"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

const AboutMe = () => {
    const [clicked, SetClicked] = useState(false)

    return (
        <div className="flex backdrop-blur-sm rounded-2xl csm:flex-col-reverse justify-center items-center">
            <div className="flex flex-col relative gap-6">
                <p className={cn("z-10 ease-in-out transition-all duration-700 opacity-0 translate-y-5", clicked && "opacity-100 translate-y-0")} >
                    {NickName} : it's my internet name, you can find me pretty much everywhere with this username. try googling {NickName} and top results should be affiliated to me.
                </p>
                <p className={cn("absolute ease-in-out transition-all duration-700", clicked && "opacity-0 ")} > I'm <span className="text-accent">Krishan Kant</span> a self-driven & dedicated software developer specializing in <span className="underline decoration-blue-500 underline-offset-4">full-stack development</span> and a deep engagement in open-source innovation. </p>
                <p> I prioritize lifelong learning and self-improvement, constantly seeking opportunities to expand my software development knowledge, refine my technical expertise, and adapt to emerging challenges. </p>
                <p> In my spare time, I enjoy exploring new technologies and building interesting projects. And when I’m not at the computer, you’ll find me cooking up a storm, catching a movie, or keeping fit with regular workouts. </p>
            </div>
            <div className="p-5 ml-32 csm:ml-0 csm:mb-5 flex justify-center items-center ">
                <button title="gaz easter egg" aria-label="cybergaz" role="button" className={cn("p-12 csm:p-8 w-40 csm:w-28 h-40 csm:h-28 rounded-full bg-background/10 shadow-2xl shadow-violet-700/80 hover:shadow-[#D920AF]/80 transition-all duration-500 flex justify-end items-end relative",)} onClick={() => SetClicked(!clicked)}>
                    <Image width={200} height={200} src="/favicon/favicon.ico" alt="Logo" className={cn("  transition-all duration-700", clicked ? "scale-75 grayscale -translate-x-6 csm:-translate-x-4" : "translate-x-0")} />
                    <span className={cn("absolute transition-all duration-700 font-medium text-5xl csm:text-3xl opacity-0 mb-[0.3rem] csm:mb-0.5", clicked ? "opacity-100 translate-x-4 csm:translate-x-2" : "-translate-x-6")}> az </span>
                </button>
            </div>
        </div >
    )
}

const NickName = <a href="https://www.google.com/search?q=cybergaz" target="_blank" className="text-accent">cybergaz</a>

export default AboutMe
