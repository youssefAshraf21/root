import type { Category } from "../../data/data";

export default function CategoryPadge({ name }: Category) {
  
  return (

    <>
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <button className="rounded-xl bg-[#ED5D0E] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#ff7a2b]"> {name}</button>
        </div>
    </>
  );
}