import { useEffect, useState } from "react";

function useTypewriter(lines, speed = 28, startDelay = 300) {
    const [displayed, setDisplayed] = useState([]);
    const [done, setDone] = useState(false);

    useEffect(() => {
        let lineIndex = 0;
        let charIndex = 0;
        let timeoutId;

        setDisplayed([]);
        setDone(false);

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduceMotion) {
            setDisplayed(lines);
            setDone(true);
            return;
        }

        function tick() {
            // Seluruh barus sudah selesai diketik
            if (lineIndex >= lines.length) {
                setDone(true);
                return;
            }

            const currentLine = lines[lineIndex];

            charIndex++;

            // Tampilkan seluruh baris sebelumnya dan sebagian karakter dari baris ini.
            setDisplayed([
                ...lines.slice(0, lineIndex),
                currentLine.slice(0, charIndex),
            ]);

            if (charIndex >= currentLine.length) {
                // Pindah ke baris berikutnya
                lineIndex++;
                charIndex = 0;

                timeoutId = setTimeout(tick, 220);
            } else {
                // Lanjutkan mengetik karakter berikutnya
                timeoutId = setTimeout(tick, speed);
            }
        }

        timeoutId = setTimeout(tick, startDelay);

        return () => clearTimeout(timeoutId);
    }, [lines, speed, startDelay]);

    return { displayed, done };
}

export default useTypewriter;
