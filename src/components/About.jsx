function About() {
    return (
        <section id="aboutme"
                 className="rounded-xl py-8 sm:py-10 md:py-12 lg:py-16 bg-white dark:bg-gradient-to-r dark:from-blue-700 dark:to-yellow-900 shadow-[0_0_20px_2px_rgba(0,0,0,0.3)]">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 md:mb-8 text-center font-[Outfit]">
                    About Me
                </h2>
                <div className="flex flex-col font-[Poppins] text-sm sm:text-base md:text-lg text-gray-300 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl mx-auto gap-3 sm:gap-4 md:gap-6">
                    <p>
                        Hey there! I'm Sanchit Dhiman, a passionate <strong>Computer Science Engineer</strong>. I am driven
                        by my goal of innovating new and better technologies and working on progressive ideas for the
                        development of my country. Yes, I am a <strong>strong patriot</strong>, who believes that we should
                        work hard, not only to solve the problems of our country, but also to make it better than any other
                        place in the world. I believe in kindness, hard work, discipline, brotherhood, and ambition.
                    </p>
                    <p>
                        I am currently working as a <strong>Programmer Analyst at Argusoft</strong> in Gandhinagar, Gujarat,
                        India. I have experience working with frameworks like <strong>Angular 19</strong>, and{' '}
                        <strong>React with Vite</strong>. I am steadily stepping into{' '}
                        <strong>Backend Development through Spring Boot</strong>. I aim to and open to working in{' '}
                        <strong>AI development</strong>. You can checkout my full skill set in the Skills section of this
                        website.
                    </p>
                    <p>
                        Apart from my professional life, I like to play <strong>Chess</strong>. Rated 1500. Pretty good,
                        right? I also enjoy playing <strong>Volleyball</strong> and <strong>Football</strong>. And if I get
                        any spare time after doing all this, I love to play video games with my friends.
                    </p>
                    <p>
                        Let's connect and work together to make a difference!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;