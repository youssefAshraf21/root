import React, { type ReactNode } from 'react'

type Stat = {
  icon: string,
  value: string,
  label:string
};

type pageHeroProps = {
  badge : string;
  title: ReactNode;
  subtitle: string;
  buttons?: ReactNode;
  stats?: Stat[];
};

export default function Heropage({
  badge,
  title,
  subtitle,
  buttons,
  stats,
}: pageHeroProps) {
  return (
    <>
    <section className="hero-bg">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="section-label inline-flex items-center gap-2 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-sm font-medium text-neutral-300">{badge}</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            {title}
          </h1>

          <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {buttons && (
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              {buttons}
            </div>
          )}

          {stats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card p-4 hover:scale-105 transition-transform duration-300"
                >
                  <i className={`${stat.icon} text-2xl text-orange-500 mb-1`}></i>
                  <p className="text-2xl md:text-3xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-neutral-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
      
    </>
  )
}
