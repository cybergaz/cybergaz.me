import AboutMe from "@/components/about/about-me";
import ImageSlider from "@/components/ui/image-slider";
import Spinner from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function About() {
    const images = ["/images/ss.png", "/images/ss1.png", "/images/ss2.png", "/images/ss3.png", "/images/ss4.png"];
    return (
        <section className=" pt-40 text-lg px-5 mx-auto flex flex-col justify-center items-center gap-8 max-w-6xl min-w-72">

            <div className="text-3xl font-semibold">WHO AM I</div>
            <AboutMe />
            <div>random quote or random talk (in half width box)</div>
            <span className="h-px w-[100%] bg-gradient-to-r from-transparent via-blue-500/80 to-transparent transition-opacity duration-500 group-hover:opacity-40" />

            <div className="text-3xl font-semibold">WHAT I KNOW</div>
            <div className="w-screen h-60"></div>

            <div className="text-2xl">this page is unfinshed , and i'm currently building it</div>
            <div>in the mean time, you can visit my old portfolio <a className="text-blue-500" href="https://cybergaz-old.vercel.app" target="_blank">OLD PORTFOLIO</a></div>



            {/* <div>about me and my education</div> */}
            {/* <div>what i know</div> */}
            {/* <div>tools i use: since nobody cares about what tools someone uses , if you're still here you must be really curious about my workflow , here's some insights</div> */}
            {/* <div>experience</div> */}
            {/* <div>i was thinking about moving toward 2 pages instead of 3 (home & about)</div> */}
            {/* <div>get in touch form</div> */}
            {/* <div>liked this portfolio component</div> */}
        </section>
    );
}
