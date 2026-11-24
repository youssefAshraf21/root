import { FaNewspaper, FaUsers, FaFolderOpen, FaPenNib } from "react-icons/fa6";

export default function Home() {
  return (
    <>
    <main className="flex-grow  bg-neutral-950">
          <section className="relative min-h-screen inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <div className="text-center max-w-4xl mx-auto">
      <div className="section-label inline-flex items-center gap-2 mb-8 animate-fade-in border border-orange-500 bg-orange-300/10 py-2 px-4 rounded-3xl">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
        </span>
        <span className="text-sm font-medium text-neutral-300">
          مرحباً بك في عدسة
        </span>
      </div>

      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
        اكتشف <span className="text-orange-400">فن</span>
        <br />
        التصوير الفوتوغرافي
      </h1>

      <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
        <a
          className="btn-primary inline-flex items-center justify-center gap-2 group text-white bg-orange-500  font-medium  py-2 px-3 rounded-4xl text-sm hover:-translate-y-0.5 duration-300"
          href="/blog"
          data-discover="true"
        >
          <span >استكشف المقالات</span>
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </a>

        <a
          className="btn-secondary inline-flex items-center justify-center gap-2 border border-white py-2 px-3  rounded-4xl text-white hover:bg-orange-300/10 hover:border-orange-500 duration-300"
          href="/about"
          data-discover="true"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>اعرف المزيد</span>
        </a>
      </div>

      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
        {/* مقالة */}
        <div
          className="glass-card animate-fade-up p-5 transition-transform duration-300 hover:scale-105"
          style={{ animationDelay: "0ms" }}
        >
          <FaNewspaper className="mx-auto mb-2 text-2xl text-orange-500" />
          <p className="gradient-text text-3xl font-bold">+50</p>
          <p className="mt-1 text-sm text-neutral-500">مقالة</p>
        </div>

        {/* قارئ */}
        <div
          className="glass-card animate-fade-up p-5 transition-transform duration-300 hover:scale-105"
          style={{ animationDelay: "100ms" }}
        >
          <FaUsers className="mx-auto mb-2 text-2xl text-orange-500" />
          <p className="gradient-text text-3xl font-bold">+10ألف</p>
          <p className="mt-1 text-sm text-neutral-500">قارئ</p>
        </div>

        {/* تصنيفات */}
        <div
          className="glass-card animate-fade-up p-5 transition-transform duration-300 hover:scale-105"
          style={{ animationDelay: "200ms" }}
        >
          <FaFolderOpen className="mx-auto mb-2 text-2xl text-orange-500" />
          <p className="gradient-text text-3xl font-bold">4</p>
          <p className="mt-1 text-sm text-neutral-500">تصنيفات</p>
        </div>

        {/* كاتب */}
        <div
          className="glass-card animate-fade-up p-5 transition-transform duration-300 hover:scale-105"
          style={{ animationDelay: "300ms" }}
        >
          <FaPenNib className="mx-auto mb-2 text-2xl text-orange-500" />
          <p className="gradient-text text-3xl font-bold">6</p>
          <p className="mt-1 text-sm text-neutral-500">كاتب</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
    <section>
      
    </section>
    </>
  )
}
