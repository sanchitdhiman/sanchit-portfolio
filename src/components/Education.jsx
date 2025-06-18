function Education() {
    const education = [
        {
            id: 1,
            degree: 'Bachelor of Technology in Computer Science Engineering, AKTU',
            institution: 'G. L. Bajaj Institute of Technology, Greater Noida',
            years: '2021 - 2025',
            logo: '/gl-bajaj-logo.jpg'
        },
        {
            id: 2,
            degree: 'Intermediate in Science, CBSE',
            institution: 'Ascent International School, Greater Noida',
            years: '2019 - 2020',
            logo: '/ascent-international-school-logo.png'
        },
        {
            id: 3,
            degree: 'High School, CBSE',
            institution: 'Ascent International School, Greater Noida',
            years: '2017 - 2018',
            logo: '/ascent-international-school-logo.png'
        }
    ]

    return (
        <section className="rounded-xl  select-none py-12 bg-gray-100 dark:bg-gradient-to-r dark:from-blue-700 dark:to-yellow-900 shadow-[0_0_20px_2px_rgba(0,0,0,0.3)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center">
                <h2 className="text-3xl font-bold text-center text-secondary-900 dark:text-white mb-8 font-[Outfit]">
                    Education
                </h2>
                <div className="space-y-4 w-fit items-center justify-center mx-auto">
                    {education.map((edu) => (
                        <div key={edu.id}
                            className="flex flex-row font-[Poppins] hover:scale-103 transition-all duration-140 hover:shadow-[0px_0px_20px_2px_rgba(254,225,231,0.5)] justify-between items-center bg-secondary-100 dark:bg-secondary-100 p-6 rounded-lg shadow-[0_0_20px_2px_rgba(0,0,0,0.3)]">
                            <div>
                                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                                    {edu.degree}
                                </h3>
                                <p className="text-secondary-700 dark:text-secondary-300 text-gray-400">
                                    {edu.institution}
                                    <br /> {edu.years}
                                </p>
                            </div>
                            <div className="rounded-full items-center ml-8 justify-center h-fit w-fit bg-white">
                                <img src={edu.logo}  alt="institute logo" className="h-20 w-auto rounded-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education