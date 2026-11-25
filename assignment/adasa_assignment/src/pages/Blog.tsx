import Heropage from "../components/Heropage/Heropage";

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

    </>
  )
}
