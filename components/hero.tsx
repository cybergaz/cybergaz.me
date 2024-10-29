"use client"

import { motion } from "framer-motion"
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
    const words = ["Frontend Applications", "Backend Applications", "Command-Line Applications", "Libraries", "System-Level Applications", "Shell Scripts", "Linux Tools"];
    const names = ["Krishna", "< cybergaz />"];
    const debug = ""

    return (
        <section id='home' className={`${debug} min-h-screen pt-48 max-w-[100rem] px-5 mx-auto`}>
            <div className="grid grid-cols-2 grid-rows-2 csm:grid-cols-1 csm:grid-rows-4 ">
                <motion.div
                    className={`${debug} flex-col space-y-9 csm:order-2`}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "tween", duration: 0.4 }}
                >
                    <div
                        className="flex justify-start items-center space-x-2 text-2xl font-nunito font-bold text-zinc-400 pl-0.5"
                    >
                        <span>
                            Hi
                        </span>

                        <svg width="25px" height="25px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify animate-bounce stroke-sky-50 iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet"><path d="M5.946 30.785c-2.999 7.189 2.213 15.866 9.784 17.387c-5.9-3.962-9.584-10.327-9.784-17.387" fill="#000000"></path><path d="M15.73 48.172l-.184-.039c.023.006.078.015.184.039" fill="#000000"></path><path d="M2 44.261c.489 6.02 8.039 9.878 13.457 7.412C9.879 50.475 6.179 49.378 2 44.261" fill="#000000"></path><path d="M46.504 22.794c3.512-7.168-1.475-16.036-9.055-17.963c5.799 4.233 9.239 10.824 9.055 17.963" fill="#000000"></path><path d="M48.865 17.848c4.192-3.709 2.502-11.088-2.332-13.49c2.33 4.565 3.151 8.421 2.332 13.49" fill="#000000"></path><path d="M60.519 14.345a5.43 5.43 0 0 0-3.303-1.116c-7.206 0-8.498 9.386-10.097 13.05c0 0-7.389-15.469-9.959-20.573c-2.65-5.265-8.307-4.177-9.964-1.311C23.26.316 15.823 3.609 16.771 8.568c-5.104-.392-7.167 4.643-6.034 7.871c-3.945-.122-5.789 4.757-4.455 8.25c.069.182 7.073 13.966 8.959 18.662c.219.545.44 1.128.672 1.742c1.525 4.032 3.614 9.554 8.84 13.989C27.003 60.991 30.118 62 33.764 62c6.426 0 13.581-3.189 18.229-8.126c4.163-4.421 6.158-9.848 5.77-15.695c-.348-5.256 1.324-10.208 2.667-14.188c1.457-4.319 2.607-7.731.089-9.646m-5.947 23.66c.813 11.628-10.842 21.439-20.73 21.439c-3.021 0-6.15-.488-8.105-2.147c-5.606-4.758-7.013-10.646-8.638-14.684c-1.941-4.831-6.705-14.114-9.014-18.784c-.945-1.912.634-5.981 3.384-5.981L19.4 34.716l3.005 1.804s-6.882-14.998-9.061-20.167c-1.272-3.018.92-6.662 3.874-6.187l9.846 21.016l3.006 1.808L18.594 8.757c-.046-4.295 5.831-4.362 7.197-1.854c3.457 6.348 9.947 20.279 9.947 20.279l3.004 1.807L27.969 6.146c2.104-2.754 5.816-2.368 7.416.975c1.922 4.015 10.061 21.454 10.061 21.454c-8.035 3.012-13.52 11.743-7.777 20.35c-4.557-9.41 3.516-16.06 8.285-18.258c1.805-.833 2.469-2.408 2.469-2.408l-.004.001c.629-1.139.592-2.662 1.342-5.127c1.625-5.335 3.854-8.162 7.125-8.162c.754 0 1.704.564 2.14 1.207c2.203 3.251-5.21 11.023-4.454 21.827" fill="#000000"></path></svg>
                    </div>
                    <div className="text-7xl -ml-0.5 font-bold font-monte text-neutral-600 dark:text-neutral-400">
                        I'm
                        <FlipWords words={names} className="ml-5" /> <br />
                    </div>

                    <div className={`${debug} text-lg leading-9 font-monte dark:text-neutral-400`}>
                        A passionate software developer & open-source enthusiast <br />
                        who enjoys building <FlipWords words={words} className="dark:text-blue-400 text-blue-600" duration={1000} /> <br />
                        that meet the client's requirements, with attention to detail, <br />
                        scalability, performance along with clean code.
                    </div>

                    <div className="flex ">
                        <Link href="/about">
                            <Button className="group font-monte">
                                <span>About Me</span>
                                <span className="pl-2 group-hover:pl-3.5 transition-all duration-300">
                                    →
                                </span>
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    className={`${debug} flex justify-end items-center csm:order-1`}
                >
                    <Image className="dark:invert" src="/images/laptop.svg" alt="laptop svg" width={510} height={500} />
                </motion.div>

                <motion.div
                    className={`${debug} space-x-7 flex justify-start items-center csm:order-3`}
                >
                    <div className="">SAY HELLO</div>
                    <Image src="/images/x.svg" className="invert" width={30} height={100} alt=".." />
                    <Image src="/images/instagram.svg" className="invert" width={30} height={100} alt=".." />
                    <Image src="/images/whatsapp.svg" className="invert" width={30} height={100} alt=".." />
                    <Image src="/images/linkedin.svg" className="invert" width={30} height={100} alt=".." />
                    <Image src="/images/github.svg" className="invert" width={30} height={100} alt=".." />
                </motion.div>

                <motion.div
                    className={`${debug} flex justify-center items-center csm:order-4`}
                >
                    <Button>CONTACT ME </Button>

                </motion.div>

            </div>
        </section >

    )

}

export default Hero
