"use client"

import { ReactNode, useEffect, useState } from "react";

export default function({ children }: { children?: ReactNode }) {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setTimeout(() => setLoaded(true), 2000)
    }, [])
    return (
        <>
            {
                loaded
                    ?
                    (children)
                    : (
                        <div className="fixed z-50 h-screen w-screen bg-background flex gap-5 text-2xl justify-center items-center">
                            {/* <Spinner /> */}
                            {/* wait a sec . . . */}
                            <span className="motion-preset-slide-up-lg motion-blur-in-lg motion-ease-spring-bouncier motion-duration-700 text-3xl">code</span>
                            <span className="motion-preset-slide-up-lg motion-blur-in-lg motion-ease-spring-bouncier motion-duration-700 motion-delay-300 text-3xl">.</span>
                            <span className="motion-preset-slide-up-lg motion-blur-in-lg motion-ease-spring-bouncier motion-duration-700 motion-delay-500 text-3xl">eat</span>
                            <span className="motion-preset-slide-up-lg motion-blur-in-lg motion-ease-spring-bouncier motion-duration-700 motion-delay-700 text-3xl">.</span>
                            <span className="motion-preset-slide-up-lg motion-blur-in-lg motion-ease-spring-bouncier motion-duration-700 motion-delay-1000 text-3xl">drink</span>
                        </div>
                    )

            }
        </>
        // <div className="fixed z-50 h-screen w-screen bg-background flex flex-col gap-5 text-2xl justify-center items-center">
        //     <Spinner />
        //     wait a sec . . .
        // </div>
    )
}


