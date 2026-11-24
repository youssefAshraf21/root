    import { Link } from "react-router";
    import {
    FaYoutube,
    FaLinkedin,
    FaGithub,
    FaXTwitter,
    FaHeart,
    } from "react-icons/fa6";

    export default function Footer() {
    const socialClass =
        "flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-400 transition-colors hover:border-orange-500/50 hover:text-orange-500";

    const linkClass =
        "text-sm text-neutral-500 transition-colors hover:text-orange-500";

    return (
        <footer dir="rtl" className="relative bg-[#0a0a0a] text-white">
        {/* Top orange line */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-l from-orange-600 via-orange-500 to-amber-400" />

        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
                <Link to="/" className="mb-5 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-orange-500 to-orange-600 text-2xl font-bold text-white shadow-lg shadow-orange-600/30">
                    ع
                </span>
                <span className="text-xl font-bold">عدسة</span>
                </Link>

                <p className="mb-6 max-w-xs text-sm leading-7 text-neutral-500">
                مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
                </p>

                <div className="flex items-center gap-2">
                <a href="#" aria-label="X" className={socialClass}>
                    <FaXTwitter className="text-lg" />
                </a>
                <a href="#" aria-label="GitHub" className={socialClass}>
                    <FaGithub className="text-lg" />
                </a>
                <a href="#" aria-label="LinkedIn" className={socialClass}>
                    <FaLinkedin className="text-lg" />
                </a>
                <a href="#" aria-label="YouTube" className={socialClass}>
                    <FaYoutube className="text-lg" />
                </a>
                </div>
            </div>

            {/* Explore */}
            <div>
                <div className="mb-6 flex items-center gap-3">
                <h4 className="font-bold">استكشف</h4>
                <span className="h-0.5 w-8 bg-orange-500" />
                </div>
                <ul className="flex flex-col gap-4">
                <li>
                    <Link to="/" className={linkClass}>
                    الرئيسية
                    </Link>
                </li>
                <li>
                    <Link to="/blog" className={linkClass}>
                    المدونة
                    </Link>
                </li>
                <li>
                    <Link to="/about" className={linkClass}>
                    من نحن
                    </Link>
                </li>
                </ul>
            </div>

            {/* Categories */}
            <div>
                <div className="mb-6 flex items-center gap-3">
                <h4 className="font-bold">التصنيفات</h4>
                <span className="h-0.5 w-8 bg-orange-500" />
                </div>
                <ul className="flex flex-col gap-4">
                <li>
                    <Link to="/blog?category=lighting" className={linkClass}>
                    إضاءة
                    </Link>
                </li>
                <li>
                    <Link to="/blog?category=portrait" className={linkClass}>
                    بورتريه
                    </Link>
                </li>
                <li>
                    <Link to="/blog?category=landscape" className={linkClass}>
                    مناظر طبيعية
                    </Link>
                </li>
                <li>
                    <Link to="/blog?category=techniques" className={linkClass}>
                    تقنيات
                    </Link>
                </li>
                </ul>
            </div>

            {/* Newsletter */}
            <div>
                <div className="mb-6 flex items-center gap-3">
                <h4 className="font-bold">ابق على اطلاع</h4>
                <span className="h-0.5 w-8 bg-orange-500" />
                </div>
                <p className="mb-5 text-sm leading-7 text-neutral-500">
                اشترك للحصول على أحدث المقالات والتحديثات
                </p>

                <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-3"
                >
                <input
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:border-orange-500/60 focus:outline-none"
                />
                <button
                    type="submit"
                    className="rounded-full bg-linear-to-l from-[#ff5a00] to-[#ff8a1f] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/30 transition-transform hover:scale-[1.02]"
                >
                    اشترك
                </button>
                </form>
            </div>
            </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-neutral-600 sm:flex-row">
            <p className="flex items-center gap-1.5">
                © 2026 عدسة. صنع بكل
                <FaHeart className="text-orange-500" />
                جميع الحقوق محفوظة.
            </p>

            <div className="flex items-center gap-6">
                <Link to="/terms" className="hover:text-orange-500">
                شروط الخدمة
                </Link>
                <Link to="/privacy" className="hover:text-orange-500">
                سياسة الخصوصية
                </Link>
            </div>
            </div>
        </div>
        </footer>
    );
    }
