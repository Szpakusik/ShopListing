import './Content.css'
import { Section } from '../Section/Section'

const featured = [
  { title: 'Elegant Watch', price: '$150', img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=400' },
  { title: 'Leather Handbag', price: '$200', img: 'https://images.unsplash.com/photo-1584917865442-fd4f6620d284?q=80&w=400' },
  { title: 'Running Shoes', price: '$120', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400' },
  { title: 'Wireless Headphones', price: '$80', img: 'https://images.unsplash.com/photo-1518441902110-3630fadf42fc?q=80&w=400' },
  { title: 'Smartwatch', price: '$250', img: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=400' },
  { title: 'Casual Backpack', price: '$70', img: 'https://images.unsplash.com/photo-1596464716121-d6e2f3c9d736?q=80&w=400' }
]

const newArrivals = [
  { title: 'Summer Dress', price: '$60', img: 'https://images.unsplash.com/photo-1520975693414-19b09dedc82e?q=80&w=400' },
  { title: 'Sunglasses', price: '$40', img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=400' },
  { title: 'Beach Towel', price: '$30', img: 'https://images.unsplash.com/photo-1593618998160-e03e70304cd4?q=80&w=400' },
  { title: 'Sunscreen', price: '$20', img: 'https://images.unsplash.com/photo-1598555137050-5d5f86a1d4a6?q=80&w=400' },
  { title: 'Flip Flops', price: '$15', img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=400' },
  { title: 'Straw Hat', price: '$25', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400' }
]

export function Content() {
  return (
    <div className="content">
      <Section title="Featured Products" items={featured} />
      <Section title="New Arrivals" items={newArrivals} />
    </div>
  )
}


