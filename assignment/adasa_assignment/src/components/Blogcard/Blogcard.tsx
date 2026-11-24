    import { FaChevronLeft, FaRegClock } from "react-icons/fa6";
    import { Link } from "react-router";

    interface BlogCardProps {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    author: {
        name: string;
        avatar: string;
        role: string;
    };
    image: string;
    date: string;
    readTime: string;
    featured?: boolean;
    }

    export default function BlogCard({
    id,
    title,
    excerpt,
    category,
    author,
    image,
    date,
    readTime,
    }: BlogCardProps) {
    return (
        <article
        dir="rtl"
        className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#161616]"
        >
        {/* Image */}
        <div className="relative h-56 w-full">
            <img src={image} alt={title} className="h-full w-full object-cover" />

            <span className="absolute top-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur">
            {category}
            </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-4 p-6">
            {/* Read time + date */}
            <div className="flex items-center gap-3 text-xs text-neutral-500">
            <span className="flex items-center gap-1.5">
                <FaRegClock />
                {readTime} دقائق للقراءة
            </span>
            <span className="h-1 w-1 rounded-full bg-neutral-600" />
            <span>{date}</span>
            </div>

            <h3 className="text-xl font-bold leading-snug text-white">{title}</h3>

            <p className="text-sm leading-7 text-neutral-400">{excerpt}</p>

            {/* Footer: arrow + author */}
            <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5">
            <div className="flex items-center gap-3">
                <img
                src={author.avatar}
                alt={author.name}
                className="h-11 w-11 rounded-full border-2 border-white/10 object-cover"
                />
                <div>
                <p className="text-sm font-bold text-white">{author.name}</p>
                <p className="text-xs text-neutral-500">{author.role}</p>
                </div>
            </div>

            <Link
                to={`/blog/${id}`}
                aria-label={title}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-500/40 bg-orange-500/10 text-xs text-orange-500 transition-colors hover:bg-orange-500 hover:text-white"
            >
                <FaChevronLeft />
            </Link>
            </div>
        </div>
        </article>
    );
    }