import Heropage from "../components/Heropage/Heropage";
import { data } from '../data/data';
import CategoryPadge from "../components/Categorypadge/categorypadge";
import { LuSearch } from "react-icons/lu";
import Blogcard from "../components/Blogcard/Blogcard";


export default function Blog() {

  return (
    <>
      <Heropage 
      badge="مدونتنا"
      title={
        <>
          استكشف <span className="gradient-text">مقالاتنا</span>
          <br />

        </>
      }
      subtitle="اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث"
    />
      <div className="border-b border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-xs">
            <LuSearch
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500"
            />
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              className="h-12 w-full rounded-xl border border-white/10 bg-[#161616] pr-11 pl-4 text-sm text-white placeholder:text-neutral-500 focus:border-[#ED5D0E]/60 focus:outline-none"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            <CategoryPadge
              name="جميع المقالات"
            />
            {data.categories.map((cat) => (
              <CategoryPadge
                key={cat.name}
                name={cat.name}
              />
            ))}
          </div>
        </div>
      </div>

  <div className="container mx-auto px-4 mt-10">
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {data.posts.map((post) => (
      <Blogcard key={post.id} {...post} />
    ))}
  </div>
</div>
    </>
  )
}
