const Services = () => {
    const services = [
        {
            title: "Series Development",
            description: "Creating compelling storylines and character arcs for television series."
        },
        {
            title: "Script Doctoring",
            description: "Polishing and enhancing existing scripts to maximize their impact."
        },
        {
            title: "Season Arcs",
            description: "Developing long-term narrative strategies across multiple episodes."
        },
        {
            title: "Freelance Features",
            description: "Writing articles and features for entertainment publications."
        },
        {
            title: "Character Development",
            description: "Creating complex, multi-dimensional characters that resonate with audiences."
        },
        {
            title: "Dialogue Writing",
            description: "Crafting authentic, engaging dialogue that drives the story forward."
        }
    ];

    return (
        <section className="py-14 bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-8">
                    <h2 className="text-4xl font-bold text-white text-center">
                        My Expertise
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                            <div className="mb-3">
                                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
