import { FaAward, FaCamera, FaGlobe, FaHeart } from "react-icons/fa6";
import HeroExtras, { type Stat } from "../components/Hero/Extrahero";
import Hero from "../components/Hero/Hero";

export default function About() {

const aboutStats: Stat[] = [
  { icon: FaCamera, value: "+2مليون", label: "قارئ شهرياً" },
  { icon: FaGlobe, value: "+500", label: "مقالة منشورة" },
  { icon: FaAward, value: "+50", label: "كاتب خبير" },
  { icon: FaHeart, value: "+15", label: "تصنيف" },
];

  return (
    <>
<Hero
        label="من نحن"
        title={
          <>
            قصة <span className="text-orange-400">عدسة</span>
          </>
        }
        description="نحن فريق من المصورين نشارك شغفنا وخبراتنا معكم."
      >
        <HeroExtras showStats stats={aboutStats} />
      </Hero>
    <h1>About page</h1>
    </>
  )
}
