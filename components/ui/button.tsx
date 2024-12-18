import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
    return (
        <button
            className={cn(
                'px-6 py-1.5 border dark:bg-blue-300/10 bg-blue-400/10 hover:bg-blue-400/20 dark:hover:bg-blue-400/20 border-blue-500/20 text-foreground mx-auto text-center rounded-full relative',
                className
            )}
            {...props}
        >
            {children}
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent dark:via-blue-500 via-blue-600 to-transparent" />
        </button>
    );
};

Button.displayName = 'Button';

export { Button };
