"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedTabs, Tab } from "../ui/animated-tabs"
import { Bell, Home, HelpCircle, Settings, Shield, Mail, User, FileText, Lock } from "lucide-react";
import { ExpandableTabs, Tab as TabItem } from "@/components/ui/expandable-tabs";
import Image from "next/image";
import { cn } from "@/lib/utils";

type SkillItemType = {
    iconPath: string,
    title: string,
    opacity?: string,
    color?: string,
    className?: string
}

const SkillsItem = ({ iconPath, title, opacity, color, className }: SkillItemType) => {
    return (
        <div className={cn("flex flex-col gap-y-2 justify-center items-center", opacity)}>
            <div className={cn("relative rounded-full bg-foreground/10 p-5", color)}>
                <div className="absolute right-4 top-4 h-1 w-1 rounded-full bg-green-400 animate-ping" />
                <Image src={iconPath} alt={title} width={50} height={50} className={cn("w-12 h-12", className)} />
            </div>
            <span className="text-lg font-medium">
                {title}
            </span>
        </div>
    )
}

export function Skills() {

    const skillsTabs: Tab[] = [
        {
            id: "tab1",
            label: "Programming Languages",
            content: (
                <>
                    <div> proficiency is sorted by opacity (?) -- make this a button to popup a help card describing your representation </div>
                    <div className="py-10 grid grid-cols-5 gap-10 gap-y-16 w-full h-full">
                        <SkillsItem iconPath="/images/skills/rust.svg" title="Rust" className="dark:invert" color="bg-amber-900/20 border border-amber-900/30" />
                        <SkillsItem iconPath="/images/skills/typescript.svg" title="TypeScript" className="rounded-full" color="bg-blue-600/10 border border-blue-600/20" />
                        <SkillsItem iconPath="/images/skills/javascript.svg" title="JavaScript" className="rounded-full" color="bg-yellow-500/10 border border-yellow-500/20" />
                        <SkillsItem iconPath="/images/skills/bash.svg" title="Bash" className="" color="border border-foreground/15" />
                        <SkillsItem iconPath="/images/skills/python.svg" title="Python" className="" color="bg-blue-700/10 border border-blue-700/20" opacity="" />
                        <SkillsItem iconPath="/images/skills/java.svg" title="Java" className="" color="bg-indigo-600/10 border border-indigo-600/20" />
                        <SkillsItem iconPath="/images/skills/go.svg" title="Go" className="" color="bg-blue-400/10 border border-blue-400/20" />
                    </div>
                </>
            ),
        },
        {
            id: "tab2",
            label: "Backend Development",
            content: (
                <div className="py-10 grid grid-cols-5 gap-10 gap-y-14 w-full h-full">
                    <SkillsItem iconPath="/images/skills/express.svg" title="Express.js" className="dark:invert" />
                    <SkillsItem iconPath="/images/skills/express.svg" title="Express.js" className="dark:invert" />
                    <SkillsItem iconPath="/images/skills/express.svg" title="Express.js" className="dark:invert" />
                    <SkillsItem iconPath="/images/skills/express.svg" title="Express.js" className="dark:invert" />
                    <SkillsItem iconPath="/images/skills/express.svg" title="Express.js" className="dark:invert" />
                    <SkillsItem iconPath="/images/skills/express.svg" title="Express.js" className="dark:invert" />
                    <SkillsItem iconPath="/images/skills/express.svg" title="Express.js" className="dark:invert" />
                    <SkillsItem iconPath="/images/skills/express.svg" title="Express.js" className="dark:invert" />
                </div>
            ),
        },
        {
            id: "tab3",
            label: "Frontend Development",
            content: (
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                    <img
                        src="https://images.unsplash.com/photo-1506543730435-e2c1d4553a84?q=80&w=2362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Tab 2"
                        className="rounded-lg w-full h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                    />
                    <div className="flex flex-col gap-y-2">
                        <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Tab 2
                        </h2>
                        <p className="text-sm text-gray-200 mt-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                            quos.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            id: "tab4",
            label: "Infrastructure and cloud",
            content: (
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                    <div className="flex flex-col gap-y-2">
                        <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Tab 3
                        </h2>
                        <p className="text-sm text-gray-200 mt-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                            quos.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            id: "tab5",
            label: "Misc Tools",
            content: (
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                    <div className="flex flex-col gap-y-2">
                        <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Tab 3
                        </h2>
                        <p className="text-sm text-gray-200 mt-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                            quos.
                        </p>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <>
            <AnimatedTabs tabs={skillsTabs} />
        </>
    )
}
