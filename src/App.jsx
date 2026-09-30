import { useState } from 'react'
import Header from './components/Header'
import NavTabs from './components/NavTabs'
import MainSection from './components/MainSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [activeTab, setActiveTab] = useState('main')

  return (
    <>
      <Header />

      <NavTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === 'main' && <MainSection />}
      {activeTab === 'projects' && <ProjectsSection />}
      {activeTab === 'contact' && <ContactSection />}

      <Footer />
    </>
  )
}

export default App