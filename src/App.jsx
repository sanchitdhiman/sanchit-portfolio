import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';

function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div>
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <div className="flex flex-col space-y-8 md:space-y-12 lg:space-y-16 pt-16 sm:pt-20 px-4 sm:px-6 md:px-12 lg:px-16 2xl:px-28 pb-8 sm:pb-12 md:pb-16">
                <Hero />
                <Skills />
                <Projects />
                <Education />
                <About />
                <Contact />
            </div>
        </div>
    );
}

export default App;