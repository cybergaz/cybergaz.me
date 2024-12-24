"use client"

import { cn } from "@/lib/utils";

interface TextRevealProps {
    text: string,
    revealText: string
    className?: string,
}
const TextReveal: React.FC<TextRevealProps> = ({ text, revealText, className }) => {

    return (
        <div className={cn("relative group w-[70%] flex flex-col justify-center items-center", className)}>
            <div className=" opacity-100 translate-x-0 group-hover:translate-x-16 group-hover:opacity-0 transition-all duration-500 rounded-md cursor-pointer" >
                {text}
            </div>
            <div className="absolute opacity-0 -translate-x-16 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 cursor-pointer">
                {revealText}
            </div>
        </div>
    )
}

export default TextReveal;
