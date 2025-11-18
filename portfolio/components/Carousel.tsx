'use client'

import { useState } from 'react'
import Image from 'next/image'

type Props = { images: string[]; alt: string }

export default function Carousel({ images, alt }: Props) {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-xl h-64">
        <Image
          src={images[index]}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between px-2">
          <button
            onClick={prev}
            aria-label="Previous image"
            className="bg-neutral-900/50 text-white rounded-full px-3 py-1 hover:bg-neutral-900/70 focus-visible:ring-2"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="bg-neutral-900/50 text-white rounded-full px-3 py-1 hover:bg-neutral-900/70 focus-visible:ring-2"
          >
            ›
          </button>
        </div>
      )}
      <div className="mt-2 text-center text-xs text-neutral-500">
        {index + 1} / {images.length}
      </div>
    </div>
  )
}