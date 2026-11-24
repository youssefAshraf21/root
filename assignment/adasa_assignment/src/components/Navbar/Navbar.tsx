    import { useState } from "react";
    import { NavLink } from "react-router";

    export default function Navbar() {
    const [open, setOpen] = useState(false);

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `rounded-full px-5 py-2 text-sm font-medium transition-all ${
        isActive
            ? "bg-gradient-to-l from-[#ff5a00] to-[#ff7a00] text-white shadow-lg shadow-orange-600/20"
            : "text-gray-400 hover:text-white"
        }`;

    return (
        <header className="sticky top-0 z-50 border-b border-white/5 bg-[#161616]">
        <nav className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
            <NavLink to="/home" className="flex items-center gap-3">
            <svg
                className="h-11 w-11 text-orange-500"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
            >
                <circle cx="24" cy="24" r="20" />
                <circle cx="24" cy="24" r="6" fill="currentColor" stroke="none" />
                <path
                strokeLinecap="round"
                d="M24 4l8 14M44 24l-14 8M24 44l-8-14M4 24l14-8M37 8L26 20M40 37L28 28"
                opacity={0.7}
                />
            </svg>
            <div className="leading-tight">
                <p className="text-2xl font-bold text-white">عدسة</p>
                <p className="text-xs text-orange-500">عالم التصوير الفوتوغرافي</p>
            </div>
            </NavLink>

            <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/3 p-1.5 md:absolute md:left-1/2 md:flex md:-translate-x-1/2">
                <li>
                    <NavLink to="/" end className={linkClass}>
                    الرئيسية
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className={linkClass}>
                    المدونة
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={linkClass}>
                    من نحن
                    </NavLink>
                </li>
                </ul>

            {/* Actions (left side in RTL) */}
            <div className="hidden items-center gap-6 md:flex">
            <button
                aria-label="بحث"
                className="text-gray-500 transition-colors hover:text-white"
            >
                <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                >
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
                </svg>
            </button>

            <NavLink
                to="/blog"
                className="rounded-full bg-linear-to-l from-[#ff5a00] to-[#ff8a1f] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-orange-600/30 transition-transform hover:scale-105"
            >
                ابدأ القراءة
            </NavLink>
            </div>

            {/* Mobile button */}
            <button
            onClick={() => setOpen(!open)}
            className="text-white md:hidden"
            aria-label="القائمة"
            >
            <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
            >
                {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                ) : (
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
            </svg>
            </button>
        </nav>

        {/* Mobile menu */}
        {open && (
            <div className="flex flex-col gap-2 border-t border-white/5 bg-[#161616] px-6 py-4 md:hidden">
                <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>
                الرئيسية
                </NavLink>
                <NavLink to="/blog" className={linkClass} onClick={() => setOpen(false)}>
                المدونة
                </NavLink>
                <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>
                من نحن
                </NavLink>
                <NavLink
                to="/blog"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-linear-to-l from-[#ff5a00] to-[#ff8a1f] px-7 py-3 text-center text-sm font-bold text-white"
                >
                ابدأ القراءة
                </NavLink>
            </div>
            )}
        </header>
    );
    }
