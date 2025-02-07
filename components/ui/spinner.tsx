import Image from 'next/image'
import { cn } from '@/lib/utils';

const Spinner = ({ className }: { className?: string }) => {
    return (
        <Image src={"/images/svg/spinner.svg"} alt="spinner" width={60} height={60} className={cn("dark:invert bg-transparent animate-spin", className)} />
    )
}

export default Spinner;
