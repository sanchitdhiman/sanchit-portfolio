import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react'; // optional: install lucide-react or use svg

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 z-50 flex h-16 w-full items-center justify-between px-4 transition-all duration-300 text-white font-[Poppins] bg-gradient-to-r from-blue-800 to-gray-900">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-2 ml-1 sm:ml-2">
                    <img src="/icon-no-bg.png" alt="Logo" className="h-10 w-auto select-none" />
                    <div className="text-2xl font-[Inter] font-semibold select-none">Sanchit Dhiman</div>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center space-x-10 mr-5 lg:mr-8 select-none">
                    {['Home', 'Skills', 'Projects', 'Education', 'About Me'].map((item) => (
                        <li key={item}
                            className="nav-item transition-transform transform hover:-translate-y-1 cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-400 hover:bg-clip-text hover:text-transparent">
                            <a href={`#${item.toLowerCase().replace(/\s/g, '')}`}>{item}</a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Menu Icon */}
                <div className="lg:hidden relative" ref={menuRef}>
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className="absolute top-10 right-0 w-48 shadow-[0_0_20px_2px_rgba(0,0,0,0.3)] text-white rounded-md py-4 bg-gradient-to-br from-blue-800 to-gray-800">
                            <ul className="flex flex-col space-y-4 px-4 select-none">
                                {['Home', 'Skills', 'Projects', 'Education', 'About Me'].map((item) => (
                                    <li key={item}
                                        onClick={() => setMenuOpen(false)}
                                        className="transition-transform transform hover:-translate-y-1 cursor-pointer hover:bg-gradient-to-r hover:from-yellow-600 hover:to-indigo-400 hover:bg-clip-text hover:text-transparent">
                                        <a href={`#${item.toLowerCase().replace(/\s/g, '')}`}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;