import Spinner from "@/components/ui/spinner"

export default function() {
    // Or a custom loading skeleton component
    return (
        <div className="h-screen w-screen flex flex-col gap-5 text-2xl justify-center items-center">
            <Spinner />
            wait a sec . . .
        </div>
    )
}
