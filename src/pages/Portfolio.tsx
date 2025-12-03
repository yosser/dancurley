import React, { useEffect, useState } from 'react';
//import { primaryCategories } from '../content/content';
import { usePocket } from '../hooks/usePocket';
import type { IProject, ICategory } from '../interfaces';

interface IPortfolioProps {
    primaryCategory: 'TV & Streaming' | 'Video Games' | 'Journalism';
    setGallery: (gallery: string) => void;
    show: boolean;
}

const Portfolio: React.FC<IPortfolioProps> = ({ primaryCategory, setGallery, show }) => {
    //    const [selectedCategory, setSelectedCategory] = useState('All');
    const { pb } = usePocket();
    const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

    // const filteredProjects = allProjects.filter(project => project.primaryCategory === primaryCategory);
    const [category, setCategory] = useState<ICategory>();
    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
        if (pb !== null) {
            pb.collection('category').getFirstListItem(`name="${primaryCategory}"`).then((record) => {
                setCategory(record as ICategory);
            });


        }
    }, [primaryCategory, pb]);

    useEffect(() => {
        if (category !== undefined && pb !== null) {
            pb.collection('project').getList(1, 100, { filter: `primaryCategory = "${category.id}" && active = true`, expand: 'externalLinks, galleries, focusImage, image' }).then((response) => {
                setProjects(response.items as IProject[]);
            });
        }
    }, [category, pb]);

    /*   const categories =
           ['All', ...[...new Set(projects.map(project => project.category))].sort()];
   
       const filteredProjects = selectedCategory === 'All'
           ? projects
           : projects.filter(project => project.category === selectedCategory);
   */
    const getProjectFocusImage = (project: IProject) => {
        if (project.expand?.focusImage) {
            return pb?.files.getURL(project.expand?.focusImage, project.expand?.focusImage?.image, { thumb: '0x256' });
        }
        if (project.expand?.image) {
            const url = pb?.files.getURL(project.expand?.image, project.expand?.image?.image, { thumb: '0x256' });
            return url ?? '';
        }
        return '';
    }
    const getProjectImage = (project: IProject) => {
        if (project.expand?.image) {
            const url = pb?.files.getURL(project.expand?.image, project.expand?.image?.image,);
            return url ?? '';
        }
        return '';
    }

    return (
        <div id="portfolio" className={`min - h - screen bg - black pt - 20 ${show ? 'block' : 'hidden'}`}>
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-6">
                    <h1 className="text-5xl font-bold text-white text-center">
                        {primaryCategory}
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <p className="text-gray-200 text-center" >{category?.description}</p>
                </div>
                {/* Filter Bar 
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px - 6 py - 2 rounded - full transition - colors ${ selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                } `}
                        >
                            {category}
                        </button>
                    ))}
                </div>
*/}
                {/* Project Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-900  rounded-lg overflow-hidden cursor-pointer hover:bg-gray-600 transition-colors group"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="aspect-video bg-gradient-to-br hover:bg-gray-600 from-gray-700 to-gray-800 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center" style={{
                                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${getProjectImage(project)}')`,
                                    backgroundPositionX: '50%',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat'
                                }}>
                                    <div className="text-center text-white"></div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className='mb-2'>
                                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                </div>
                                <p className="text-blue-400 text-sm mb-2">{project.role}</p>
                                <p className="text-gray-400 text-sm">{project.dateRange}</p>
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
                                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${getProjectFocusImage(selectedProject)}')`,
                                            backgroundPositionX: '100%',
                                            backgroundSize: 'contain',
                                            backgroundRepeat: 'no-repeat'
                                        }}></div>
                                        <div className="absolute bottom-5 left-4 text-white">
                                            <div className='mb-2'>
                                                <h2 className="text-3xl font-bold">{selectedProject.focusTitle ?? selectedProject.title}</h2>
                                            </div>
                                            <p className="text-blue-400">{selectedProject.role}</p>
                                            <p className="text-blue-200 text-sm">{selectedProject.dateRange}</p>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <div className="text-gray-300 text-lg leading-relaxed mb-6 space-y-2" dangerouslySetInnerHTML={{ __html: selectedProject.description }} >

                                        </div>

                                        <div className="flex gap-4 flex-wrap">
                                            {(selectedProject.expand?.externalLinks ?? []).map((link => <a
                                                href={link.url}
                                                key={link.id}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                                            >
                                                {link.label}
                                                <span className="ml-2 text-white">
                                                    <svg width="20px" height="20px" viewBox="0 0 24 24" style={{ cursor: 'pointer' }}>
                                                        <g stroke-width="2.1" stroke="#e0e0e0" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 13.5 17 19.5 5 19.5 5 7.5 11 7.5"></polyline><path d="M14,4.5 L20,4.5 L20,10.5 M20,4.5 L11,13.5"></path></g></svg>
                                                </span>
                                            </a>))}
                                            {(selectedProject.expand?.galleries ?? []).map((link => <button
                                                key={link.id}
                                                onClick={() => {
                                                    setGallery(link.name);
                                                }}
                                                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                                            >
                                                {link.name}
                                            </button>))}
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
