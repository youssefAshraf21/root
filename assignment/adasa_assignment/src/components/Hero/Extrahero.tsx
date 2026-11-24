import type { IconType } from "react-icons";
import { Link } from "react-router";
import { FaNewspaper, FaUsers, FaFolderOpen, FaPenNib } from "react-icons/fa6";

export interface Stat {
  icon: IconType;
  value: string;
  label: string;
}

const defaultStats: Stat[] = [
  { icon: FaNewspaper, value: "+50", label: "مقالة" },
  { icon: FaUsers, value: "+10ألف", label: "قارئ" },
  { icon: FaFolderOpen, value: "4", label: "تصنيفات" },
  { icon: FaPenNib, value: "6", label: "كاتب" },
];

interface HeroExtrasProps {
  showActions?: boolean;
  showStats?: boolean;
  stats?: Stat[];
}

export default function HeroExtras({
  showActions = false,
  showStats = false,
  stats = defaultStats,
}: HeroExtrasProps) {
  return (
        <>
        {showActions && (
            <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
                to="/blog"
                className="group inline-flex items-center justify-center gap-2 rounded-4xl bg-orange-500 px-3 py-2 text-sm font-medium text-white duration-300 hover:-translate-y-0.5"
            >
                <span>استكشف المقالات</span>
                <svg
                className="h-5 w-5 rotate-180 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
                </svg>
            </Link>

            <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-4xl border border-white px-3 py-2 text-white duration-300 hover:border-orange-500 hover:bg-orange-300/10"
            >
                <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                </svg>
                <span>اعرف المزيد</span>
            </Link>
            </div>
        )}

        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map(({ icon: Icon, value, label }, i) => (
            <div
                key={label}
                className="glass-card animate-fade-up p-5 transition-transform duration-300 hover:scale-105"
                style={{ animationDelay: `${i * 100}ms` }}
            >
                <Icon className="mx-auto mb-2 text-2xl text-orange-500" />
                <p className="gradient-text text-3xl font-bold">{value}</p>
                <p className="mt-1 text-sm text-neutral-500">{label}</p>
            </div>
            ))}
        </div>
        </>
    );
    }