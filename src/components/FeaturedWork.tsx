import { usePocket } from "../hooks/usePocket";
import type { RecordModel } from "pocketbase";
interface FeaturedWorkProps {
    onNavigate: (page: string) => void;
    categories: RecordModel[];
}

const FeaturedWork = ({ onNavigate, categories }: FeaturedWorkProps) => {
    const { pb } = usePocket();

    return (
        <section id="work" className="py-14 bg-gray-900">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="mb-12 mx-auto w-full">
                    <h2 className="text-4xl font-bold text-white text-center">
                        Industries
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((primaryCategory) => {

                        return (<div key={primaryCategory.id} className="group cursor-pointer">
                            <div onClick={() => onNavigate(primaryCategory.nav)} className="relative overflow-hidden rounded-lg bg-gray-800 aspect-video mb-4">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                                    style={{
                                        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${pb?.files.getURL(primaryCategory.expand?.image, primaryCategory.expand?.image?.image)})`,
                                        backgroundPositionX: '50%',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                >
                                </div>

                                <div className="bg-gray-900 rounded-top-lg max-w-4xl w-full overflow-y-auto z-10 opacity-90">
                                    <div className="aspect-7/2 bg-gradient-to-br from-gray-700 to-gray-800 relative">
                                        <div className="pt-7">
                                            <h2 className="text-3xl font-bold text-center">{primaryCategory.name}</h2>
                                        </div>
                                    </div>

                                </div>

                                {/*<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <button
                                        onClick={() => onNavigate(pc2nav[primaryCategory])}
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                                    >
                                        Read More
                                    </button>
                                </div> */}
                            </div>

                        </div>
                        )
                    })}
                </div>
            </div>
        </section >
    );
};

export default FeaturedWork;
