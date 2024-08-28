import { EventHandler } from "react";

export default function floatingButton({ onClick, children }: Readonly<{
    onClick: () => void,
    children: React.ReactNode;
}>) {
    return (
        <button
            onClick={onClick}
            className=" fixed bottom-5 right-5 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 z-50 "
        >
            {children}
        </button>
    )
}
