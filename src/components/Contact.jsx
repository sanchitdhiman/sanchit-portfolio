function Contact() {
    return (
        <section id="contact" className="items-center justify-center select-none">
            <div>
                <h2 className="text-base font-medium text-secondary-900 dark:text-white mb-4 text-center font-[Poppins]">
                    Contact Me:
                </h2>
                <ul className="flex space-x-10 items-center justify-center">
                    <li className="transition-transform transform hover:-translate-y-1 cursor-pointer shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] bg-transparent rounded-full">
                        <a href="mailto:skdhiman392@gmail.com" target="_blank">
                            <img src="/gmail.png" alt="Logo" className="h-9 w-auto " />
                        </a>
                    </li>
                    <li className="transition-transform transform hover:-translate-y-1 cursor-pointer shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] bg-transparent rounded-full">
                        <a href="https://www.github.com/sanchitdhiman" target="_blank">
                            <img src="/github.png" alt="Logo" className="h-8 w-auto" />
                        </a>
                    </li>
                    <li className="transition-transform transform hover:-translate-y-1 cursor-pointer shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] bg-transparent rounded-full">
                        <a href="https://www.instagram.com/sanchitdhiman._/" target="_blank">
                            <img src="/instagram.png" alt="Logo" className="h-8 w-auto" />
                        </a>
                    </li>
                    <li className="transition-transform transform hover:-translate-y-1 cursor-pointer shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] bg-transparent rounded-full">
                        <a href="https://www.linkedin.com/in/sanchit-dhiman-99az/" target="_blank">
                            <img src="/linkedin.png" alt="Logo" className="h-8 w-auto" />
                        </a>
                    </li>
                    <li className="transition-transform transform hover:-translate-y-1 cursor-pointer shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] bg-transparent rounded-full">
                        <a href="https://www.x.com/SanchitDhiman07" target="_blank">
                            <img src="/twitter.png" alt="Logo" className="h-8 w-auto rounded" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Contact