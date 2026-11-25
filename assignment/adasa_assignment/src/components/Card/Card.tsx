import { Link } from "react-router";
import type { Post } from "../../data/data";

export default function Card(props: Post) {
  return (
    <>
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#161616]">
      {/* Image */}
      <div className="relative h-60">
        <img
          src={props.image}
          alt="صورة المقال"
          className="h-full w-full object-cover"
        />

        {/* Featured badge */}
        <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#ff8a1f] to-[#ED5D0E] px-3 py-1 text-xs font-bold text-white">
          <i className="fa-solid fa-star text-[10px]"></i>
          مميز
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category + read time */}
        <div className="mb-4 flex items-center gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-[#ED5D0E]/40 bg-[#ED5D0E]/10 px-3 py-1 font-medium text-[#ED5D0E]">
            {props.category}
          </span>
          <span className="inline-flex items-center gap-1">
            <i className="fa-regular fa-clock"></i>{props.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-white">
          {props.title}
        </h3>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-neutral-400">
          {props.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={props.author.avatar}
                alt="الكاتب"
                className="h-11 w-11 rounded-full object-cover"
              />
              <span className="absolute bottom-0 left-0 h-3 w-3 rounded-full border-2 border-[#161616] bg-[#ED5D0E]"></span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-white">{props.author.name}</p>
              <p className="text-xs text-neutral-500">{props.date}</p>
            </div>
          </div>

          {/* Read more */}
          <Link to={"/blogdetails"}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#ED5D0E] transition hover:gap-3"
          >
            اقرأ المقال
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
        </div>
      </div>
    </article>
    </>
  )
}
