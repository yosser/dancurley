import {
    aboutMe
} from '../content/content';


const About = () => {
    return (
        <div id="about" className="min-h-screen bg-black pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-8">
                    <h1 className="text-5xl font-bold text-white text-center">
                        About
                    </h1>
                </div>
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side - Headshot */}
                    <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center rounded-lg"
                                style={{
                                    backgroundImage: `url('/dan-headshot.jpg')`,
                                    backgroundPositionX: '50%',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Bio */}
                    <div className="text-white">
                        <div className="mb-4">
                            <h2 className="text-3xl font-bold">My Story</h2>
                        </div>
                        <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                            {aboutMe.map((item, index) => (
                                <p key={index}>{item.text}</p>
                            ))}
                        </div>

                        {/* Selected Credits */}
                        {/* <div className="mt-12">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white">Selected Credits</h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                {selectedCredits.map((credit, index) => (
                                    <div key={index} className="bg-gray-900 p-4 rounded-lg">
                                        <p className="text-gray-300">{credit}</p>
                                    </div>
                                ))}
                            </div>
                        </div> *}

                        {/* Clients & Publications */}
                        {/*<div className="mt-12">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white">Clients & Publications</h3>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                {clients.map((client, index) => (
                                    <span key={index} className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">
                                        {client}
                                    </span>
                                ))}
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
