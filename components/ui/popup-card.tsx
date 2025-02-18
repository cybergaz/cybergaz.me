"use client"

import { useOutsideClick } from "@/lib/hooks/use-outside-click";
import { cn } from "@/lib/utils"
// import { motion } from "motion/react"
// import { useState } from "react"

// const PopupCard = () => {
//     const [open, setOpen] = useState(false)
//
//     const handleClick = () => {
//         setOpen(!open)
//     }
//
//     return (
//         <motion.div
//             onClick={() => setOpen(!open)}
//             className={cn("cursor-pointer w-5 flex justify-center items-center h-5 bg-indigo-600/40 rounded-full p-4 sm:p-3 transition-all duration-300", open && "")}
//             initial={{ x: 0 }}
//             animate={{ x: 20 }}
//         >
//             ?
//         </motion.div >
//     )
// }
//
// export default PopupCard

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

type PopupCardProps = {
    buttonWidth?: number,
    cardWidth?: number,
    buttonHeight?: number,
    cardHeight?: number,
    buttonText: string,
    children?: React.ReactNode
};
const PopupCard = ({ buttonWidth = 100, cardWidth = 300, buttonHeight = 40, cardHeight = 200, buttonText, children }: PopupCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null)
    const excludeButtonRef = useRef(null)

    useOutsideClick(contentRef, () => { setIsOpen(false) }, excludeButtonRef)

    const containerVariants = {
        button: {
            width: buttonWidth,
            height: buttonHeight,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        },
        card: {
            width: cardWidth,
            height: cardHeight,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    const contentVariants = {
        button: { opacity: 0, y: 10 },
        card: { opacity: 1, y: 0 }
    };

    return (
        <div className={cn("fixed right-2.5 z-40 flex items-center justify-center min-h-[200px]")}>
            <motion.div
                variants={containerVariants}
                initial="button"
                animate={isOpen ? "card" : "button"}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white cursor-pointer rounded-lg shadow-lg overflow-hidden"
                style={{
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    cursor: "pointer"
                }}
            >
                <div className="p-4 h-full">
                    <AnimatePresence mode="wait">
                        {!isOpen ? (
                            <motion.div
                                key="button"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center justify-center h-full text-lg font-medium text-blue-600"
                            >
                                {buttonText}
                                {/* <motion.span */}
                                {/*     animate={{ rotate: isOpen ? 180 : 0 }} */}
                                {/*     className="ml-2" */}
                                {/* > */}
                                {/*     ▼ */}
                                {/* </motion.span> */}
                            </motion.div>
                        ) : (
                            <motion.div
                                ref={contentRef}
                                key="content"
                                variants={contentVariants}
                                initial="button"
                                animate="card"
                                exit="button"
                                className="h-full flex flex-col"
                            >
                                {children}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default PopupCard;
