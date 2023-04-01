import { useEffect, useState } from 'react'

export const AnimatedTitle = () => {
    const [symbolIndex, setSymbolIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSymbolIndex((symbolIndex) => (symbolIndex + 1) % 4);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    const symbols = "-/|\\"[symbolIndex];

    return symbols;
}

