import BlogCard from "../components/Blogcard/Blogcard";
import Hero from "../components/Hero/Hero";
import { data } from "../data/data";

export default function Blog() {
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
    <main dir="rtl" className="min-h-screen bg-neutral-950 px-4 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.posts.map((card) => (
          <BlogCard key={card.id} id={card.id}
                    title={card.title}
                    excerpt ={card.excerpt}
                    category ={card.category}
                    author={card.author}
                    image={card.image}
                    date={card.date}
                    readTime={card.readTime}
                    featured={card.featured} />
        ))}
      </div>
    </main>


    </>
  );
}