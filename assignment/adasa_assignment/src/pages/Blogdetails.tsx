import { Link, useParams } from "react-router"
import { data } from "../data/data";
import {
  LuHouse,
  LuChevronLeft,
  LuCalendar,
  LuClock,
  LuList,
  LuCamera,
  LuTag,
  LuShare2,
  LuLink2,
  LuMail,
} from "react-icons/lu";
import { FaXTwitter, FaWhatsapp, FaLinkedinIn } from "react-icons/fa6";



export default function Blogdetails() {
  const {blogId} = useParams();
  const post = data.posts.find((p)=> p.id === Number(blogId));



  const content : string[] = post?.content.split("\n\n") || []  //i do this to split the content in part then deal with it with index  

    console.log(content)

  if (!post) return <h3 className="text-4xl text-center text-white"> this blog not found</h3>

  return (
    <>
      


      <div className="bg-[#0a0a0a] text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <img
          src={post.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/60 to-[#0a0a0a]" />

        <div className="relative mx-auto max-w-7xl px-4">
          {/* Breadcrumb */}
          <nav className="absolute -top-20 right-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs backdrop-blur">
            <Link to="/home" className="text-neutral-300 hover:text-white">
              <LuHouse size={16} />
            </Link>
            <LuChevronLeft size={14} className="text-neutral-500" />
            <Link to="/blog" className="text-neutral-300 hover:text-white">
              المدونة
            </Link>
            <LuChevronLeft size={14} className="text-neutral-500" />
            <span className="text-[#ED5D0E]">{post.category}</span>
          </nav>

          <div className="max-w-4xl pt-24">
            {/* Category + date + read time */}
            <div className="mb-6 flex flex-wrap items-center gap-4 text-xs text-neutral-300">
              <span className="rounded-full bg-[#ED5D0E] px-4 py-2 text-sm font-bold text-white">
                {post.category}
              </span>
              <span className="flex items-center gap-2">
                <LuCalendar size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <LuClock size={14} />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-8 text-4xl font-extrabold leading-tight md:text-6xl">
              {post.title}
            </h1>

            {/* Author */}
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur">
              <img
                src={post.author.avatar}
                alt=""
                className="h-14 w-14 rounded-full object-cover ring-2 ring-[#ED5D0E]"
              />
              <div className="leading-tight">
                <p className="font-bold">{post.author.name}</p>
                <p className="text-xs text-neutral-400">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BODY ================= */}
      <div className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_320px]">
          {/* ---------- ARTICLE (right) ---------- */}
          <article>
            {/* Quote */}
            <div className="mb-8 rounded-2xl border border-[#ED5D0E]/30 bg-[#ED5D0E]/10 px-8 py-6">
              <p className="text-sm italic text-neutral-200">
                {post.excerpt}
              </p>
            </div>

            {/* Intro */}
            <p className="mb-10 text-sm leading-loose text-neutral-300">
              {content[0]}
            </p>

            {/* Section 1 */}
            <section id="s1" className="mb-10 scroll-mt-28">
              <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ED5D0E]/20 text-[#ED5D0E]">
                  <LuCamera size={18} />
                </span>
                {content[1].replace("##","")}
              </h2>
              <p className="text-sm leading-loose text-neutral-400">
               {content[2]}
              </p>
            </section>

            {/* Section 2 */}
            <section id="s2" className="mb-10 scroll-mt-28">
              <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ED5D0E]/20 text-[#ED5D0E]">
                  <LuCamera size={18} />
                </span>
                  {content[3].replace("##","")}
              </h2>
              <p className="text-sm leading-loose text-neutral-400">
               {content[4]}
              </p>
            </section>

            {/* Section 3 */}
            <section id="s3" className="mb-10 scroll-mt-28">
              <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ED5D0E]/20 text-[#ED5D0E]">
                  <LuCamera size={18} />
                </span>
                    {content[5].replace("##","")}
              </h2>
              <p className="text-sm leading-loose text-neutral-400">
               {content[6]}
              </p>
            </section>

            {/* Section 4 */}
            <section id="s4" className="mb-10 scroll-mt-28">
              <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ED5D0E]/20 text-[#ED5D0E]">
                  <LuCamera size={18} />
                </span>
                  {content[7].replace("##","")}
              </h2>
              <p className="text-sm leading-loose text-neutral-400">
                {content[8]}
              </p>
            </section>

            {/* Section 5 */}
            <section id="s5" className="mb-10 scroll-mt-28">
              <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ED5D0E]/20 text-[#ED5D0E]">
                  <LuCamera size={18} />
                </span>
                  {content[9].replace("##","")}
              </h2>
              <p className="text-sm leading-loose text-neutral-400">
                {content[10]}
              </p>
            </section>
            

            {/* Tags */}
            <div className="mt-12 rounded-2xl border border-white/10 bg-[#111111] p-5">
              <div className="mb-4 flex items-center gap-3 text-sm font-bold">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ED5D0E]/20 text-[#ED5D0E]">
                  <LuTag size={16} />
                </span>
                الوسوم
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-lg border border-white/10 bg-[#1a1a1a] px-3 py-1.5 text-xs text-neutral-300">
                  {post.tags[0]}
                </span>
                <span className="rounded-lg border border-white/10 bg-[#1a1a1a] px-3 py-1.5 text-xs text-neutral-300">
                 {post.tags[1]}
                </span>
                <span className="rounded-lg border border-white/10 bg-[#1a1a1a] px-3 py-1.5 text-xs text-neutral-300">
                  {post.tags[2]}
                </span>
              </div>
            </div>

            {/* Share */}
            <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-[#111111] p-5">
              <div className="flex items-center gap-3 text-sm font-bold">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ED5D0E]/20 text-[#ED5D0E]">
                  <LuShare2 size={16} />
                </span>
                شارك المقال
              </div>
              <div className="flex gap-2">
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#1a1a1a] text-neutral-300 transition hover:border-[#ED5D0E] hover:text-[#ED5D0E]">
                  <LuLink2 size={16} />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#1a1a1a] text-neutral-300 transition hover:border-[#ED5D0E] hover:text-[#ED5D0E]">
                  <FaWhatsapp size={16} />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#1a1a1a] text-neutral-300 transition hover:border-[#ED5D0E] hover:text-[#ED5D0E]">
                  <FaLinkedinIn size={16} />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#1a1a1a] text-neutral-300 transition hover:border-[#ED5D0E] hover:text-[#ED5D0E]">
                  <FaXTwitter size={16} />
                </button>
              </div>
            </div>

            {/* Author box */}
            <div className="mt-4 flex items-center gap-5 rounded-2xl border border-white/10 bg-[#111111] p-5">
              <img
                src={post.author.avatar}
                alt=""
                className="h-20 w-20 rounded-xl object-cover ring-2 ring-[#ED5D0E]/50"
              />
              <div>
                <p className="text-xs text-[#ED5D0E]">كاتب المقال</p>
                <p className="text-lg font-bold">{post.author.name}</p>
                <p className="text-xs text-neutral-500">{post.author.role}</p>
                <p className="mt-2 text-xs text-neutral-400">
                  {post.author.details}
                </p>
              </div>
            </div>
          </article>

          {/* ---------- SIDEBAR (left) - all 3 cards sticky together ---------- */}
          <aside className="flex flex-col gap-4 lg:sticky lg:top-28">
            {/* 1) Table of contents */}
            <div className="rounded-2xl border border-white/10 bg-[#111111] p-5">
              <div className="mb-5 flex items-center gap-3 text-sm font-bold">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#ED5D0E]/50 bg-[#ED5D0E]/10 text-[#ED5D0E]">
                  <LuList size={16} />
                </span>
                محتويات المقال
              </div>
              <ul className="space-y-1">
                <li>
                  <a href="#s1" className="flex items-center gap-3 rounded-lg px-2 py-2 text-xs text-neutral-400 transition hover:bg-white/5 hover:text-[#ED5D0E]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#1a1a1a] text-[10px]">1</span>
                    {content[1].replace("##","")}
                  </a>
                </li>
                <li>
                  <a href="#s2" className="flex items-center gap-3 rounded-lg px-2 py-2 text-xs text-neutral-400 transition hover:bg-white/5 hover:text-[#ED5D0E]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#1a1a1a] text-[10px]">2</span>
                      {content[3].replace("##","")}
                  </a>
                </li>
                <li>
                  <a href="#s3" className="flex items-center gap-3 rounded-lg px-2 py-2 text-xs text-neutral-400 transition hover:bg-white/5 hover:text-[#ED5D0E]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#1a1a1a] text-[10px]">3</span>
                    {content[5].replace("##","")}
                  </a>
                </li>
                <li>
                  <a href="#s4" className="flex items-center gap-3 rounded-lg px-2 py-2 text-xs text-neutral-400 transition hover:bg-white/5 hover:text-[#ED5D0E]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#1a1a1a] text-[10px]">4</span>
                   {content[7].replace("##","")}
                  </a>
                </li>
                <li>
                  <a href="#s5" className="flex items-center gap-3 rounded-lg px-2 py-2 text-xs text-neutral-400 transition hover:bg-white/5 hover:text-[#ED5D0E]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#1a1a1a] text-[10px]">5</span>
                   {content[9].replace("##","")}
                  </a>
                </li>
              </ul>
            </div>

            {/* 2) Date + read time */}
            <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-[#111111] p-5">
              <div className="rounded-xl bg-[#0a0a0a] p-4 text-center">
                <LuClock size={16} className="mx-auto mb-2 text-[#ED5D0E]" />
                <p className="text-xs font-bold">{post.readTime}</p>
                <p className="mt-1 text-[10px] text-neutral-500">وقت القراءة</p>
              </div>
              <div className="rounded-xl bg-[#0a0a0a] p-4 text-center">
                <LuCalendar size={16} className="mx-auto mb-2 text-[#ED5D0E]" />
                <p className="text-xs font-bold">{post.date}</p>
                <p className="mt-1 text-[10px] text-neutral-500">تاريخ النشر</p>
              </div>
            </div>

            {/* 3) Newsletter */}
            <div className="rounded-2xl border border-[#ED5D0E]/30 bg-[#ED5D0E]/10 p-5 text-center">
              <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#ED5D0E]/30 text-[#ED5D0E]">
                <LuMail size={18} />
              </span>
              <p className="mb-1 text-sm font-bold">لا تفوّت جديدنا</p>
              <p className="mb-4 text-xs text-neutral-400">اشترك للحصول على أحدث المقالات</p>
              <Link
                to="/blog"
                className="block rounded-lg bg-[#ED5D0E] py-2.5 text-sm font-bold text-white transition hover:bg-[#ff7a2b]"
              >
                تصفح المزيد
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>



    </>
  )
}

