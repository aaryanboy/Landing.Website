export type Project = {
  title: string
  description: string
  technologies: string[]
  outcomes: string[]
  images: string[]
  link?: string
}

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'Responsive landing with dark mode and interactive projects.',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
    outcomes: ['Improved SSR knowledge', 'Accessible components', 'Animation design'],
    images: [
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    title: 'E-commerce UI',
    description: 'Product grid, filters, and checkout flow with strong UX.',
    technologies: ['React', 'TailwindCSS', 'Stripe'],
    outcomes: ['State modeling', 'Form validation', 'Performance tuning'],
    images: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop'
    ],
    link: 'https://example.com'
  },
  {
    title: 'Design System',
    description: 'Reusable components with tokens and theming.',
    technologies: ['TypeScript', 'Storybook', 'CSS Variables'],
    outcomes: ['Documentation', 'Accessibility', 'Consistency'],
    images: [
      'https://images.unsplash.com/photo-1587613865763-4b8b0f0e6e4d?q=80&w=1200&auto=format&fit=crop'
    ]
  }
]