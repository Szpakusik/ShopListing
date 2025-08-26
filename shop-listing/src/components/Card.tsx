import './Card.css'

export type CardProps = {
  title: string
  price: string
  img: string
}

export function Card({ title, price, img }: CardProps) {
  return (
    <article className="card">
      <div className="card__image-wrap">
        <img src={img} alt={title} className="card__image" />
      </div>
      <div className="card__info">
        <div className="card__name">{title}</div>
        <div className="card__price">{price}</div>
      </div>
    </article>
  )
}


