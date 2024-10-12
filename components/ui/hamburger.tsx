import { cn } from "@/lib/utils";
import { useState } from "react";
type MenuIconProps = {
    className?: string;
    onClick?: () => void;
};
const MenuIcon = ({ className = "", onClick }: MenuIconProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        if (onClick) {
            onClick();
        }
    }
    return (
        <button onClick={handleClick} className={cn("relative group hidden csm:block", className)}>
            <div className={cn("relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200")}>
                <div className={cn("flex flex-col justify-between w-[14px] h-[14px] transform transition-all duration-300 origin-center")}>

                    {/* Menu */}
                    <div className={cn("bg-white h-[2px] w-5 rounded-full transform transition-all duration-300 origin-left", { ["translate-x-10"]: isOpen })}></div>
                    <div className={cn("bg-white h-[2px] w-5 rounded-full transform transition-all duration-300 delay-75", { ["translate-x-10"]: isOpen })}></div>
                    <div className={cn("bg-white h-[2px] w-5 rounded-full transform transition-all duration-300 origin-left delay-150", { ["translate-x-10"]: isOpen })}></div>

                    {/* Cross */}
                    <div className={cn("absolute items-center justify-between transform transition-all duration-500 top-2 -translate-x-10 flex w-0", { ["translate-x-0 w-12"]: isOpen })}>
                        <div className={cn("absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300", { ["rotate-45"]: isOpen })}></div>
                        <div className={cn("absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ", { ["-rotate-45"]: isOpen })}></div>
                    </div>
                </div>
            </div>
        </button>

    )
}

export { MenuIcon };
