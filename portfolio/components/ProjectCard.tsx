'use client'

import classNames from 'classnames'
import { useState } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  title: string
  description: string
  technologies: string[]
  outcomes: string[]
  images: string[]
  link?: string
}

export default function ProjectCard({ title, description, technologies, outcomes, images, link }: Props) {
  const onClick = () => {
    if (link) window.open(link, '_blank', 'noopener,noreferrer')
  }
  const [hoverImage, setHoverImage] = useState<string | null>(null)
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  return (
    <article
      className={classNames(
        'group relative p-6 rounded-2xl bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow-soft',
        'hover:shadow-lg transition'
      )}
      onClick={onClick}
      role={link ? 'link' : undefined}
      tabIndex={0}
      onMouseEnter={(e) => {
        setHoverImage(images[0])
        setPos({ x: e.pageX, y: e.pageY })
      }}
      onMouseMove={(e) => setPos({ x: e.pageX, y: e.pageY })}
      onMouseLeave={() => setHoverImage(null)}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && link) onClick()
      }}
    >

      <div>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((t) => (
            <span key={t} className="text-xs px-3 py-1 rounded-full bg-brand-100 dark:bg-neutral-800 text-brand-700 dark:text-neutral-200">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <h4 className="text-sm uppercase tracking-wide text-neutral-500">Learning outcomes</h4>
          <ul className="mt-2 list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
            {outcomes.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 opacity-0 group-hover:opacity-100 transition">
          <span className="inline-flex items-center gap-1 text-brand-600">{link ? 'Open project' : 'Details'}</span>
        </div>
      </div>

      {hoverImage &&
        createPortal(
          <div
            className="pointer-events-none z-50"
            style={{ position: 'absolute', top: pos.y + 20, left: pos.x + 15 }}
          >
            <div className="rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-soft overflow-hidden bg-white dark:bg-neutral-900">
              <img src={hoverImage} alt={title} style={{ width: 320, height: 180, objectFit: 'cover', display: 'block' }} />
            </div>
          </div>,
          document.body
        )}
    </article>
  )
}