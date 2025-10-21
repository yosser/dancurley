import React from 'react';

const Footer = ({ setCurrentPage }: { setCurrentPage: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 pt-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-white">Dan Curley</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Writer for Television & New Media. Crafting stories that connect and inspire.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white py-2">Quick Links</h4>
                        <div className="space-y-2">
                            <a href="#portfolio" onClick={() => setCurrentPage('portfolio')} className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                                Portfolio
                            </a>
                            <a href="#about" onClick={() => setCurrentPage('about')} className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                                About
                            </a>
                            <a href="#contact" onClick={() => setCurrentPage('contact')} className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                                Contact
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white py-2">Connect</h4>
                        <div className="space-y-2">
                            <a
                                href="mailto:dan@dancurley.com"
                                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
                            >
                                dan@dancurley.com
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dan-curley-3ab4772ab/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://pro.imdb.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
                            >
                                IMDb Pro
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 p-8 text-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 Dan Curley. All rights reserved. Available for permanent and freelance opportunities.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
