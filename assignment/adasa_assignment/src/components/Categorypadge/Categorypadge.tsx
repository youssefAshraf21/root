import type { Category } from "../../data/data";

export default function CategoryPadge({ name }: Category) {
  return (
    <button className="rounded-xl bg-[#ED5D0E] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#ff7a2b]"> {name}</button>
  );
}