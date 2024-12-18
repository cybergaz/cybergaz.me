import { Button } from "@/components/ui/button";
import { MotionDiv } from '@/components/ui/motion-div';
import { FlipWords } from "@/components/ui/flip-words";
import { ImagesSlider } from '@/components/ui/image-slider';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LINKS } from "@/lib/constants";
import { NeonGradientCard } from "@/components/ui/neon-card";

const Hero = () => {
    const words = ["Frontend Applications", "Backend Applications", "Command-Line Applications", "Libraries", "System-Level Applications", "Shell Scripts", "Linux Tools"];
    const names = ["Krishna", "< cybergaz />"];
    const images = ["/images/ss.png", "/images/ss1.png", "/images/ss2.png", "/images/ss3.png", "/images/ss4.png"];
    const socials = ["linkedin", "whatsapp", "instagram", "telegram", "x",];

    return (
        <section className=" pt-44 sm:pt-32 max-w-[85rem] px-5 mx-auto font-baloo font-normal text-lg">
            <div className="flex flex-col gap-32 justify-center items-center">
                <MotionDiv
                    className=" order-1 relative place-self-center "
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Image className="dark:invert " src="/images/laptop.svg" alt="laptop svg" width={510} height={500} />
                    <ImagesSlider className="absolute inset-0 top-[0.28rem] sm:top-[0.2rem] right-[0.08rem] mx-auto w-[80%] h-[92%]" images={images} width={800} height={800} overlay={false}> loading... </ImagesSlider>
                    <div className="absolute font-baloo text-lg text-white csm:text-base opacity-0 hover:opacity-100 flex justify-center items-center inset-0 top-[0.3rem] right-[0.1rem] mx-auto w-[80%] h-[91.8%] backdrop-blur-sm transition-all duration-500" > my development environment</div>
                </MotionDiv>

                <MotionDiv
                    className=" order-2 sm:-mt-10 flex flex-col justify-center items-center space-y-9"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <div className="flex justify-center items-center space-x-2 text-2xl sm:text-xl font-nunito font-bold text-zinc-400 " >
                        <span> Hi </span>
                        <Image src="/images/handwave.svg" className="stroke-sky-50 animate-bounce dark:invert" width={25} height={25} alt="wave hand" />
                        <span>, I'm </span>
                    </div>
                    <div className="flex justify-center text-6xl cmid:text-5xl [@media(max-width:640px)]:text-4xl -ml-0.5 font-semibold font-baloo text-neutral-600 dark:text-neutral-400">
                        <FlipWords words={names} className="ml-5 sm:ml-1 " duration={5000} /> <br />
                    </div>
                    <div className=" flex flex-col justify-center items-center text-xl csm:text-center [@media(max-width:640px)]:text-left sm:text-lg csm:leading-8 leading-9 font-baloo dark:text-neutral-400 " >
                        <div>
                            A passionate software developer & open-source enthusiast who enjoys building
                            <br className="hidden csm:block" />
                            <FlipWords words={words} className="dark:text-blue-400 text-blue-600 sm:-ml-2" duration={1000} />
                            <br />
                            that meet the client's requirements, with attention to detail, scalability and performance along with clean code.
                        </div>
                    </div>
                    <Link href="/about">
                        <Button className="px-7 flex justify-center items-center transition-all duration-200">
                            About Me
                        </Button>
                    </Link>
                </MotionDiv>

                <MotionDiv
                    className=" space-x-7 sm:space-x-0 flex sm:flex-col justify-start csm:justify-center items-center gap-x-5 gap-y-10 order-3"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <div className=""> SAY HELLO </div>
                    <div className="flex justify-center items-center gap-8 sm:gap-5">
                        {socials.map((social) => (
                            <a key={social} href={LINKS[social as keyof typeof LINKS]} target="_blank" className="p-2.5 rounded-full bg-zinc-500/10 hover:bg-blue-500/10 hover:scale-110  transition-all duration-300">
                                <Image src={`/images/${social}.svg`} className="dark:invert" width={26} height={26} alt={`${social} icon`} />
                            </a>
                        ))}
                    </div>
                </MotionDiv>

                <MotionDiv
                    className=" flex justify-center items-center mb-28 order-4"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <a href="mailto:gaz.sync@gmail.com" target="_blank" >
                        <NeonGradientCard className="w-44 h-14 flex justify-center items-center font-semibold "> CONTACT ME </NeonGradientCard>
                    </a>
                </MotionDiv>

            </div>
            <MotionDiv className="mt-20 flex justify-center items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
            >
                <Link href="/about">
                    <Button className=" flex justify-center items-center gap-2 hover:gap-3 transition-all duration-200">
                        Next Page
                        <Image src="/images/arrow.svg" className="rotate-[270deg] dark:invert" width={20} height={20} alt="arrow-right" />
                    </Button>
                </Link>
            </MotionDiv>

        </section >

    )

}

export default Hero
