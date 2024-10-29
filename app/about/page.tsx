import Image from "next/image";

export default function About() {
    return (
        <div className="h-[50vh] text-2xl mx-auto flex justify-center items-center max-w-5xl min-w-72">
            About Page is under construction
            <Image src="/images/worker.svg" alt="..." width={120} height={40} />
        </div>
    );
}
