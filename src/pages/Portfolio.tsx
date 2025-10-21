import React, { useState } from 'react';
import { projects as allProjects } from '../content/content';

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
interface IPortfolioProps {
    primaryCategory: 'Television' | 'Video Games';
}

const Portfolio: React.FC<IPortfolioProps> = ({ primaryCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

    const projects = allProjects.filter(project => project.primaryCategory === primaryCategory);

    const categories =
        ['All', ...[...new Set(projects.map(project => project.category))].sort()];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div id="portfolio" className="min-h-screen bg-black pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-6">
                    <h1 className="text-5xl font-bold text-white text-center">
                        {primaryCategory}
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
                            className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800 transition-colors group"
                        >
                            <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center" style={{
                                    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${project.image})`,
                                    backgroundPositionX: '50%',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat'
                                }}>
                                    <div className="text-center text-white">
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-[1fr_auto]'>
                                <div className="p-6">
                                    <div className='mb-2'>
                                        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                    </div>
                                    <p className="text-blue-400 text-sm mb-2">{project.role}</p>
                                    <p className="text-gray-400 text-sm">{project.date}</p>

                                </div>
                                <button onClick={() => setSelectedProject(project)} className="text-right top-0 right-0 relative m-2 max-h-20">
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-500/30 transition-colors bg-grey-50 hover:bg-blue-600 text-white p-2 ">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                                        </svg>
                                    </div>
                                    <p className="text-sm font-semibold">View Details</p>
                                </button>
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
                                            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${selectedProject.image})`,
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

export default Portfolio;
