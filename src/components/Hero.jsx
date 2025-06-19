import { useEffect, useState } from 'react';

function Hero() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id="home"
             className="pt-12 sm:pt-8 md:pt-20 lg:pt-24 pb-8 sm:pb-12 md:pb-16 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-8 lg:px-4 dark:text-white">
            <div className="w-full md:w-1/2 text-center md:text-left">
                <p>
                    <span className="text-lg sm:text-xl md:text-2xl font-medium font-[Poppins]">
                        <span className="text-xl sm:text-2xl md:text-3xl text-gradient bg-gradient-to-b from-orange-400 to-green-500 bg-clip-text text-transparent">
                            Namaste!
                        </span>
                    </span>
                    <br />
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-[Poppins]">
                        I am{' '}
                        <span className="text-gradient bg-gradient-to-b from-yellow-500 to-blue-600 bg-clip-text text-transparent whitespace-nowrap">
                            Sanchit Dhiman
                        </span>
                        .
                    </span>
                </p>
                <div className="flex items-center justify-center md:justify-start space-x-3 text-base sm:text-lg md:text-xl font-medium font-[Poppins] mt-6 sm:mt-8 md:mt-10">
                    <a href="https://www.argusoft.com/" target="_blank" rel="noopener noreferrer">
                        <span>
                            <img
                                src="/argusoft.jpeg"
                                alt="Argusoft Logo"
                                className="h-8 sm:h-10 w-auto select-none rounded-md"
                            />
                        </span>
                    </a>
                    <span>
                        <span className="text-gradient bg-gradient-to-b from-yellow-500 to-white bg-clip-text text-transparent dark:from-yellow-500 dark:to-gray-200">
                            Programmer Analyst
                        </span>{' '}
                        at Argusoft
                    </span>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="rounded-full shadow-[0_0_20px_2px_rgba(0,0,0,0.3)] bg-white dark:bg-gradient-to-r dark:from-blue-800 dark:to-gray-700 overflow-hidden aspect-square">
                    <img src="/photo.png"
                         alt="Hero Image"
                         className="h-48 sm:h-64 md:h-80 lg:h-96 w-full object-cover rounded-full" />
                </div>
            </div>
        </div>
    );
}

export default Hero;