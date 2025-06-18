import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";

function App() {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div>
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <div className="flex flex-col space-y-16 pt-14 px-24 pb-14">
                <Hero />
                <Skills />
                <Projects />
                <Education />
                <About />
                <Contact />
            </div>
        </div>
    )
}

export default App