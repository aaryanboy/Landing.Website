'use client'

import ThemeToggle from './ThemeToggle'

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-40">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-brand-500 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-700 blur-3xl rounded-full" />
      </div>

      <header className="container-max flex items-center justify-between w-full pt-6">
        <div className="text-sm">Portfolio</div>
        <ThemeToggle />
      </header>

      <div className="container-max text-center mt-16">
        <h1 className="headline text-4xl sm:text-5xl md:text-6xl font-semibold animate-fade-in-up">
          Web Designer and Developer
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300 animate-fade-in-up">
          Clean, minimal UI with modern interactions and smooth scrolling.
        </p>

        <div className="mt-10 animate-fade-in-up">
          <button
            onClick={scrollToProjects}
            className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-gradient-to-r from-brand-600 to-brand-700 shadow-soft hover:scale-[1.03] active:scale-100 transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500"
          >
            <span className="absolute inset-0 rounded-full shimmer animate-shimmer" />
            <span className="relative z-10">Let’s Connect</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 text-xs text-neutral-500">
        Scroll down to projects
      </div>
    </section>
  )
}