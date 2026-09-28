import { useState } from "react";

function Avatar({ src, name, size = 88 }) {
    const [errored, setErrored] = useState(false);

    const initials = name
        .split(" ")
        .map((word) => word[0])
        .slice(0,2)
        .join("")
        .toUpperCase();

    const showFallback = !src || errored;

    return (
        <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-amber-400 bg-slate-800" style={{width: size, height: size,}}>
            {showFallback ? (
                <span className="font-semibold text-amber-400" style={{fontSize: size * 0.32}}>
                    {initials}
                </span>
            ) : (
                <img src={src} alt={`Foto ${name}`} onError={() => setErrored(true)} className="h-full w-full object-cover" />
            )}
        </div>
    );
}

export default Avatar;
