    // components/CategoryCard/CategoryCard.tsx
    import type { IconType } from "react-icons";
    import { Link } from "react-router";
    import { FaSun } from "react-icons/fa6";

    interface CategoryCardProps {
    title: string;
    count: number;
    icon?: IconType;
    to?: string;
    }

    export default function CategoryCard({
    title,
    count,
    icon: Icon = FaSun,
    to = "/blog",
    }: CategoryCardProps) {
    return (
        <Link
        to={to}
        dir="rtl"
        className="group flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#161616] p-6 transition-colors hover:border-orange-500/40"
        >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-xl text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
            <Icon />
        </div>

        <div>
            <h3 className="text-base font-bold text-white">{title}</h3>
            <p className="mt-1 text-xs text-neutral-500">{count} مقالة</p>
        </div>
        </Link>
    );
    }