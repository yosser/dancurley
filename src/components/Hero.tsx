
const Hero = () => {
    return (
        <section className="mt-20 mb-10 flex items-center bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="max-w-7xl mx-auto px-6 flex flex-items-between gap-2 items-center">
                <div className="text-white animate-fade-in-up basis-2/3">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                        Dan Curley
                    </h1>
                    <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                    Writer, journalist, researcher and web producer with decades of experience and success in creative industries, including most recently as Lead Writer on The Remaking of Addis Ababa, a 244-page factual book launched in Ethiopia in May 2026.
                    </p>
                </div>
                <div className="text-white animate-fade-in-up basis-1/3">
                    <img src="/Dan in suit crop.jpg" alt="Dan Curley" className="object-cover" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
