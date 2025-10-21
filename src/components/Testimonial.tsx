const Testimonial = () => {
    return (
        <section className="py-20 bg-black">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="text-6xl text-blue-500 mb-8">"</div>
                <blockquote className="text-2xl lg:text-3xl text-white font-light leading-relaxed mb-8">
                    Dan's writing brings characters to life in ways that few writers can achieve.
                    His ability to craft compelling narratives while maintaining authentic dialogue
                    makes him an invaluable asset to any production.
                </blockquote>
                <div className="text-gray-300">
                    <p className="text-lg font-semibold">Sarah Mitchell</p>
                    <p className="text-sm">Showrunner, "The Last Stand"</p>
                    <p className="text-sm">HBO Max</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
