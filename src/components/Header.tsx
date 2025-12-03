import { useState, useEffect } from 'react';
import { type RecordModel } from 'pocketbase';
interface HeaderProps {
    onNavigate: (page: string) => void;
    currentPage: string;
    categories: RecordModel[];
}

const Header = ({ onNavigate, currentPage, categories }: HeaderProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavigation = (page: string) => {
        onNavigate(page);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-gray-800'
            : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => handleNavigation('home')}
                        className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                    >
                        Dan Curley
                    </button>

                    {/* Desktop Navigation */}

                    <nav className="hidden md:flex items-center space-x-8">
                        {(categories ?? []).map(category => (
                            <button
                                key={category.id}
                                onClick={() => handleNavigation(category.nav)}
                                className={`transition-colors ${currentPage === category.nav
                                    ? 'text-blue-400'
                                    : 'text-white hover:text-blue-400'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}

                        {/*<button

                            onClick={() => handleNavigation('about')}
                            className={`transition-colors ${currentPage === 'about'
                                ? 'text-blue-400'
                                : 'text-white hover:text-blue-400'
                                }`}
                        >
                            About
                        </button>*/}
                        <button
                            onClick={() => handleNavigation('contact')}
                            className={`transition-colors ${currentPage === 'contact'
                                ? 'text-blue-400'
                                : 'text-white hover:text-blue-400'
                                }`}
                        >
                            Contact
                        </button>

                    </nav>


                    {/* Mobile Menu Button - Always visible on mobile */}
                    <button
                        onClick={handleMobileMenuToggle}
                        className="md:hidden text-white hover:text-blue-400 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
                        <nav className="px-6 py-4 space-y-4">
                            {(categories ?? []).map(category => (
                                <button
                                    key={category.id}
                                    onClick={() => handleNavigation(category.nav)}
                                    className={`block w-full text-left py-2 transition-colors ${currentPage === category.nav
                                        ? 'text-blue-400'
                                        : 'text-white hover:text-blue-400'
                                        }`}
                                ></button>))}
                            <button
                                onClick={() => handleNavigation('about')}
                                className={`block w-full text-left py-2 transition-colors ${currentPage === 'about'
                                    ? 'text-blue-400'
                                    : 'text-white hover:text-blue-400'
                                    }`}
                            >
                                About
                            </button>
                            <button
                                onClick={() => handleNavigation('contact')}
                                className={`block w-full text-left py-2 transition-colors ${currentPage === 'contact'
                                    ? 'text-blue-400'
                                    : 'text-white hover:text-blue-400'
                                    }`}
                            >
                                Contact
                            </button>

                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
