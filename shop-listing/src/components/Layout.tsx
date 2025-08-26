import { TopBar } from './TopBar'
import { Content } from './Content'
import './Layout.css'

export function Layout() {
  return (
    <div className="page-root">
      <TopBar />
      <main className="page-content">
        <Content />
      </main>
    </div>
  )
}


