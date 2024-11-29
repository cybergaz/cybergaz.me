import { Button } from "@/components/ui/button";
import { MotionDiv } from '@/components/ui/motion-div';
import { FlipWords } from "@/components/ui/flip-words";
import { ImagesSlider } from '@/components/ui/image-slider';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LINKS } from "@/lib/constants";
import { delay } from "framer-motion";
import { NeonGradientCard } from "./ui/neon-card";

const Hero = () => {
    const words = ["Frontend Applications", "Backend Applications", "Command-Line Applications", "Libraries", "System-Level Applications", "Shell Scripts", "Linux Tools"];
    const names = ["Krishna", "< cybergaz />"];
    const images = ["/images/ss.png", "/images/ss1.png", "/images/ss2.png",];
    const socials = ["linkedin", "whatsapp", "instagram", "telegram", "x",];
    const debug = ""

    return (
        <section id='home' className={`${debug} pt-44 csm:pt-20 [@media(max-width:640px)]:p-5 max-w-[100rem] px-5 mx-auto font-monte`}>
            <div className="grid grid-cols-2 grid-rows-2 csm:grid-cols-1 csm:grid-rows-4 ">
                <MotionDiv
                    className={`${debug} flex-col space-y-9 csm:order-2 [@media(max-width:957px)]:mt-10 sm:-mt-[calc(1rem-11vw)]`}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="flex justify-start items-center space-x-2 text-2xl sm:text-xl font-nunito font-bold text-zinc-400 " >
                        <span> Hi </span>
                        <svg width="25px" height="25px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify animate-bounce stroke-sky-50 iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet"><path d="M5.946 30.785c-2.999 7.189 2.213 15.866 9.784 17.387c-5.9-3.962-9.584-10.327-9.784-17.387" fill="#000000"></path><path d="M15.73 48.172l-.184-.039c.023.006.078.015.184.039" fill="#000000"></path><path d="M2 44.261c.489 6.02 8.039 9.878 13.457 7.412C9.879 50.475 6.179 49.378 2 44.261" fill="#000000"></path><path d="M46.504 22.794c3.512-7.168-1.475-16.036-9.055-17.963c5.799 4.233 9.239 10.824 9.055 17.963" fill="#000000"></path><path d="M48.865 17.848c4.192-3.709 2.502-11.088-2.332-13.49c2.33 4.565 3.151 8.421 2.332 13.49" fill="#000000"></path><path d="M60.519 14.345a5.43 5.43 0 0 0-3.303-1.116c-7.206 0-8.498 9.386-10.097 13.05c0 0-7.389-15.469-9.959-20.573c-2.65-5.265-8.307-4.177-9.964-1.311C23.26.316 15.823 3.609 16.771 8.568c-5.104-.392-7.167 4.643-6.034 7.871c-3.945-.122-5.789 4.757-4.455 8.25c.069.182 7.073 13.966 8.959 18.662c.219.545.44 1.128.672 1.742c1.525 4.032 3.614 9.554 8.84 13.989C27.003 60.991 30.118 62 33.764 62c6.426 0 13.581-3.189 18.229-8.126c4.163-4.421 6.158-9.848 5.77-15.695c-.348-5.256 1.324-10.208 2.667-14.188c1.457-4.319 2.607-7.731.089-9.646m-5.947 23.66c.813 11.628-10.842 21.439-20.73 21.439c-3.021 0-6.15-.488-8.105-2.147c-5.606-4.758-7.013-10.646-8.638-14.684c-1.941-4.831-6.705-14.114-9.014-18.784c-.945-1.912.634-5.981 3.384-5.981L19.4 34.716l3.005 1.804s-6.882-14.998-9.061-20.167c-1.272-3.018.92-6.662 3.874-6.187l9.846 21.016l3.006 1.808L18.594 8.757c-.046-4.295 5.831-4.362 7.197-1.854c3.457 6.348 9.947 20.279 9.947 20.279l3.004 1.807L27.969 6.146c2.104-2.754 5.816-2.368 7.416.975c1.922 4.015 10.061 21.454 10.061 21.454c-8.035 3.012-13.52 11.743-7.777 20.35c-4.557-9.41 3.516-16.06 8.285-18.258c1.805-.833 2.469-2.408 2.469-2.408l-.004.001c.629-1.139.592-2.662 1.342-5.127c1.625-5.335 3.854-8.162 7.125-8.162c.754 0 1.704.564 2.14 1.207c2.203 3.251-5.21 11.023-4.454 21.827" fill="#000000"></path></svg>
                    </div>
                    <div className="text-6xl cmid:text-5xl [@media(max-width:640px)]:text-3xl -ml-0.5 font-bold font-monte text-neutral-600 dark:text-neutral-400">
                        I'm<FlipWords words={names} className="ml-5 sm:ml-1" duration={5000} /> <br />
                    </div>
                    <div className={`${debug} text-lg csm:text-base csm:leading-8 leading-9 font-monte dark:text-neutral-400 `}>
                        A passionate software developer & open-source enthusiast <br className="sm:hidden" />
                        who enjoys building <br className="hidden sm:block" /> <FlipWords words={words} className="dark:text-blue-400 text-blue-600 -ml-2" duration={1000} /> <br />
                        that meet the client's requirements, with attention to detail, <br className="sm:hidden" />
                        scalability, performance along with clean code.
                    </div>
                    <div className="flex ">
                        <Link href="/about">
                            <Button className="group font-monte flex justify-center items-center gap-1 hover:gap-2 transition-all duration-200">
                                About Me <Image src="/images/arrow.svg" className="rotate-[270deg] dark:invert" width={20} height={20} alt="arrow-right" />
                            </Button>
                        </Link>
                    </div>
                </MotionDiv>

                <MotionDiv
                    className={`${debug} relative sm:-mt-[calc(1rem-15vw)] flex justify-end items-center place-self-end self-center csm:place-self-center csm:order-1`}
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <Image className="dark:invert " src="/images/laptop.svg" alt="laptop svg" width={510} height={500} />
                    <ImagesSlider className="absolute inset-0 top-[0.28rem] sm:top-[0.2rem] right-[0.08rem] mx-auto w-[80%] h-[92%]" images={images} width={800} height={800} overlay={false}> loading... </ImagesSlider>
                    <div className="absolute font-monte text-lg text-white csm:text-base opacity-0 hover:opacity-100 flex justify-center items-center inset-0 top-[0.3rem] right-[0.1rem] mx-auto w-[80%] h-[91.8%] backdrop-blur-sm transition-all duration-500" > my development environment</div>
                </MotionDiv>

                <MotionDiv
                    className={`${debug} space-x-7 sm:space-x-0 flex sm:flex-col justify-start csm:justify-center items-center gap-x-5 gap-y-10 csm:order-3`}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <div className="">SAY HELLO</div>
                    <div className="flex justify-center items-center gap-8 sm:gap-5">
                        {socials.map((social) => (
                            <a key={social} href={LINKS[social as keyof typeof LINKS]} target="_blank" className="p-2.5 rounded-full bg-zinc-500/10 hover:bg-blue-500/10 hover:scale-110  transition-all duration-300">
                                <Image src={`/images/${social}.svg`} className="dark:invert" width={26} height={26} alt={`${social} icon`} />
                            </a>
                        ))}
                    </div>
                </MotionDiv>

                <MotionDiv
                    className={`${debug} flex justify-center items-center pl-[35%] cmid:pl-[5%] [@media(max-width:957px)]:pl-0 csm:-mt-52 csm:order-4`}
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <a href="mailto:gaz.sync@gmail.com" target="_blank" >
                        <NeonGradientCard className="w-40 h-14 flex justify-center items-center font-medium"> CONTACT ME </NeonGradientCard>
                    </a>
                </MotionDiv>

            </div>

        </section >

    )

}

export default Hero
