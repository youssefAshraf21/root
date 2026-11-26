    import { Link } from "react-router";
    import type { Post } from "../../data/data";

    export default function Maylikecard(props: Post) {
    return (
        <Link to={`/blogdetails/${props.id}`} className="block">
        <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition duration-300 hover:-translate-y-1 hover:border-[#ED5D0E]/50 h-80">
            <div className="relative h-56 overflow-hidden">
            <img
                src={props.image}
                alt=""
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111111]" />
            <span className="absolute right-4 top-4 rounded-full bg-[#ED5D0E] px-3 py-1 text-xs font-bold text-white">
                {props.category}
            </span>
            </div>

            <div className="px-5 pb-5">
            <h3 className="mb-4 text-base font-bold leading-snug text-white">
                {props.title}
            </h3>

            <div className="flex items-center justify-between text-xs text-neutral-500">
                <div className="flex items-center gap-2">
                <img
                    src={props.author.avatar}
                    alt=""
                    className="h-7 w-7 rounded-full object-cover"
                />
                <span>{props.author.name}</span>
                </div>
                <span>{props.readTime}</span>
            </div>
            </div>
        </article>
        </Link>
    );
    }