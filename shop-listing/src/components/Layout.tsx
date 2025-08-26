import { TopNavigation } from './TopNavigation'
import { Content } from './Content'
import './Layout.css'

export function Layout() {
  return (
    <div className="page-root">
      <TopNavigation />
      <main className="page-content">
        <Content />
      </main>
    </div>
  )
}


