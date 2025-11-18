'use client'

import { projects } from '@data/projects'
import ProjectCard from './ProjectCard'
import InView from './InView'

export default function Projects() {
  return (
    <section id="projects" className="container-max py-20">
      <div className="mb-10">
        <h2 className="headline text-3xl sm:text-4xl font-semibold">My Projects</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">Each project highlights technologies and what was learned.</p>
      </div>

      <div className="space-y-10">
        {projects.map((p) => (
          <InView key={p.title}>
            <ProjectCard {...p} />
          </InView>
        ))}
      </div>

      <div className="mt-16 grid sm:grid-cols-2 gap-6">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}