import { PortfolioProvider } from './context/PortfolioContext'
import { Layout } from './components/layout/Layout'
import { ScrollToTop } from './components/common/ScrollToTop'
import { Hero } from './components/sections/Hero/Hero'
import { About } from './components/sections/About/About'
import { MissionControl } from './components/sections/MissionControl/MissionControl'
import { Skills } from './components/sections/Skills/Skills'
import { Timeline } from './components/sections/Timeline/Timeline'
import { Projects } from './components/sections/Projects/Projects'
import { Contact } from './components/sections/Contact/Contact'
import './App.css'

function AppContent() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <MissionControl />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </Layout>
      <ScrollToTop />
    </>
  )
}

function App() {

  return (
    <PortfolioProvider>
      <AppContent />
    </PortfolioProvider>
  )
}

export default App
