import Heropage from "../components/Heropage/Heropage";

export default function About() {
  return (
    <>

    <Heropage 
      badge="من نحن"
      title={
        <>
          مهمتنا هي <span className="gradient-text">الإعلام والإلهام</span>
        </>
      }
      subtitle="مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة."
      stats={[
        { icon: "fa-solid fa-newspaper", value: "+2مليون", label: "قارئ شهرياً" },
        { icon: "fa-solid fa-users", value: "+500", label: "مقالة منشورة" },
        { icon: "fa-solid fa-folder-open", value: "+50", label: "كاتب خبير" },
        { icon: "fa-solid fa-pen-nib", value: "+15", label: "تصنيف" },
      ]}
    />
    </>
  )
}
