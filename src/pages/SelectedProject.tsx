import React from "react";
import PocketBase from "pocketbase";
import { useSubscribeItem } from "../hooks/useSubscribeItem";
import type { IProject } from "../interfaces";

interface ISelectedProjectProps {
    pb: PocketBase;
    selectedProjectId: string;
    setSelectedProject: (projectId: string | null) => void;
    setGallery: (gallery: string) => void;
}

export const SelectedProject: React.FC<ISelectedProjectProps> = ({ pb, selectedProjectId, setSelectedProject, setGallery }) => {
    const selectedProject: IProject | null = useSubscribeItem(pb, 'project', selectedProjectId, 'externalLinks, galleries, focusImage, image') as IProject | null;

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

    return (<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
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

                {selectedProject && <div className="aspect-7/2 bg-gradient-to-br from-gray-700 to-gray-800 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${getProjectFocusImage(selectedProject)}')`,
                        backgroundPositionX: '100%',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }}></div>
                    <div className="absolute bottom-5 left-4 text-white">
                        <div className='mb-2'>
                            <h2 className="text-3xl font-bold">{selectedProject?.focusTitle ?? selectedProject?.title}</h2>
                        </div>
                        <p className="text-blue-400">{selectedProject?.role}</p>
                        <p className="text-blue-200 text-sm">{selectedProject?.dateRange}</p>
                    </div>
                </div>}

                <div className="p-4">
                    <div className="text-gray-300 text-lg leading-relaxed mb-6 space-y-2" dangerouslySetInnerHTML={{ __html: selectedProject?.description ?? '' }} >

                    </div>

                    <div className="flex gap-4 flex-wrap">
                        {(selectedProject?.expand?.externalLinks ?? []).map((link => <a
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
                        {(selectedProject?.expand?.galleries ?? []).map((link => <button
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
    </div>);
}