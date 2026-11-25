import { Link } from "react-router";
import Heropage from "../components/Heropage/Heropage";
import Padge from "../components/Padge/Padge";
import Card from "../components/Card/Card";
import { data } from '../data/data';
import CategoryCard from "../components/Categorycard/Categorycard";
import Blogcard from "../components/Blogcard/Blogcard";
import Subscripe from "../components/Subscripe/Subscripe";


export default function Home() {
  return (
    <>
      <Heropage 
        badge="مرحباً بك في عدسة"
        title={
          <>
            اكتشف <span className="gradient-text">فن</span>
            <br />
            التصوير الفوتوغرافي
          </>
        }
        subtitle="انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير."
        buttons={
          <>
            <Link to="/blog" className="btn-primary">
              استكشف المقالات
            </Link>
            <Link to="/about" className="btn-secondary">
              اعرف المزيد
            </Link>
          </>
        }
        stats={[
          { icon: "fa-solid fa-newspaper", value: "+50", label: "مقالة" },
          { icon: "fa-solid fa-users", value: "+10ألف", label: "قارئ" },
          { icon: "fa-solid fa-folder-open", value: "4", label: "تصنيفات" },
          { icon: "fa-solid fa-pen-nib", value: "6", label: "كاتب" },
        ]}
      />


      <section className="w-full bg-gray-950 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div className="flex flex-col items-start">
                <Padge text={"مميز"} />
              </div>

              <h2 className="mb-2 mt-3 text-3xl font-bold text-white sm:text-5xl">
                مقالات مختارة
              </h2>

              <p className="text-sm text-neutral-400 sm:text-base">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
            </div>

            <Link
              to={"/blog"}
              className="rounded-lg bg-[#ED5D0E] px-4 py-1.5 text-sm font-medium text-white transition hover:opacity-90"
            >
              عرض الكل
            </Link>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6">
            {data.posts.slice(0, 3).map((post) => (
              <Card key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0f0f0f] py-16">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="flex justify-center">
          <Padge text={"التصنيفات"} />
        </div>

        <h2 className="mb-3 mt-4 text-3xl font-bold text-white sm:text-5xl">
          استكشف حسب الموضوع
        </h2>

        <p className="text-sm text-neutral-400 sm:text-base">
          اعثر على محتوى مصمم حسب اهتماماتك
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.categories.map((Category) => (
              <CategoryCard {...Category} />
            ))}
      </div>
    </div>
      </section>

      <section className="w-full bg-gray-950 py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div className="flex flex-col items-start">
                <Padge text={"الأحدث"} />
              </div>

              <h2 className="mb-2 mt-3 text-3xl font-bold text-white sm:text-5xl">
                أحدث المقالات 
              </h2>

              <p className="text-sm text-neutral-400 sm:text-base">
                محتوى جديد طازج من المطبعة
              </p>
            </div>

            <Link
              to={"/blog"}
              className="rounded-lg  px-4 py-1.5 text-sm font-medium text-[#ED5D0E] transition hover:opacity-90"
            >
              عرض جميع المقالات 
            </Link>
          </div>
          <Link to={"/blog"}>
          <div className="flex gap-6">
            {data.posts.slice(3, 6).map((post) => (
              <Blogcard key={post.id} {...post} />
            ))}
          </div>
          </Link>
        </div>
      </section>

      <Subscripe  />
    </>
  )
}
