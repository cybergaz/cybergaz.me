"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

import { useState, useEffect } from "react";

const useResponsiveSize = (width: number, height: number) => {
    const [size, setSize] = useState({ width: width, height: height });

    useEffect(() => {
        const originalScreenWidth = window.screen.width;
        const updateSize = () => {
            const screenWidth = window.innerWidth;
            const scale = screenWidth / originalScreenWidth;

            setSize({
                width: width * scale, // Maintain 4:1 ratio
                height: height * scale, // Maintain 4:1 ratio
            });
        };

        window.addEventListener("resize", updateSize);
        updateSize(); // Initialize on mount

        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return size;
};

function ElegantShape({
    className,
    delay = 0,
    width: fixedWidth = 400,
    height: fixedHeight = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    const iwidth = fixedWidth;
    const iheight = fixedHeight;
    const { width, height } = useResponsiveSize(iwidth, iheight);

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full dark:opacity-70",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "border border-foreground/[0.15]",
                        "shadow-[0_2px_50px_0_rgba(3,4,13,0.1)] dark:shadow-[0_2px_50px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(3,4,13,0.2),transparent_90%)] dark:after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_90%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

const HeroGeometric = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // 768px is the breakpoint for tablets
        };

        checkMobile(); // Check on mount
        window.addEventListener("resize", checkMobile); // Check on resize

        return () => window.removeEventListener("resize", checkMobile); // Cleanup
    }, []);

    // Don't render the component if the screen is mobile
    if (isMobile) {
        return null;
    }

    return (
        <div className="-z-10 fixed min-h-screen w-full flex items-center justify-center overflow-hiddden">

            <div className="absolute inset-0 bg-linear-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />

        </div>
    );
}

export default HeroGeometric;
