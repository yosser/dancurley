import React, { useState } from 'react';

interface ILoadedProps {
    onNavigate?: (page: string) => void;
}

const Loaded: React.FC<ILoadedProps> = ({ onNavigate }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const galleryImages = [
        {
            src: '/AlligatorWrestling.jpg',
            alt: 'Alligator Wrestling in Florida',
            title: 'Alligator Wrestling',
            description: 'During my time as a freelance features writer for Loaded, I spent time wrestling alligators in Florida as part of an investigative piece.'
        },
        {
            src: '/Cresta Run.jpg',
            alt: 'Cresta Run in Switzerland',
            title: 'Cresta Run',
            description: 'I experienced the famous Cresta Run in Switzerland, documenting the thrill and danger of this historic toboggan run.'
        },
        {
            src: '/iraq.jpg',
            alt: 'Military embed in Iraq',
            title: 'Iraq Military Embed',
            description: 'I spent two weeks embedded with the military in Iraq, providing firsthand coverage of military operations and life on the front lines.'
        }
    ];

    return (
        <div className="min-h-screen bg-black pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Loaded Magazine Features
                    </h1>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        A collection of investigative features and adventures from my time as a freelance writer for Loaded magazine (2002-2005)
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800 transition-colors group"
                            onClick={() => setSelectedImage(image.src)}
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-white font-semibold text-lg mb-2">{image.title}</h3>
                                        <p className="text-gray-300 text-sm">{image.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Back to Portfolio Button */}
                <div className="text-center">
                    <button
                        onClick={() => onNavigate ? onNavigate('journalism') : window.history.back()}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Back to Portfolio
                    </button>
                </div>

                {/* Image Modal */}
                {selectedImage && (
                    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6">
                        <div className="relative max-w-6xl max-h-[90vh] w-full">
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <img
                                src={selectedImage}
                                alt="Gallery image"
                                className="w-full h-full object-contain rounded-lg"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Loaded;
