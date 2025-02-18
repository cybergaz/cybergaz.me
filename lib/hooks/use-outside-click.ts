"use client"

import React, { useEffect } from "react";

export const useOutsideClick = (
    ref: React.RefObject<HTMLDivElement>,
    callback: Function,
    excludeRef?: React.RefObject<HTMLButtonElement>
) => {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            if (
                !ref.current ||
                ref.current.contains(event.target as Node) ||
                (excludeRef?.current && excludeRef.current.contains(event.target as Node))
            ) {
                return;
            }
            callback(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, callback, excludeRef]);
};

// export const useOutsideClick = (
//     ref: React.RefObject<HTMLDivElement>,
//     callback: Function
// ) => {
//     useEffect(() => {
//         const listener = (event: any) => {
//             if (!ref.current || ref.current.contains(event.target)) {
//                 return;
//             }
//             callback(event);
//         };
//
//         document.addEventListener("mousedown", listener);
//         document.addEventListener("touchstart", listener);
//
//         return () => {
//             document.removeEventListener("mousedown", listener);
//             document.removeEventListener("touchstart", listener);
//         };
//     }, [ref, callback]);
// };
