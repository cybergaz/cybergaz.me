"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/lib/hooks/use-outside-click";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export interface Tab {
    title: string;
    icon: LucideIcon;
    href?: string;
    type?: never;
}

interface ExpandableTabsProps {
    tabs: Tab[];
    className?: string;
    activeColor?: string;
    onChange?: (index: number | null) => void;
}

const buttonVariants = {
    initial: {
        gap: 0,
        paddingLeft: ".5rem",
        paddingRight: ".5rem",
    },
    animate: (isSelected: boolean) => ({
        gap: isSelected ? ".5rem" : 0,
        paddingLeft: isSelected ? "1rem" : ".5rem",
        paddingRight: isSelected ? "1rem" : ".5rem",
    }),
};

const spanVariants = {
    initial: { width: 0, opacity: 0 },
    animate: { width: "auto", opacity: 1 },
    exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.1, type: "spring", bounce: 0, duration: 0.6 };

export function ExpandableTabs({
    tabs,
    className,
    activeColor = "text-foreground",
    onChange,
}: ExpandableTabsProps) {
    const [selected, setSelected] = React.useState<number | 0>(0);
    // const outsideClickRef = React.useRef(null);
    console.log(usePathname());

    // React.useEffect(() => {
    //     tabs.forEach((tab, index) => {
    //         if (tab.href === usePathname()) {
    //             console.log("tab.href", tab.href);
    //             setSelected(index);
    //         }
    //     })
    // }, []);
    // useOutsideClick(outsideClickRef, () => {
    //     console.log("hehe")
    //     tabs.forEach((tab, index) => {
    //         if (tab.href === usePathname()) {
    //             console.log("tab.href", tab.href);
    //             setSelected(index);
    //         }
    //     })
    //     setSelected(1);
    //     onChange?.(null);
    // });

    const handleSelect = (index: number) => {
        setSelected(index);
        onChange?.(index);
    };

    const Separator = () => (
        <div className="mx-1 h-[24px] w-[1.2px] bg-border" aria-hidden="true" />
    );

    return (
        <div
            // ref={outsideClickRef}
            className={cn(
                "flex flex-wrap items-center gap-2 rounded-2xl border border-foreground/15 bg-transparent p-1 shadow-sm",
                className
            )}
        >
            {tabs.map((tab, index) => {
                if (tab.type === "separator") {
                    return <Separator key={`separator-${index}`} />;
                }

                if (tab.href) {
                    const isActive = tab.href === usePathname()
                }
                const Icon = tab.icon;
                return (
                    <motion.button
                        key={tab.title}
                        variants={buttonVariants}
                        initial={false}
                        animate="animate"
                        custom={selected === index}
                        onClick={() => handleSelect(index)}
                        transition={transition}
                        className={cn(
                            "relative flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300",
                            selected === index
                                ? cn("bg-foreground/10", activeColor)
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                    >
                        <Icon size={20} />
                        <AnimatePresence initial={false}>
                            {selected === index && (
                                <motion.span
                                    variants={spanVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={transition}
                                    className="overflow-hidden"
                                >
                                    {tab.title}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>
                );
            })}
        </div>
    );
}
