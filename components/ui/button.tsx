import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    neon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ className, neon = true, children, ...props }) => {
    return (
        <button
            className={cn(
                'group px-7 py-1.5 border bg-blue-500/5 hover:bg-blue-500/0 border-blue-500/20 text-foreground mx-auto text-center rounded-full relative',
                className
            )}
            {...props}
        >
            <div className={cn("absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-y-0 bg-gradient-to-r w-3/4 mx-auto from-transparent dark:via-blue-500 via-blue-600 to-transparent hidden", neon && "block")} />
            {children}
            <span className={cn("absolute group-hover:opacity-30 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent dark:via-blue-500 via-blue-600 to-transparent hidden", neon && "block")} />
        </button>
    );
};

Button.displayName = 'Button';

export { Button };
