import { LuChevronLeft, LuClock } from "react-icons/lu";
import type { Post } from "../../data/data";

export default function Blogcard(props: Post) {
  return (
    <>
      <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#161616] transition duration-300 hover:-translate-y-1 hover:border-[#ED5D0E]/50">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={props.image}
          alt=""
          className="h-full w-full object-cover  transition duration-500 group-hover:scale-105"
        />

        {/* Category badge */}
        <span className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur">
          {props.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Read time + date */}
        <div className="mb-4 flex items-center gap-2 text-xs text-neutral-500">
          <LuClock size={14} />
          <span>{props.readTime}</span>
          <span className="h-1 w-1 rounded-full bg-neutral-500"></span>
          <span>{props.date}</span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold leading-snug text-[#ED5D0E]">{props.title}</h3>

        {/* Excerpt */}
        <p className="mb-6 text-sm leading-relaxed text-neutral-400">{props.excerpt}</p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/10 pt-5">
          {/* Author */}
          <div className="flex items-center gap-3">
            <img
              src={props.author.avatar}
              alt=""
              className="h-11 w-11 rounded-full object-cover ring-2 ring-white/10"
            />
            <div className="leading-tight">
              <p className="text-sm font-bold text-white">{props.author.name}</p>
              <p className="text-xs text-neutral-500">{props.author.role}</p>
            </div>
          </div>

          {/* Arrow button */}
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ED5D0E] text-white transition hover:scale-110 hover:bg-[#ff7a2b]"
          >
            <LuChevronLeft size={20} />
          </a>
        </div>
      </div>
    </article>
    </>
  )
}
