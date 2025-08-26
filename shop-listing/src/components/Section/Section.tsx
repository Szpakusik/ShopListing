import './Section.css'
import { Card } from '../Card/Card'

export type SectionItem = { title: string; price: string; img: string }

export function Section({ title, items }: { title: string; items: SectionItem[] }) {
  return (
    <section className="section">
      <h2 className="section__title">{title}</h2>
      <div className="section__listing">
        {items.map((p) => (
          <Card key={p.title} title={p.title} price={p.price} img={p.img} />
        ))}
      </div>
    </section>
  )
}


