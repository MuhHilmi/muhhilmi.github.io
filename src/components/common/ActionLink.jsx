function ActionLink({
    href,
    icon: Icon,
    children,
    variant = "outline",
    download = false,
    external = false,
}) {
    const variants = {
        primary: "bg-amber-400 text-slate-950",
        outline: "border border-slate-700 text-slate-100",
        teal: "border border-teal-400 text-teal-400",
    };

    return (
        <a
            href={href}
            download={download || undefined}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5 ${variants[variant]}`}
        >
            {Icon && <Icon size={16} />}
            {children}
        </a>
    );
}

export default ActionLink;
