import { Link } from "react-router";
import Heropage from "../components/Heropage/Heropage";

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
    </>
  )
}
