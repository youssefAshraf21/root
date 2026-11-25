

interface padgeProps {
  text?:string;
}
export default function Padge({text = "مرحباً بك في عدسة"} : padgeProps) {
  return (
    <>
      <div className="inline-flex items-center gap-2 rounded-full border-2 border-orange-600/70 bg-[#29190f] px-5 py-2.5">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_3px_rgba(249,115,22,0.5)]"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-700"></span>
        </div>
            <p dir="rtl" className="text-white text-base font-medium">
                {text}
            </p>
        </div>
    </>
  )
}
