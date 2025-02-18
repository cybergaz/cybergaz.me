import AboutMe from "@/components/about/about-me";
import { Skills } from "@/components/about/skills";
import ImageSlider from "@/components/ui/image-slider";
import Spinner from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AnimatedTabs, Tab } from "@/components/ui/animated-tabs"
import { Button } from "@/components/ui/button";
import HeroGeometric from "@/components/ui/hero-shapes";

export default function About() {

    return (
        <section className=" pt-40 text-lg px-5 mx-auto flex flex-col justify-center items-center gap-10 max-w-6xl min-w-72">

            <div className="text-3xl font-semibold">Who Am I</div>
            <AboutMe />
            {/* <div>random quote or random talk (in half width box)</div> */}

            <div className="text-3xl font-semibold mt-40 mb-3">Things I Know</div>
            <Skills />


            <div className="w-screen h-60"></div>

            <span className="h-px w-[100%] bg-gradient-to-r from-transparent via-blue-500/80 to-transparent transition-opacity duration-500 group-hover:opacity-40" />
            <div className="text-2xl">this page is unfinshed, and i'm currently working on it</div>
            <div>in the mean time, you can visit my old portfolio <a className="text-blue-500" href="https://cybergaz-old.vercel.app" target="_blank">OLD PORTFOLIO</a></div>



            {/* <HeroGeometric /> */}
            {/* <div>what i know</div> */}
            {/* <div>tools i use: since nobody cares about what tools someone uses , if you're still here you must be really curious about my workflow , here's some insights</div> */}
            {/* <div>experience</div> */}
            {/* <div>i was thinking about moving toward 2 pages instead of 3 (home & about)</div> */}
            {/* <div>get in touch form</div> */}
            {/* <div>liked this portfolio component</div> */}
        </section>
    );
}
