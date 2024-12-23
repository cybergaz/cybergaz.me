import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: '404 Not Found'
}

const NotFound = () => {
    return (
        <div className='pb-40 pt-52 flex h-screen w-screen flex-col items-center justify-center gap-12'>
            <span className='text-center text-3xl sm:text-xl font-medium'>This page went out to buy some Wi-Fi and never made it home.</span>
            <Link href='/'>
                <Button className='text-lg font-medium'>
                    Help It Return
                </Button>
            </Link>
        </div>
    )
}

export default NotFound
