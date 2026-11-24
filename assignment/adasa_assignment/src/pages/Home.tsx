import { Link } from "react-router";
import { FaChevronLeft } from "react-icons/fa6";
import Card from "../components/Card/Card";
import { data } from "../data/data";
import Hero from "../components/Hero/Hero";
import HeroExtras from "../components/Hero/Extrahero";

export default function Home() {
  return (
    
    <>

    <Hero>
        <HeroExtras showActions showStats />
    </Hero>
    <section dir="rtl" className="bg-[#130D0A] py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          {/* Right side: badge + title + subtitle */}
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-xs font-medium text-orange-500">
              مميز
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500/40" />
            </span>

            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              مقالات مختارة
            </h2>

            <p className="text-sm text-neutral-400 md:text-base">
              محتوى منتقى لبدء رحلة تعلمك
            </p>
          </div>

          {/* Left side: button */}
          <Link
            to="/blog"
            className="flex items-center gap-3 rounded-xl bg-linear-to-l from-[#ff4d00] to-[#ff7a00] px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-orange-600/20 transition-transform hover:scale-105"
          >
            عرض الكل
            <FaChevronLeft className="text-xs" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6">
          {data.posts.slice(0, 3).map((post) => (
            <Card key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
    
    </>
  );
}