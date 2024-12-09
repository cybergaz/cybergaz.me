import Image from "next/image";

export default function About() {
    return (
        <section className=" pt-40 text-lg px-5 mx-auto flex flex-col justify-center items-center max-w-5xl min-w-72">

            <div className="text-3xl font-semibold py-5">WHO AM I</div>
            <div>I'm <span className="text-blue-600 dark:text-blue-400">Krishan Kant</span> a self-driven, career-oriented software developer specializing in front-end development and open-source.

                I strongly believe in continuous learning and improving myself, so I try my best to learn in any situation possible, unfavorable or not. To further expand my knowledge and enhance my development skills.</div>
            <div className="w-screen h-60"></div>

            <div>this page is unfinshed , and i'm currently building it</div>
            <div>in the mean time, you can visit my old portfolio <a className="text-blue-500" href="https://cybergaz.vercel.app" target="_blank">OLD PORTFOLIO</a></div>
        </section>
    );
}
