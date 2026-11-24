    // components/Hero/Hero.tsx
    import type { ReactNode } from "react";

    interface HeroProps {
    label?: string;
    title?: ReactNode;
    description?: string;
    compact?: boolean;
    children?: ReactNode;
    }

    export default function Hero({
    label = "مرحباً بك في عدسة",
    title = (
        <>
        اكتشف <span className="text-orange-400">فن</span>
        <br />
        التصوير الفوتوغرافي
        </>
    ),
    description = "انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.",
    compact = false,
    children,
    }: HeroProps) {
    return (
        <section
        className={` bg-[#130D0A] relative overflow-hidden bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px] ${
            compact ? "min-h-[50vh]" : "min-h-screen"
        }`}
        >
        {/* Blobs */}
        <div className="blob absolute top-20 left-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="blob absolute right-10 bottom-20 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
            <div className="section-label animate-fade-in mb-8 inline-flex items-center gap-2 rounded-3xl border border-orange-500 bg-orange-300/10 px-4 py-2">
                <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                </span>
                <span className="text-sm font-medium text-neutral-300">{label}</span>
            </div>

            <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                {title}
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-neutral-400 md:text-2xl">
                {description}
            </p>

            {children}
            </div>
        </div>
        </section>
    );
    }