function Projects() {
    const projects = [
        {
            id: 1,
            title: 'CheckMate',
            description: 'CheckMate is a platform for managing teams, tasks, and checklists with advanced analytics to track progress and performance.',
            link: 'https://github.com/sanchitdhiman/CheckMate',
            techStack: ['Angular', 'Spring Boot', 'Java', 'TypeScript', 'PostgreSQL', 'Maven', 'Tailwind CSS', 'Chart.js'],
            screen: '/checkmate.png',
        },
        {
            id: 2,
            title: 'Savvy',
            description: 'Savvy is an EdTech website that offers structured courses as roadmaps to help users learn selected topics from beginner to advanced levels.',
            link: 'https://github.com/sanchitdhiman/Savvy-main',
            techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            screen: '/savvy.png',
        },
    ]

    return (
        <section id="projects" className="rounded-xl select-none py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-100 dark:bg-gradient-to-r dark:from-blue-700 dark:to-yellow-900 shadow-[0_0_20px_2px_rgba(0,0,0,0.3)]">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 md:mb-8 text-center font-[Outfit]">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div key={project.id}
                             className="bg-transparent pt-6 pl-6 pr-6 py-3 flex flex-col rounded-lg text-left shadow-[0_0_20px_2px_rgba(0,0,0,0.3)] justify-between hover:scale-103 transition-all duration-100">
                            <img src={project.screen} alt={`${project.title} screenshot`} className="h-fit w-full object-cover rounded-md mb-2" />
                            <div className='text-left mb-1'>
                                <h3 className="text-xl font-semibold text-white font-[Poppins] text-left">
                                    {project.title}
                                </h3>
                            </div>
                            <p className="font-[Poppins] text-white mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech, index) => (
                                    <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-[Poppins]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-fit h-fit">
                                <button className="text-white flex gap-2 items-center cursor-pointer font-bold py-2 px-4 rounded-lg w-fit bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-colors duration-300 mb-2 shadow">
                                    <div>
                                        <img src="/github.png" alt="github logo" className="h-6 w-auto" />
                                    </div>
                                    github
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects