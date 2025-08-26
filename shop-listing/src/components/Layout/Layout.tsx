import { TopBar } from '../TopBar/TopBar'
import { Content } from '../Content/Content'
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


