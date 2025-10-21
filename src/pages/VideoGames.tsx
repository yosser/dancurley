import { useState } from 'react';

interface IProject {
    id: number;
    title: string;
    category: string;
    role: string;
    date: string;
    description: string;
    externalLink?: string;
    image: string;
    externalLinks: { url: string; label: string }[];
}

const VideoGames = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState<IProject | null>(null);


    const projects: IProject[] = [
        {
            id: 1,
            title: "European Sega Championships",
            category: "Journalism",
            role: "Staff Writer",
            date: "1991",
            description: "My start in the videogame industry started in 1991 when I beat over 160,000 to become the European Sega Champion - the first year the Sega championships went international. This made me a celebrity of sorts for a time, leading to many hours of TV coverage across shows like BBC’s Newsround and C4’s GamesMaster. I also made a video with Dominik Diamond called Power Play “How To Become a Videogames Master” which was available to buy through retail.",
            externalLinks: [{ url: "https://www.youtube.com/watch?v=AIcLrZVqBkk", label: "Watch the video" }],
            image: "/Channel_4_Logo_2023.svg"
        },
        {
            id: 2,
            title: "The Getaway",
            category: "Content",
            role: "Staff Writer",
            date: "1991",
            description: "I worked at Sony for just over a year as the storyline writer for the PS2 game The Getaway - which cost(and unprecedented at the time) £6 million to develop and turned over £100 million in total.It was considered a groundbreaking title for the time, pushing the boundaries for both videogame narratives and cinema - style cutscenes and direction.I did not work on it to the end, I created the outline for the story(the kidnapping and dual storyline with Mark and Frank) and created most of the main characters, but the script was finished by others after I left.",
            externalLinks: [{ url: "https://en.wikipedia.org/wiki/The_Getaway_(video_game)", label: "The Getaway" }],
            image: "/Channel_4_Logo_2023.svg"
        },
        {
            id: 3,
            title: "QA and Design",
            category: "QA and Design",
            role: "QA Tester and Game Designer",
            date: "1991",
            description: "Throughout most of the '90s I worked at several independent video game development studios in Manchester, starting as a QA Tester then worked my way up to Level Designer then Game Designer. I worked on dozens of games including Super Kick Off, Flashback, Spider-Man: Maximum Carnage, James Pond: RoboCod and Olympic Gold: Barcelona 1992. My last game in this period was Tunnel B2 for which I was the full designer, but the studio Neon didn’t last due to financial reasons.",
            externalLinks: [{ url: "https://en.wikipedia.org/wiki/Super_Kick_Off", label: "Super Kick Off" }],
            image: "/Channel_4_Logo_2023.svg"
        },
        {
            id: 4,
            title: "Sega Power",
            category: "Journalism",
            role: "Freelance Writer",
            date: "1991",
            description: "I started freelance writing for Future Publishing’s Sega Power in 1991 while still just 15. I wrote a monthly column called Curley’s Challenge and several features, the most memorable being a visit to Sega Japan where I met the President of Sega and was able to reveal many new developments Sega were working on.",
            externalLinks: [{ url: "https://en.wikipedia.org/wiki/Sega_Power", label: "Sega Power" }],
            image: "/Channel_4_Logo_2023.svg"
        },
        {
            id: 5,
            title: "The Official UK PlayStation Magazine",
            category: "Journalism",
            role: "Deputy Editor",
            date: "1991",
            description: "After a spell on Future’s XGamer magazine, I became Deputy Editor of The Official UK PlayStation Magazine where I planned each issue, managed the freelance budget and pool and chaired features meetings.While at Future, I also freelanced for PSM2, GamesMaster Magazine, PlayStation Max, Total Film, and edited and wrote Metal Hammer's videogame section.",
            externalLinks: [{ url: "https://en.wikipedia.org/wiki/The_Official_UK_PlayStation_Magazine", label: "The Official UK PlayStation Magazine" }],
            image: "PlayStation.png"
        },
        {
            id: 6,
            title: "360",
            category: "Journalism",
            role: "Editor",
            date: "1991",
            description: "At Imagine, I managed a 25 - 30 page features section, lead features meetings, planned content, commissioned and wrote features.I also wrote for other sections including reviews and news.My favourite feature from this time was a feature about videogaming in prison, in which I interviewed someone from the Prison Service and a convicted criminal who’d spent time in prison.",
            externalLinks: [{ url: "https://en.wikipedia.org/wiki/360", label: "360" }],
            image: "/Channel_4_Logo_2023.svg"
        },];

    const categories =
        ['All', ...[...new Set(projects.map(project => project.category))].sort()];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div id="VideoGames" className="min-h-screen bg-black pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-6">
                    <h1 className="text-5xl font-bold text-white text-center">
                        VideoGames
                    </h1>
                </div>
                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full transition-colors ${selectedCategory === category
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800 transition-colors group"
                        >
                            <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center" style={{
                                    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url(${project.image})`,
                                    backgroundPositionX: '50%',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat'
                                }}>
                                    <div className="text-center text-white">
                                        <div className="w-16 h-16 bg-white /20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-500/30 transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                                            </svg>
                                        </div>
                                        <p className="text-sm font-semibold">View Details</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className='mb-2'>
                                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                </div>
                                <p className="text-blue-400 text-sm mb-2">{project.role}</p>
                                <p className="text-gray-400 text-sm">{project.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Project Modal */}
                {
                    selectedProject && (
                        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
                            <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                                <div className="relative">
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                                    >
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>

                                    <div className="aspect-7/2 bg-gradient-to-br from-gray-700 to-gray-800 relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" style={{
                                            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url(${selectedProject.image})`,
                                            backgroundPositionX: '100%',
                                            backgroundSize: 'contain',
                                            backgroundRepeat: 'no-repeat'
                                        }}></div>
                                        <div className="absolute bottom-5 left-4 text-white">
                                            <div className='mb-2'>
                                                <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                                            </div>
                                            <p className="text-blue-400">{selectedProject.role} • {selectedProject.date}</p>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                            {selectedProject.description}
                                        </p>

                                        <div className="flex gap-4">
                                            {(selectedProject.externalLinks ?? []).map((link => <a
                                                href={link.url}
                                                key={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                                            >
                                                {link.label}
                                            </a>))}
                                            <button
                                                onClick={() => setSelectedProject(null)}
                                                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div >
        </div >
    );
};

export default VideoGames;
