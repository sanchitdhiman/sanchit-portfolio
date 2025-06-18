function Navbar({ toggleTheme, theme }) {
    return (
        <nav className="fixed z-50 flex py-3 w-full items-center justify-between px-4 transition-all duration-300 top-0 text-white font-[Poppins] dark:bg-gradient-to-r dark:from-blue-800 dark:to-gray-900">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2 ml-5">
                    <div>
                        <img src="/icon-no-bg.png" alt="Logo" className="h-10 w-auto select-none" />
                    </div>
                    <div className="text-2xl font-[Inter] font-semibold select-none">Sanchit Dhiman</div>
                </div>
                <div className="flex items-center space-x-16 mr-3">
                    <div className="flex items-center space-x-8">
                        <ul className="flex space-x-10 select-none">
                            <li className="nav-item active transition-transform transform hover:-translate-y-1 cursor-pointer dark:hover:bg-gradient-to-r dark:hover:from-blue-600 dark:hover:to-indigo-400 dark:hover:bg-clip-text dark:hover:text-transparent">
                                <a href="#home">Home</a>
                            </li>
                            <li className="nav-item transition-transform transform hover:-translate-y-1 cursor-pointer dark:hover:bg-gradient-to-r dark:hover:from-blue-600 dark:hover:to-indigo-400 dark:hover:bg-clip-text dark:hover:text-transparent">
                                <a href="#skills">Skills</a>
                            </li>
                            <li className="nav-item transition-transform transform hover:-translate-y-1 cursor-pointer dark:hover:bg-gradient-to-r dark:hover:from-blue-600 dark:hover:to-indigo-400 dark:hover:bg-clip-text dark:hover:text-transparent">
                                <a href="#projects">Projects</a>
                            </li>
                            <li className="nav-item transition-transform transform hover:-translate-y-1 cursor-pointer dark:hover:bg-gradient-to-r dark:hover:from-blue-600 dark:hover:to-indigo-400 dark:hover:bg-clip-text dark:hover:text-transparent">
                                <a href="#education">Education</a>
                            </li>
                            <li className="nav-item transition-transform transform hover:-translate-y-1 cursor-pointer dark:hover:bg-gradient-to-r dark:hover:from-blue-600 dark:hover:to-indigo-400 dark:hover:bg-clip-text dark:hover:text-transparent">
                                <a href="#about">About Me</a>
                            </li>
                        </ul>
                    </div>
                    <div className="select-none">
                        <button onClick={toggleTheme}
                                className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full dark:hover:bg-gradient-to-r dark:hover:from-blue-900 dark:hover:to-gray-700">
                            <span className="material-symbols-outlined fill-0 group-hover:fill-1 dark:group-hover:bg-gradient-to-r dark:group-hover:from-blue-600 dark:group-hover:to-indigo-400 dark:group-hover:bg-clip-text dark:group-hover:text-transparent">
                                {theme === 'light' ? 'dark_mode' : 'light_mode'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar