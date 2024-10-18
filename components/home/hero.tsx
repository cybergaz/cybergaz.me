import { motion } from "framer-motion"
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

const Hero = () => {
    const words = ["better", "cute", "beautiful", "modern"];
    const names = ["Krishna", "< cybergaz />"];

    return (
        <section id='home' className="relative min-h-screen max-h-screen mx-auto max-w-[90rem] px-5 csm:px-8 overflow-hidden pt-28 bg-red-200/00">
            {/* Transforming Ideas into Dynamic Web Solutions and Efficient Software—I'm [Your Name], a Developer Who Blends Versatile Frameworks, Low-Level Precision, and Open-Source Principles to Create Powerful Applications. */}
            {/* Crafting Innovative Solutions with Modern Web Technologies and Low-Level Precision—I'm [Your Name], a Developer Who Blends Cutting-Edge Frameworks with Powerful System Programming. */}
            {/* <span className="font-tang">From To</span> */}
            {/* <br /> */}
            {/* Hi, I'm [Your Name], a software developer who enjoys crafting full-stack solutions. */}
            {/* Hi, I'm [Your Name], a software developer who finds joy in building full-stack applications. */}

            <div className=" bg-emerald-500">
                hehe
            </div>
            <motion.div
                className=""
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "tween", duration: 0.4 }}
            >
                <motion.div
                    className="text-3xl pt-14 font-light text-zinc-400 pl-0.5"
                >
                    Hi...
                </motion.div>
                <div className="text-7xl pt-6 font-bold mx-auto font-monte text-neutral-600 dark:text-neutral-400">
                    I'm
                    <FlipWords words={names} duration={1000} /> <br />
                </div>

            </motion.div>
            {/* <div className="text-2xl font-thin"> */}
            {/**/}
            {/*     Transforming Ideas into Dynamic Web Solutions and Efficient Software <br /> I'm Krishan Kant, a Developer Who Blends Versatile Frameworks, Low-Level Precision, and Open-Source Principles to Create Powerful Applications. */}
            {/**/}
            {/* </div> */}
            {/* <br /> */}
            {/* <div className="text-2xl font-light"> */}
            {/**/}
            {/*     Transforming Ideas into Dynamic Web Solutions and Efficient Software <br /> I'm Krishan Kant, a Developer Who Blends Versatile Frameworks, Low-Level Precision, and Open-Source Principles to Create Powerful Applications. */}
            {/**/}
            {/* </div> */}
        </section >

    )

}

export default Hero
