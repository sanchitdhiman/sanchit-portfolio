function Skills() {
    const skills = [
        {
            id: 1,
            logo: '/python.png',
            title: 'Python',
            description: 'Used for data analysis, machine learning, and web development.',
        },
        {
            id: 2,
            logo: '/java.png',
            title: 'Java',
            description: 'Object-oriented programming language used for building scalable applications.',
        },
        {
            id: 3,
            logo: '/cpp.png',
            title: 'C++',
            description: 'High-performance programming language used for system/software development.',
        },
        {
            id: 4,
            logo: '/js.png',
            title: 'JavaScript',
            description: 'Used for web development, both frontend and backend with Node.js.',
        },
        {
            id: 5,
            logo: '/react.png',
            title: 'React',
            description: 'JavaScript library for building user interfaces, especially single-page applications.',
        },
        {
            id: 6,
            logo: '/angular.gif',
            title: 'Angular',
            description: 'Framework for building dynamic web applications using TypeScript.',
        },
        {
            id: 7,
            logo: '/spring-boot.png',
            title: 'Spring Boot',
            description: 'Framework for building Java-based web applications and microservices.',
        },
        {
            id: 8,
            logo: '/postgres.png',
            title: 'PostgreSQL',
            description: 'Open-source relational database management system known for its robustness and performance.',
        },
        {
            id: 9,
            logo: '/tailwind.png',
            title: 'Tailwind CSS',
            description: 'Utility-first CSS framework for building custom designs without leaving your HTML.',
        },
        {
            id: 10,
            logo: '/git.png',
            title: 'Git',
            description: 'Version control system for tracking changes in source code during software development.',
        },
        {
            id: 11,
            logo: '/typescript.png',
            title: 'TypeScript',
            description: 'Superset of JavaScript that adds static types, enhancing code quality and maintainability.',
        },
        {
            id: 12,
            logo: '/postman.webp',
            title: 'Postman',
            description: 'API development environment for building, testing, and documenting APIs.',
        }
    ]

    return (
        <section id="skills" className="rounded-xl  select-none py-12 bg-gray-100 dark:bg-gradient-to-r dark:from-blue-700 dark:to-yellow-900 shadow-[0_0_20px_2px_rgba(0,0,0,0.3)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center">
                <h2 className="text-3xl font-bold text-center text-secondary-900 dark:text-white mb-8 font-[Outfit]">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-fit">
                    {skills.map((skill) => (
                        <div key={skill.id}
                             className="bg-white dark:bg-transparent pl-6 pr-4 py-3 flex flex-row rounded-lg shadow-[0_0_20px_2px_rgba(0,0,0,0.3)] items-center justify-between hover:scale-105 transition-all duration-100">
                            <div>
                                <img src={skill.logo} alt={`${skill.title} logo`} className="h-auto w-20" />
                            </div>
                            <div className="text-left items-center ml-4 justify-center font-[Poppins]">
                                <h3 className="text-lg font-semibold text-white">
                                    {skill.title}
                                </h3>
                                <p className="text-secondary-700 dark:text-secondary-300 text-gray-400 text-sm">
                                    {skill.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;