import { Card } from '../Card/Card'
import './Section.css'

export type SectionItem = { title: string; price: string; img: string, id: number }

export function Section({ title, items }: { title: string; items: SectionItem[] }) {
  return (
    <section className="section">
      <h2 className="section__title">{title}</h2>
      <div className="section__listing">
        {items.map((p) => (
          <Card key={p.id} title={p.title} price={p.price} img={p.img} />
        ))}
      </div>
    </section>
  )
}


