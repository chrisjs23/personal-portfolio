

function NavTabs({ activeTab, setActiveTab }) {
  return (
    <nav className="tab">
      <button
        className={activeTab === 'main' ? 'active' : ''}
        onClick={() => setActiveTab('main')}
      >
        Main
      </button>

      <button
        className={activeTab === 'projects' ? 'active' : ''}
        onClick={() => setActiveTab('projects')}
      >
        Projects
      </button>

      <button
        className={activeTab === 'contact' ? 'active' : ''}
        onClick={() => setActiveTab('contact')}
      >
        Contact
      </button>
    </nav>
  )
}

export default NavTabs