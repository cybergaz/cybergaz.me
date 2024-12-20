import Image from "next/image"

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="h-screen w-screen flex flex-col gap-5 text-2xl justify-center items-center">
            <Image src={"/images/spinner.svg"} alt="laptop svg" width={60} height={60} className="dark:invert animate-spin" />
            wait a sec . . .
        </div>
    )
}
