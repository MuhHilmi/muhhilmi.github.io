import { useState } from "react";
import { Terminal, FileCode2, Menu, X } from "lucide-react";
import { NAV_TABS } from "../../data/navigation";

function Header({ activeSection, onNavigate }) {
    const [ menuOpen, setMenuOpen ] = useState(false);

    function handleNavigate(id) {
        onNavigate(id);
        setMenuOpen(false);
    }

    return (
        <header className="sticky top-0 z-20 border-b border-slate-800 bg-[#0A0E14]/95 backdrop-blur">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <div className="flex h-14 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2 font-mono">
                        <Terminal size={16} className="text-amber-400" />
                        <span className="text-sm font-medium text-slate-100">
                            my-portfolio
                        </span>
                    </div>

                    {/* Navigasi desktop */}
                    <nav aria-label="Navigasi utama" className="hidden items-center gap-1 md:flex">
                        {NAV_TABS.map((tab) => {
                            const isActive = activeSection === tab.id;

                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => handleNavigate(tab.id)}
                                    aria-current={isActive ? "location" : undefined}
                                    className={`flex items-center gap-2 rounded-t-md border-t-2 px-3 py-1.5 font-mono text-xs transition-colors ${isActive ? "border-amber-400 bg-slate-900 text-slate-100" : "border-transparent text-slate-400 hover:text-slate-100"}`}
                                >
                                    <FileCode2 size={13} />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </nav>

                    {/* Tombol menu mobile */}
                    <button
                        type="button"
                        className="text-slate-100 md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Navigasi mobile */}
                {menuOpen && (
                    <nav
                        id="mobile-navigation"
                        aria-label="Navigasi mobile"
                        className="flex flex-col gap-1 pb-3 md:hidden"
                    >
                        {NAV_TABS.map((tab) => {
                            const isActive = activeSection === tab.id;

                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => handleNavigate(tab.id)}
                                    aria-current={isActive ? "location" : undefined}
                                    className={`rounded px-3 py-2 text-left font-mono text-sm ${isActive ? "bg-slate-900 text-amber-400" : "text-slate-400 hover:bg-slate-900"}`}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;