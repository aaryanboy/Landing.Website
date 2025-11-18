'use client'

import { useEffect, useRef, useState } from 'react'

type Props = { children: React.ReactNode }

export default function InView({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setVisible(true)
      })
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={visible ? 'animate-fade-in-up' : 'opacity-0'}>
      {children}
    </div>
  )
}