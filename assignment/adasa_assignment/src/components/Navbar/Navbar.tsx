import { NavLink } from "react-router";


    export default function Navbar() {

    return (
    <>
        <header dir="rtl" className="w-full bg-[#161616] px-2 py-2 sm:px-8 sm:py-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-1 sm:gap-4">
            {/* Logo */}
            <div className="flex items-center gap-1 sm:gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#ED5D0E] sm:h-11 sm:w-11">
                <span className="text-[10px] text-[#ED5D0E] sm:text-lg">◉</span>
            </div>
            <div className="leading-tight">
                <h1 className="text-xs font-bold text-white sm:text-xl">عدسة</h1>
                <p className="text-[7px] text-[#ED5D0E] sm:text-xs">
                عالم التصوير الفوتوغرافي
                </p>
            </div>
            </div>

            {/* Links */}
            <ul className="flex items-center gap-0.5 rounded-full border border-white/10 bg-white/5 p-0.5 sm:gap-1 sm:p-1.5">
            <li>
                <NavLink
                    to="/home"
                    className={({ isActive }) =>
                        `block rounded-full px-2 py-1 text-[10px] font-medium sm:px-5 sm:py-2 sm:text-sm ${
                            isActive
                                ? "bg-[#ED5D0E] text-white"
                                : "text-gray-300 hover:text-white"
                        }`
                    }
                >
                    الرئيسية
                </NavLink>
            </li>
            <li>
                <NavLink  to={"/blog"}
                
                className="block rounded-full px-2 py-1 text-[10px] font-medium text-gray-300 hover:text-white sm:px-5 sm:py-2 sm:text-sm"
                >
                المدونة
                </NavLink >
            </li>
            <li>
                <NavLink  to={"/about"}
                
                className="block rounded-full px-2 py-1 text-[10px] font-medium text-gray-300 hover:text-white sm:px-5 sm:py-2 sm:text-sm"
                >
                من نحن
                </NavLink >
            </li>
            </ul>

            {/* Search + Button */}
            <div className="flex items-center gap-1.5 sm:gap-4">
            <button className="text-[10px] text-gray-400 hover:text-white sm:text-lg">
                🔍
            </button>
            <button className="rounded-full bg-[#ED5D0E] px-2 py-1.5 text-[10px] font-bold text-white hover:opacity-90 sm:px-6 sm:py-3 sm:text-sm">
                ابدأ القراءة ←
            </button>
            </div>
        </nav>
        </header>
    </>
    );
    }
