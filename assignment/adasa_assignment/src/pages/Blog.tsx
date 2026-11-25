import Heropage from "../components/Heropage/Heropage";
import Categorypadge from '../components/Categorypadge/categorypadge';
import { data } from '../data/data';


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
      <div className="flex flex-wrap gap-3">
        {data.categories.map((cat) => (
          <Categorypadge key={cat.name} {...cat} />
        ))}
      </div>
    </>
  )
}
