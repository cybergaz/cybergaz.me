"use client"
import Image from "next/image";
import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import Particles from "@/components/particles";
import Hero from "@/components/home/hero";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

export default function Home() {
    // -----------------------------------------------------------------------------------------------
    //  color   bg-blue-300, bg-blue-400  is something else (make some use of them)
    // -----------------------------------------------------------------------------------------------
    return (
        <div className="mx-auto overflow-hidden" id="home">
            <Particles
                className="fixed transition-colors inset-0 -z-[8] animate-fadein"
                quantity={70}
            />
            {/* <BackgroundBeams className="" /> */}
            <Hero />
            <div className='mt-[20svh] csm:mt-0 animate-zoomin space-y-6 md:my-10 flex justify-center items-center bg-gray-800'>
                <button className="">
                    hello world how are you doing??
                </button>
            </div>
            {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#5b3b3c]"></div> */}
            {/* <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#433f68]"></div> */}
            {/**/}
            {/* <div className="bg-[#dbd7fb] absolute bottom-0 -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#433f68]"></div> */}
            {/* <div className="bg-[#fbe2e3] absolute bottom-0 -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#5b3b3c]"></div> */}

            <LampContainer className="w-screen">
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Build lamps <br /> the right way
                </motion.h1>
            </LampContainer>
            {/* <div className="h-72 w-72 bg-black/20 border-red-400 border-2 rounded-lg fixed backdrop-blur-md" >hello</div> */}
            <div className="h-96">
                temp content
                ahoy there! 🎉 i'm a seasoned full-stack developer, proudly waving my information technology undergrad cape from sppu! 🎓 i've delved into web development since my freshman days. 💻 my focus lies in crafting websites and applications that seamlessly blend functionality. oh, and did i mention my love for building full-stack clones and side projects?💡it's kind of my thing! 🚀
            </div>
            <div className="h-96">
                temp content
                ahoy there! 🎉 i'm a seasoned full-stack developer, proudly waving my information technology undergrad cape from sppu! 🎓 i've delved into web development since my freshman days. 💻 my focus lies in crafting websites and applications that seamlessly blend functionality. oh, and did i mention my love for building full-stack clones and side projects?💡it's kind of my thing! 🚀
            </div>
            <div className="h-96">
                temp content
                ahoy there! 🎉 i'm a seasoned full-stack developer, proudly waving my information technology undergrad cape from sppu! 🎓 i've delved into web development since my freshman days. 💻 my focus lies in crafting websites and applications that seamlessly blend functionality. oh, and did i mention my love for building full-stack clones and side projects?💡it's kind of my thing! 🚀
            </div>

            <div className="h-96" id="about">
                temp content
                ahoy there! 🎉 i'm a seasoned full-stack developer, proudly waving my information technology undergrad cape from sppu! 🎓 i've delved into web development since my freshman days. 💻 my focus lies in crafting websites and applications that seamlessly blend functionality. oh, and did i mention my love for building full-stack clones and side projects?💡it's kind of my thing! 🚀
            </div>
            <div className="h-96">
                temp content
                ahoy there! 🎉 i'm a seasoned full-stack developer, proudly waving my information technology undergrad cape from sppu! 🎓 i've delved into web development since my freshman days. 💻 my focus lies in crafting websites and applications that seamlessly blend functionality. oh, and did i mention my love for building full-stack clones and side projects?💡it's kind of my thing! 🚀
            </div>
            <div className="h-96">
                temp content
                ahoy there! 🎉 i'm a seasoned full-stack developer, proudly waving my information technology undergrad cape from sppu! 🎓 i've delved into web development since my freshman days. 💻 my focus lies in crafting websites and applications that seamlessly blend functionality. oh, and did i mention my love for building full-stack clones and side projects?💡it's kind of my thing! 🚀
            </div>
            <div className="h-96">
                temp content
                ahoy there! 🎉 i'm a seasoned full-stack developer, proudly waving my information technology undergrad cape from sppu! 🎓 i've delved into web development since my freshman days. 💻 my focus lies in crafting websites and applications that seamlessly blend functionality. oh, and did i mention my love for building full-stack clones and side projects?💡it's kind of my thing! 🚀
            </div>
            <div className="h-96">
                temp content
                ahoy there! 🎉 i'm a seasoned full-stack developer, proudly waving my information technology undergrad cape from sppu! 🎓 i've delved into web development since my freshman days. 💻 my focus lies in crafting websites and applications that seamlessly blend functionality. oh, and did i mention my love for building full-stack clones and side projects?💡it's kind of my thing! 🚀
            </div>
            <div className="h-96">
                temp content
                ahoy there! 🎉 i'm a seasoned full-stack developer, proudly waving my information technology undergrad cape from sppu! 🎓 i've delved into web development since my freshman days. 💻 my focus lies in crafting websites and applications that seamlessly blend functionality. oh, and did i mention my love for building full-stack clones and side projects?💡it's kind of my thing! 🚀
            </div>
            <div className="h-96" id="contact">
                temp content
                ahoy there! 🎉 i'm a seasoned full-stack developer, proudly waving my information technology undergrad cape from sppu! 🎓 i've delved into web development since my freshman days. 💻 my focus lies in crafting websites and applications that seamlessly blend functionality. oh, and did i mention my love for building full-stack clones and side projects?💡it's kind of my thing! 🚀
            </div>
            <div className="h-96">
                temp content
                ahoy there! 🎉 i'm a seasoned full-stack developer, proudly waving my information technology undergrad cape from sppu! 🎓 i've delved into web development since my freshman days. 💻 my focus lies in crafting websites and applications that seamlessly blend functionality. oh, and did i mention my love for building full-stack clones and side projects?💡it's kind of my thing! 🚀
            </div>
            <div className="h-96">temp content</div>
            <div className="h-96">temp content</div>
            <div className="h-96">temp content</div>
            <div className="h-96">temp content</div>
        </div>
    );
}
