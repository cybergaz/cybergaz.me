import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import { motion } from "framer-motion"

const Hero = () => {
    return (

        <section id='home' className="relative min-h-screen max-h-screen mx-auto max-w-[90rem] px-5 sm:px-8 overflow-hidden pt-20">
            {/* Transforming Ideas into Dynamic Web Solutions and Efficient Software—I'm [Your Name], a Developer Who Blends Versatile Frameworks, Low-Level Precision, and Open-Source Principles to Create Powerful Applications. */}
            {/* Crafting Innovative Solutions with Modern Web Technologies and Low-Level Precision—I'm [Your Name], a Developer Who Blends Cutting-Edge Frameworks with Powerful System Programming. */}
            {/* <span className="font-tang">From To</span> */}
            {/* <br /> */}

            <div className=" bg-emerald-500">
                hehe
            </div>
            <motion.div
                className="p-10 text-7xl font-light mt-14 flex gap-x-5 justify-start"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className="font-tang translate-y-2">From</span>
                <span className="italic"> Responsive Interface</span>
            </motion.div>
            <motion.div
                className="p-10 text-7xl font-light flex gap-x-5 justify-end"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className="font-tang translate-y-2">To</span>
                <span className=""> Powerful Backends</span>
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
