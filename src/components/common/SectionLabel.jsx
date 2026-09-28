function SectionLabel({index, title}) {
    return (
        <div className="mb-8 flex items-center gap-3">
            <span className="text-xs tracking-widest text-amber-400" style={{ fontFamily: "monospace" }}>{index}</span>
            <h2 className="text-xl font-semibold text-slate-100 sm:text-2xl">{title}</h2>
            <span className="h-px flex-1 bg-slate-800" />
        </div>
    );
}

export default SectionLabel;
