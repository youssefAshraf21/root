import type { Category } from "../../data/data";


export default function CategoryCard({ name, count, icon: Icon }: Category) {
  return (
    <div className="cursor-pointer rounded-2xl border border-white/10 bg-[#161616] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#ED5D0E]/50 sm:p-6">
      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#ED5D0E]/30 bg-[#ED5D0E]/10 text-[#ED5D0E]">
              <Icon size={22} />
      </div>

      {/* Name */}
      <h3 className="mb-1 text-lg font-bold text-white">{name}</h3>

      {/* Count */}
      <p className="text-sm text-neutral-500">{count} مقاله</p>
    </div>
  );
}