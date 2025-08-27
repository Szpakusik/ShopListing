import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Section, type SectionItem } from '../Section/Section'
import { getProducts } from '../../api/products'
import './Content.css'
import type { ProductDTO } from '../../types/Product'

export function Content() {
  const [items, setItems] = useState<SectionItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [searchParams] = useSearchParams();

  const query = searchParams.get('q') || '';

  useEffect(() => {
    setIsLoading(true)
    setError(null)

    getProducts(query)
      .then((products) => {
        const mapped: SectionItem[] = (products ?? []).map((p: ProductDTO) => ({
          title: String(p.title),
          price: `$${p.price}`,
          img: String(p.thumbnail || (Array.isArray(p.images) ? p.images[0] : '')),
          id: p.id
        }))
        setItems(mapped)
      })
      .catch((e) => {
        console.error(e)
        setError('Failed to load products')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [query])

  // Faking as there is no date or featured flag in the fetched item object
  const featured = items.slice(0, 20)
  const newArrivals = items.slice(20)

  return (
    <div className="content">
      {isLoading && (
        <div className="loader" aria-live="polite" aria-busy="true">
          <span className="loader__spinner" />
          <span className="loader__text">Loading products…</span>
        </div>
      )}
      {!isLoading && error && <div role="alert">{error}</div>}
      {!isLoading && !error && items.length === 0 && (
        <div className="content__empty" role="status" aria-live="polite">No items found</div>
      )}
      {!isLoading && !error && items.length > 0 && (
        <>
        {featured.length > 0 && (
          <Section title="Featured Products" items={featured} />
        )}
        {newArrivals.length > 0 && (
          <Section title="New Arrivals" items={newArrivals} />
        )}
      </>
      )}
    </div>
  )
}


