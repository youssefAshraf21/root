import { FaArrowLeftLong, FaRegClock, FaStar } from "react-icons/fa6";
import { Link } from "react-router";

interface CardProps {
    id: number,
    title: string;
    excerpt: string;
    category: string;
    author: {
        name: string;
        avatar: string;
    };
    image: string;
    date: string;
    readTime: string;
    featured: boolean;
}

export default function Card({
    id,
    title,
    excerpt,
    category,
    author,
    image,
    date,
    readTime,
    featured,
}:CardProps) {
    
    return (
        <>
        <article
        dir="rtl"
        className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#161616] md:flex-row"
        >
        {/* Image (right side) */}
        <div className="relative h-64 md:h-auto md:w-1/2">
            <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            />

            {featured && (
            <span className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                <FaStar className="text-[10px]" />
                مميز
            </span>
            )}
        </div>

        {/* Content (left side) */}
        <div className="flex flex-col justify-between gap-8 p-6 md:w-1/2 md:p-10">
            <div>
            {/* Category + read time */}
            <div className="mb-5 flex items-center gap-3">
                <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-500">
                {category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-neutral-500">
                <FaRegClock />
                {readTime} دقائق للقراءة
                </span>
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                {title}
            </h3>

            <p className="text-sm leading-7 text-neutral-400">{excerpt}</p>
            </div>

            {/* Author + link */}
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="relative">
                <img
                    src={author.avatar}
                    alt={author.name}
                    className="h-12 w-12 rounded-full border-2 border-white/10 object-cover"
                />
                <span className="absolute -bottom-0.5 -left-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#161616] bg-orange-500" />
                </div>
                <div>
                <p className="text-sm font-bold text-white">{author.name}</p>
                <p className="text-xs text-neutral-500">{date}</p>
                </div>
            </div>

            <Link
                to={`/blog/${id}`}
                className="flex items-center gap-2 text-sm font-bold text-orange-500 transition-all hover:gap-3"
            >
                اقرأ المقال
                <FaArrowLeftLong/>
            </Link>
            </div>
        </div>
        </article>
    </>
  )
}
