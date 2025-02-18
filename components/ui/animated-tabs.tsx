"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface AnimatedTabsProps {
    tabs?: Tab[];
    className?: string;
}

const AnimatedTabs = ({
    tabs,
    className,
}: AnimatedTabsProps) => {

    if (!tabs?.length) return null;
    const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

    return (
        <div className={cn("w-full justify-center items-center flex flex-col gap-y-5", className)}>
            <div className="flex gap-5 w-fit flex-wrap justify-center items-center border border-foreground/15 p-1 rounded-2xl backdrop-blur-[8px]">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            "relative px-6 py-2 text-base font-medium rounded-lg text-foreground outline-none transition-colors"
                        )}
                    >
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="active-tab"
                                className="absolute inset-0 bg-foreground/10 !rounded-xl"
                                transition={{ type: "spring", duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{tab.label}</span>
                    </button>
                ))}
            </div>

            <div className="w-full p-4 bg-foreground/5 shadow-[0_0_20px_rgba(0,0,0,0.2)] text-foreground backdrop-blur-[8px] rounded-2xl border border-foreground/15 min-h-60 h-full">
                {tabs.map(
                    (tab) =>
                        activeTab === tab.id && (
                            <motion.div
                                key={tab.id}
                                initial={{
                                    opacity: 0,
                                    scale: 0.95,
                                }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{
                                    duration: 0.25,
                                }}
                            >
                                {tab.content}
                            </motion.div>
                        )
                )}
            </div>
        </div>
    );
};

export { AnimatedTabs };

