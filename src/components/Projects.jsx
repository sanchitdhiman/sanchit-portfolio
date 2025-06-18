function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Savvy',
            description: '',
            link: '#',
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'A to-do list app using JavaScript.',
            link: '#',
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'A portfolio site with React and Tailwind.',
            link: '#',
        },
    ]

    return (
        <section id="projects" className="rounded-xl  select-none py-12 bg-gray-100 dark:bg-gradient-to-r dark:from-blue-700 dark:to-yellow-900 shadow-[0_0_20px_2px_rgba(0,0,0,0.3)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center">
                <h2 className="text-3xl font-bold text-center text-secondary-900 dark:text-white mb-8 font-[Outfit]">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id}
                             className="bg-white dark:bg-transparent pl-6 pr-4 py-3 flex flex-col rounded-lg shadow-[0_0_20px_2px_rgba(0,0,0,0.3)] items-center justify-between hover:scale-105 transition-all duration-100">
                            <h3 className="text-xl font-semibold text-secondary-800 dark:text-white mb-2">
                                {project.title}
                            </h3>
                            <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                                {project.description}
                            </p>
                            <a href={project.link}
                               className="text-primary-500 hover:underline dark:text-primary-400 dark:hover:text-primary-300">
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects