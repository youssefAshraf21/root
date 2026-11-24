    // components/Subscripe/Subscripe.tsx
    import { useState } from "react";
    import { FaRegEnvelope } from "react-icons/fa6";

    const avatars = [
    "/images/author1.jpg",
    "/images/author2.jpg",
    "/images/author3.jpg",
    ];

    export default function Subscripe() {
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Subscribed:", email); // replace with your API call
        setSent(true);
        setEmail("");
    };

    return (
        <section dir="rtl" className="bg-neutral-950 px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[#161616] px-6 py-12 text-center md:px-12">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#ff4d00] to-[#ff7a00] text-xl text-white">
            <FaRegEnvelope />
            </div>

            <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
            اشترك في <span className="text-orange-400">نشرتنا الإخبارية</span>
            </h2>

            <p className="mb-8 text-sm text-neutral-400 md:text-base">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
            </p>

            <form
            onSubmit={handleSubmit}
            className="mx-auto mb-6 flex max-w-lg flex-col gap-3 sm:flex-row"
            >
            <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-orange-500 focus:outline-none"
            />
            <button
                type="submit"
                className="rounded-xl bg-linear-to-l from-[#ff4d00] to-[#ff7a00] px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
            >
                اشترك الآن
            </button>
            </form>

            {sent && (
            <p className="mb-4 text-sm text-green-500">تم الاشتراك بنجاح!</p>
            )}

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-500">
            <div className="flex -space-x-2">
                {avatars.map((src) => (
                <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-8 w-8 rounded-full border-2 border-[#161616] object-cover"
                />
                ))}
            </div>
            <span>
                انضم لـ <b className="text-white">+10,000</b> مصور
            </span>
            <span>•</span>
            <span>بدون إزعاج</span>
            <span>•</span>
            <span>إلغاء الاشتراك في أي وقت</span>
            </div>
        </div>
        </section>
    );
    }