"use client"

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import Image from "next/image";

const ToggleTheme = ({ className }: { className?: String }) => {
    const isMounted = useIsMounted();

    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => { setTheme((theme === "system" ? systemTheme : theme) ?? "dark") }, [])

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (

        <button
            onClick={toggleTheme}
            className={cn("w-[1.6rem] ease hover:bg-foreground/10 ml-3 flex items-center justify-center rounded-full p-1 text-zinc-900 dark:text-zinc-300", className)}
            aria-label="theme-switcher"
        >

            {
                isMounted() ?
                    (theme === "light" ?
                        <Image src="/images/sun.svg" alt="sun_svg" className="dark:invert bg-transparent" width={17} height={17} /> : <Image src="/images/moon.svg" className="dark:invert bg-transparent" alt="sun_svg" width={17} height={17} />) :
                    <Image src="/images/moon.svg" alt="sun_svg" className="dark:invert bg-transparent" width={17} height={17} />
            }
        </button >
    )
}

function useIsMounted() {
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;

        return () => {
            isMounted.current = false;
        };
    }, []);

    return () => isMounted.current;
}

export { ToggleTheme }
