import { clsx, type ClassValue } from "clsx"
import { useState, useCallback, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function useIsMounted() {
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;

        return () => {
            isMounted.current = false;
        };
    }, []);

    return useCallback(() => isMounted.current, []);
}


interface MousePosition {
    x: number;
    y: number;
}

export function useMousePosition(): MousePosition {
    const [mousePosition, setMousePosition] = useState<MousePosition>({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return mousePosition;
}
