import React, { useState } from 'react';
//import { primaryCategories } from '../content/content';
import { usePocket } from '../hooks/usePocket';
import type { IProject, ICategory } from '../interfaces';
import { useSubscribeItem } from '../hooks/useSubscribeItem';
import { useSubscribe } from '../hooks/useSubscribe';
import { SelectedProject } from './SelectedProject';
interface IPortfolioProps {
    primaryCategoryId: string;
    setGallery: (gallery: string) => void;
    show: boolean;
}

const Portfolio: React.FC<IPortfolioProps> = ({ primaryCategoryId, setGallery, show }) => {
    //    const [selectedCategory, setSelectedCategory] = useState('All');
    const { pb } = usePocket();
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const primaryCategory = useSubscribeItem(pb, 'category', primaryCategoryId, 'image') as unknown as ICategory;
    // const filteredProjects = allProjects.filter(project => project.primaryCategory === primaryCategory);
    const projects = useSubscribe(pb, 'project', false, `primaryCategory = "${primaryCategoryId}" && active = true`, 'externalLinks, galleries, focusImage, image') as IProject[];


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
                        {primaryCategory?.name}
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <p className="text-gray-200 text-center" >{primaryCategory?.description}</p>
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
                    {[...projects].sort((a,b) => b.priority - a.priority).map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-900  rounded-lg overflow-hidden cursor-pointer hover:bg-gray-600 transition-colors group"
                            onClick={() => setSelectedProject(project.id)}
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

                {
                    (selectedProject && pb) ? (<SelectedProject pb={pb} selectedProjectId={selectedProject} setSelectedProject={setSelectedProject} setGallery={setGallery} />)
                        : null

                }
            </div >
        </div >
    );
};

export default Portfolio;
