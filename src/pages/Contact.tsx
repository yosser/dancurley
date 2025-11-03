

export const MailLink: React.FC<{ className?: string }> = ({ className }) => {
    const email = 'dan_curley@hotmail.com';
    return (<a id="email-link" href={`mailto:${email}`} className={className ? className : "text-blue-400 hover:text-blue-300 transition-colors"}>
        Email Me
    </a>);
}

const Contact = () => {
    return (
        <div id="contact" className="min-h-screen bg-black pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className='mb-6'>
                    <h1 className="text-5xl font-bold text-white text-center">
                        Give us a shout
                    </h1>
                </div>
                <div className="mb-6">
                    <p className="text-xl text-gray-300 text-center mb-4">
                        Available for full-time contracts, freelance commissions and office-based shifts around the whole of the UK.
                    </p>
                </div>
                <div >
                    {/* Left Side - Contact Form */}
                    {/*<div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-white text-sm font-semibold mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="projectDetails" className="block text-white text-sm font-semibold mb-2">
                                    Project Details *
                                </label>
                                <textarea
                                    id="projectDetails"
                                    name="projectDetails"
                                    required
                                    rows={6}
                                    value={formData.projectDetails}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                                    placeholder="Tell me about your project, timeline, and what you're looking for..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 transform hover:scale-105"
                            >
                                Hire Me
                            </button>
                        </form>
                    </div>*/}

                    {/* Right Side - Contact Information */}
                    <div className="space-y-8">
                        <div className="ml-12">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-6 h-6 text-blue-500 mt-1">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">Email</p>
                                        <MailLink />

                                    </div>
                                </div>

                                {/*<div className="flex items-start space-x-4">
                                    <div className="w-6 h-6 text-blue-500 mt-1">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">IMDb Pro</p>
                                        <a href="https://pro.imdb.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                                            View Professional Profile
                                        </a>
                                    </div>
                                </div>*/}

                                <div className="flex items-start space-x-4">
                                    <div className="w-6 h-6 text-blue-500 mt-1">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">LinkedIn</p>
                                        <a href="https://www.linkedin.com/in/dan-curley-3ab4772ab/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                                            Connect with me
                                        </a>
                                    </div>
                                </div>

                                {/*<div className="flex items-start space-x-4">
                                    <div className="w-6 h-6 text-blue-500 mt-1">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">Twitter/X</p>
                                        <a href="https://twitter.com/dancurley" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                                            Follow me
                                        </a>
                                    </div>
                                </div>*/}
                            </div>
                        </div>

                        {/*<div className="bg-gray-900 p-6 rounded-lg">
                            <div className="mb-4">
                                <h4 className="text-lg font-semibold text-white">Response Time</h4>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                I typically respond to inquiries within 24-48 hours. For urgent projects,
                                please mention "URGENT" in your subject line and I'll prioritize your message.
                            </p>
                        </div>*/}

                        {/*<div className="bg-gray-900 p-6 rounded-lg">
                            <div className="mb-4">
                                <h4 className="text-lg font-semibold text-white">What to Include</h4>
                            </div>
                            <ul className="text-gray-300 text-sm space-y-2">
                                <li>• Project type and scope</li>
                                <li>• Timeline and deadlines</li>
                                <li>• Budget range (if applicable)</li>
                                <li>• Any specific requirements or references</li>
                                <li>• Your contact information and preferred communication method</li>
                            </ul>
                        </div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
