import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation'
import { NAVLINKS } from "@/lib/constants";
import { MenuIcon } from "@/components/ui/hamburger"
import { useCallback, useState } from "react";
import { motion, useInView } from "framer-motion";


export function Navbar() {
    const pathname = usePathname()

    const [isOpen, setIsOpen] = useState(false)

    const handleMenuClick = () => {
        setIsOpen(!isOpen)
        console.log("Menu Clicked");
    }

    return (
        <div>

            <div className="csm:hidden">
                <ul className="flex items-center justify-center gap-x-8">
                    {NAVLINKS.map(({ title, href }, i) => {
                        const isActive = href === pathname

                        return (
                            <li key={i} >
                                <Link
                                    href={href}
                                    className={cn(
                                        'rounded px-3 py-2 text-md transition-colors',
                                        isActive && 'text-foreground',
                                        !isActive && 'text-muted-foreground hover:text-foreground',
                                    )}
                                >
                                    {title}
                                </Link>
                            </li>
                        )
                    })
                    }
                </ul >
            </div>
            <div className={cn("hidden csm:block")}>
                <MenuIcon onClick={handleMenuClick} />
                {isOpen &&
                    <motion.div
                        className={cn("bg-zinc-800/20 sm:backdrop-blur-md lg:backdrop-blur-md md:backdrop-blur-md backdrop-blur-md rounded-xl fixed flex pb-2 justify-center items-center text-center inset-0 translate-y-[45vh] h-[60svh] max-w-[90svw] max-h-[90svh] m-auto")}
                        initial={{ opacity: 0, y: "47vh" }}
                        animate={{ opacity: 1, y: "50vh", }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        <ul className="flex-col space-y-5">
                            {NAVLINKS.map(({ title, href }, i) => {
                                const isActive = href === pathname

                                return (
                                    <li key={i} >
                                        <Link
                                            href={href}
                                            className={cn(
                                                'rounded px-3 py-2 transition-colors',
                                                isActive && 'text-foreground',
                                                !isActive && 'text-muted-foreground hover:text-foreground',
                                            )}
                                        >
                                            {title}
                                        </Link>
                                    </li>
                                )
                            })
                            }
                        </ul >
                    </motion.div>
                }

            </div>
        </div>
    )
}
