interface FeaturedWorkProps {
    onNavigate: (page: string) => void;
}


const FeaturedWork = ({ onNavigate }: FeaturedWorkProps) => {
    const projects = [
        {
            id: 1,
            title: "TV and Streaming",
            role: "Writer & Editor",
            image: "/api/placeholder/400/300",
            description: "2007 to Present"
        },
        {
            id: 2,
            title: "Journalism",
            role: "Fulltime & Freelance",
            image: "/api/placeholder/400/300",
            description: "1991 to present"
        },
        {
            id: 3,
            title: "Videogames",
            role: "Development & Media",
            image: "/api/placeholder/400/300",
            description: "1991 to present"
        },

    ];

    return (
        <section id="work" className="py-14 bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-white text-center">
                        Industries
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-lg bg-gray-800 aspect-video mb-4">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                                            </svg>
                                        </div>
                                        <p className="text-sm font-semibold">View Project</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <button
                                        onClick={() => onNavigate('portfolio')}
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                            <div className="mb-2">
                                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                            </div>
                            <p className="text-blue-400 text-sm mb-2">{project.role}</p>
                            <p className="text-gray-300 text-sm">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;
