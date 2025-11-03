
const Hero = () => {
    return (
        <section className="mt-20 mb-10 flex items-center bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-white animate-fade-in-up">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                        Dan Curley
                    </h1>
                    <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                        Journalist, scriptwriter, editor, web producer and game developer with decades of experience and success in creative industries.                    </p>
                </div>
                <div className="text-white animate-fade-in-up">
                    <img src="/dan-headshot-sm.jpg" alt="Dan Curley" className="object-cover" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
