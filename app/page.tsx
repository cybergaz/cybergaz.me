import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className='animate-fadeinbouncedown space-y-6 md:my-16 flex justify-center items-center'>
                <div className='animate-zoomInLeft flex py-7 flex-col-reverse items-center gap-8 md:flex-row md:justify-between'>
                    <button className=" bg-red-500 rounded-md hover:animate-fadein hover:bg-blue-300 transition-all p-8 text-black-50"> hello</button>

                </div>
            </div>
        </>
    );
}
