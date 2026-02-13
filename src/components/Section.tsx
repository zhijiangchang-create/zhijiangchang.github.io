import { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
}

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-12">
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">{title}</h2>
      {children}
    </section>
  )
}

export default Section
