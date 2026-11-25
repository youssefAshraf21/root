import { LuMail } from "react-icons/lu";
import { data } from '../../data/data';

export default function Subscripe() {
  const images = data.posts.slice(0, 3).map((post) => post.author.avatar);
  return (
    
    <>
    <section className="px-4 py-10">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#161616] px-6 py-16 text-center sm:px-12">
        {/* Top glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-[#ED5D0E]/20 blur-3xl"></div>

        <div className="relative">
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff7a1a] to-[#ED5D0E] text-white">
            <LuMail size={28} />
          </div>

          {/* Title */}
          <h2 className="mb-3 text-3xl font-extrabold text-white sm:text-4xl">
            اشترك في <span className="text-[#ff9a1f]">نشرتنا الإخبارية</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-xl text-sm text-neutral-400 sm:text-base">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>

          {/* Form */}
          <form className="mx-auto mb-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="h-14 flex-1 rounded-2xl border border-white/10 bg-[#0a0a0a] px-5 text-sm text-white placeholder:text-neutral-500 focus:border-[#ED5D0E]/60 focus:outline-none"
            />
            <button
              type="submit"
              className="h-14 rounded-2xl bg-gradient-to-r from-[#ff7a1a] to-[#f2490c] px-8 text-sm font-bold text-white transition hover:opacity-90"
            >
              اشترك الآن
            </button>
          </form>

          {/* Footer info */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-500">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 space-x-reverse">
                  {images.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-8 w-8 rounded-full border-2 border-[#161616] object-cover"
                  />
                ))}
              </div>
              <span>
                انضم لـ <b className="text-white">+10,000</b> مصور
              </span>
            </div>
            <span>•</span>
            <span>بدون إزعاج</span>
            <span>•</span>
            <span>إلغاء الاشتراك في أي وقت</span>
          </div>
        </div>
      </div>
    </section>
      
    </>
  )
}
