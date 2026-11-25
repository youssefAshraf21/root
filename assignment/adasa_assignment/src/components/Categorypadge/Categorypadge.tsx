import { LuSearch } from "react-icons/lu";
import type { Category } from "../../data/data";

export default function CategoryPadge({ name }: Category) {
  
  return (

    <>
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-xs">
          <LuSearch
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500"
          />
          <input
            type="text"
            placeholder="ابحث في المقالات..."
            className="h-12 w-full rounded-xl border border-white/10 bg-[#161616] pr-11 pl-4 text-sm text-white placeholder:text-neutral-500 focus:border-[#ED5D0E]/60 focus:outline-none"
          />
        </div>
    <button className="rounded-xl bg-[#ED5D0E] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#ff7a2b]"> {name}</button>
    </div>
    </>
  );
}