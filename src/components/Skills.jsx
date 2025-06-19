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
        },
    ];

    return (
        <section id="skills"
                 className="rounded-xl select-none py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-100 dark:bg-gradient-to-r dark:from-blue-700 dark:to-yellow-900 shadow-[0_0_20px_2px_rgba(0,0,0,0.3)]">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-secondary-900 dark:text-white mb-4 sm:mb-6 md:mb-8 font-[Outfit]">
                    Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
                    {skills.map((skill) => (
                        <div key={skill.id}
                             className="bg-white dark:bg-transparent px-4 py-4 sm:px-6 sm:py-3 md:px-6 md:py-4 flex flex-row items-center justify-between rounded-lg shadow-[0_0_20px_2px_rgba(0,0,0,0.3)] hover:scale-[1.03] transition-all duration-150">
                            <div className="flex-shrink-0">
                                <img src={skill.logo}
                                     alt={`${skill.title} logo`}
                                     className="h-12 sm:h-10 md:h-12 max-w-10 w-auto object-contain" />
                            </div>
                            <div className="ml-4 sm:ml-6 flex-1 text-left font-[Poppins]">
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-secondary-900 dark:text-white">
                                    {skill.title}
                                </h3>
                                <p className="text-sm sm:text-base text-secondary-700 dark:text-secondary-300 text-gray-400 mt-1">
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