function Education() {
    const education = [
        {
            id: 1,
            degree: 'Bachelor of Technology in Computer Science Engineering, AKTU',
            institution: 'G. L. Bajaj Institute of Technology, Greater Noida',
            years: '2021 - 2025',
            logo: '/gl-bajaj-logo.png',
        },
        {
            id: 2,
            degree: 'Intermediate in Science, CBSE',
            institution: 'Ascent International School, Greater Noida',
            years: '2019 - 2020',
            logo: '/ascent-international-school-logo.png',
        },
        {
            id: 3,
            degree: 'High School, CBSE',
            institution: 'Ascent International School, Greater Noida',
            years: '2017 - 2018',
            logo: '/ascent-international-school-logo.png',
        },
    ];

    return (
        <section id="education"
                 className="rounded-xl select-none py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-100 dark:bg-gradient-to-r dark:from-blue-700 dark:to-yellow-900 shadow-[0_0_20px_2px_rgba(0,0,0,0.3)]">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-secondary-900 dark:text-white mb-4 sm:mb-6 md:mb-8 font-[Outfit]">
                    Education
                </h2>
                <div className="flex flex-col space-y-4 sm:space-y-6 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-4xl mx-auto font-[Poppins]">
                    {education.map((edu) => (
                        <div key={edu.id}
                             className="flex flex-col sm:flex-row items-center justify-between bg-secondary-100 dark:bg-secondary-100 p-4 sm:p-6 md:p-6 rounded-lg shadow-[0_0_20px_2px_rgba(0,0,0,0.3)] hover:scale-[1.03] transition-all duration-140 hover:shadow-[0px_0px_20px_2px_rgba(254,225,231,0.5)]">
                            <div className="text-center sm:text-left">
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-secondary-900 dark:text-white">
                                    {edu.degree}
                                </h3>
                                <p className="text-sm sm:text-base text-secondary-700 dark:text-secondary-300 text-gray-400 mt-1 sm:mt-2">
                                    {edu.institution}
                                    <br />
                                    {edu.years}
                                </p>
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-6 md:ml-8 flex justify-center">
                                <div className="rounded-full bg-white overflow-hidden aspect-square">
                                    <img
                                        src={edu.logo}
                                        alt={`${edu.institution} logo`}
                                        className="h-16 sm:h-16 md:h-20 w-full object-contain rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;