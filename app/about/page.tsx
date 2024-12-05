import Image from "next/image";

export default function About() {
    return (
        <section className="h-[50vh] text-2xl mx-auto flex flex-col justify-center items-center max-w-5xl min-w-72">
            under construction
            <Image src="/images/worker.svg" className="dark:invert" alt="..." width={120} height={40} />

            <div>about me and my education</div>
            <div>random quote or random talk</div>
            <div>what i know</div>
            <div>experience</div>
            <div>get in touch form</div>
        </section>
    );
}
