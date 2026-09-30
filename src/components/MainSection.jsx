
import About from './About'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'

function MainSection() {
    return (
        <main className="tab-content">
            <About />
            <hr></hr>
            <Skills />
            <hr></hr>
            <Education />
            <hr></hr>
            <Experience />
            <hr></hr>
        </main>
    )
}

export default MainSection