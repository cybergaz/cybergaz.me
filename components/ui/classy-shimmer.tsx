const Shimmer = ({ text }: { text: string }) => {
    return (
        <div className="flex items-center justify-center">
            <div className="relative px-4 py-2 overflow-hidden">
                <h1 className="shimmer-text">
                    {text}
                </h1>
            </div>
            <style>{`
                .shimmer-text {
                    --shimmer-color-start: #334155;
                    --shimmer-color-mid: white;

                    background: linear-gradient(
                        110deg,
                        var(--shimmer-color-start) 0%,
                        var(--shimmer-color-start) 40%,
                        var(--shimmer-color-mid) 50%,
                        var(--shimmer-color-start) 60%,
                        var(--shimmer-color-start) 100%
                    );

                    background-size: 200% 100%;
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    animation: shimmer 2.5s infinite linear;
                }

                @keyframes shimmer {
                    0% { background-position: 100% 0; }
                    100% { background-position: -100% 0; }
                }

            `}</style>
        </div>
    );
}

export default Shimmer;
