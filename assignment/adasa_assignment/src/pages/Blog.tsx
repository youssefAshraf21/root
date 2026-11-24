import { useState } from "react";
import BlogCard from "../components/Blogcard/Blogcard";
import Hero from "../components/Hero/Hero";
import { data } from "../data/data";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useSearchParams } from "react-router";



export default function Blog() {

  const [searchParams] = useSearchParams();

    const [selected, setSelected] = useState(
    searchParams.get("category") || "الكل"
  );
  const [search, setSearch] = useState("")
  const categories = ["الكل", "إضاءة", "بورتريه", "مناظر طبيعية", "تقنيات", "معدات"];


  // filter by category 
  const byCategory =
    selected === "الكل"
      ? data.posts
      : data.posts.filter((post) => post.category === selected);
// filter by search

  const posts = byCategory.filter((post)=>post.title.includes(search))

  return (
    <>
    
    <Hero
      compact
      label="مدونتنا"
      title={
        <>
          أحدث <span className="text-orange-400">استكشف مقالاتنا</span>
        </>
      }
      description="اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث"
    />

      <div dir="rtl" className="bg-neutral-950 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative mb-6 max-w-sm">
          <FaMagnifyingGlass className="absolute top-1/2 right-3 -translate-y-1/2 text-xs text-neutral-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ابحث في المقالات..."
            className="w-full rounded-lg border border-white/10 bg-[#161616] py-2 pr-9 pl-3 text-sm text-white placeholder:text-neutral-500 focus:border-orange-500 focus:outline-none"
          />
        </div>
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={
                selected === cat
                  ? "rounded-lg bg-orange-500 px-4 py-1.5 text-xs font-bold text-white"
                  : "rounded-lg border border-white/10 bg-[#161616] px-4 py-1.5 text-xs text-neutral-300"
              }
            >
              {cat}
            </button>
          ))}
        </div>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        ) : (
          <p className="py-20 text-center text-neutral-500">لا توجد نتائج</p>
        )}
      </div>
    </div>

    </>
  );
}