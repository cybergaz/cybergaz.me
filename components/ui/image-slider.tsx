"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Spinner from "./spinner";

interface ImageSliderProps {
    images: string[];
    className?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const nextImage = () => {
        setIsLoading(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setIsLoading(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className={cn("relative w-full max-w-md mx-auto", className)}>
            <div className="overflow-hidden relative flex justify-center items-center rounded-md sm:rounded-sm">
                {
                    isLoading && <Spinner className="absolute invert sm:w-5 w-10" />
                }
                <Image
                    width={1000}
                    height={500}
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className=""
                    onLoad={() => setIsLoading(false)}
                />
                <div className="absolute text-lg text-white csm:text-base opacity-0 hover:opacity-100 flex justify-center items-center inset-0 mx-auto rounded-md backdrop-blur-sm transition-all duration-500" > my development environment</div>
            </div>
            {
                !isLoading &&
                <>
                    <Button
                        onClick={prevImage}
                        className="absolute sm:scale-75 top-[43%] left-2 -translate-y-1/2 text-white mix-blend-plus-lighter p-2 rounded-full"
                        neon={false}
                    >
                        ◀
                    </Button>
                    <Button
                        onClick={nextImage}
                        className="absolute sm:scale-75 top-[43%] right-2 -translate-y-1/2 text-white mix-blend-plus-lighter p-2 rounded-full"
                        neon={false}
                    >
                        ▶
                    </Button>
                </>
            }
        </div>
    );
};

export default ImageSlider;









// "use client";
//
// import NextImage from "next/image";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "framer-motion";
// import React, { useEffect, useState } from "react";
//
// const MotionImage = motion.create(NextImage);
//
// export const ImagesSlider = ({
//     images,
//     children,
//     overlay = true,
//     overlayClassName,
//     className,
//     autoplay = true,
//     direction = "up",
//     width,
//     height
// }: {
//     images: string[];
//     children: React.ReactNode;
//     overlay?: React.ReactNode;
//     overlayClassName?: string;
//     className?: string;
//     autoplay?: boolean;
//     direction?: "up" | "down";
//     width: number;
//     height: number;
// }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     // const [, setLoading] = useState(false);
//     const [loadedImages, setLoadedImages] = useState<string[]>([]);
//
//     const handleNext = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex + 1 === images.length ? 0 : prevIndex + 1
//         );
//     };
//
//     const handlePrevious = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
//         );
//     };
//
//     useEffect(() => {
//         loadImages();
//     }, []);
//
//     const loadImages = () => {
//         // setLoading(true);
//         const loadPromises = images.map((image) => {
//             return new Promise((resolve, reject) => {
//                 const img = new Image();
//                 img.src = image;
//                 img.onload = () => resolve(image);
//                 img.onerror = reject;
//             });
//         });
//
//         Promise.all(loadPromises)
//             .then((loadedImages) => {
//                 setLoadedImages(loadedImages as string[]);
//                 // setLoading(false);
//             })
//             .catch((error) => console.error("Failed to load images", error));
//     };
//     useEffect(() => {
//         const handleKeyDown = (event: KeyboardEvent) => {
//             if (event.key === "ArrowRight") {
//                 handleNext();
//             } else if (event.key === "ArrowLeft") {
//                 handlePrevious();
//             }
//         };
//
//         window.addEventListener("keydown", handleKeyDown);
//
//         // autoplay
//         let interval: any;
//         if (autoplay) {
//             interval = setInterval(() => {
//                 handleNext();
//             }, 5000);
//         }
//
//         return () => {
//             window.removeEventListener("keydown", handleKeyDown);
//             clearInterval(interval);
//         };
//     }, []);
//
//     const slideVariants = {
//         initial: {
//             scale: 0,
//             opacity: 0,
//             rotateX: 45,
//         },
//         visible: {
//             scale: 1,
//             rotateX: 0,
//             opacity: 1,
//             transition: {
//                 duration: 0.5,
//                 ease: [0.645, 0.045, 0.355, 1.0],
//             },
//         },
//         upExit: {
//             opacity: 1,
//             y: "-150%",
//             transition: {
//                 duration: 1,
//             },
//         },
//         downExit: {
//             opacity: 1,
//             y: "150%",
//             transition: {
//                 duration: 1,
//             },
//         },
//     };
//
//     const areImagesLoaded = loadedImages.length > 0;
//
//     return (
//         <div
//             className={cn(
//                 "overflow-hidden h-full w-full relative flex items-center justify-center",
//                 className
//             )}
//             style={{
//                 perspective: "1000px",
//             }}
//         >
//             {areImagesLoaded && children}
//             {areImagesLoaded && overlay && (
//                 <div
//                     className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
//                 />
//             )}
//
//             {areImagesLoaded && (
//                 <AnimatePresence>
//                     <MotionImage
//                         key={currentIndex}
//                         src={loadedImages[currentIndex]}
//                         width={width}
//                         height={height}
//                         alt="..."
//                         initial="initial"
//                         animate="visible"
//                         exit={direction === "up" ? "upExit" : "downExit"}
//                         variants={slideVariants}
//                         className="image h-full w-full absolute inset-0 object-cover object-center"
//                     />
//                 </AnimatePresence>
//             )}
//         </div>
//     );
// };
