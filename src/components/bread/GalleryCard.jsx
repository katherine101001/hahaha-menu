import { useState } from "react";
import { Flame, ZoomIn, Images, Egg } from "lucide-react";
import PriceTag from "../common/PriceTag";

const GalleryCard = ({ item, onImageClick }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (e) => {
        const scrollLeft = e.target.scrollLeft;
        const width = e.target.offsetWidth;
        const index = Math.round(scrollLeft / width);
        setActiveIndex(index);
    };

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-stone-100 mb-6 flex flex-col relative group">
            {item.highlight && (
                <div className="absolute top-3 left-3 bg-gradient-to-r from-[#d4af37] to-[#eac765] text-[#0f4c3a] text-[10px] font-bold px-3 py-1.5 rounded shadow-lg uppercase flex items-center gap-1.5 tracking-wider z-20">
                    <Flame size={12} className="text-red-600" fill="currentColor" /> {item.highlight}
                </div>
            )}

            <div className="relative h-56 w-full bg-stone-100">
                <div
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-full w-full"
                    onScroll={handleScroll}
                >
                    {item.images.map((img, idx) => (
                        <div
                            key={idx}
                            className="w-full h-full shrink-0 snap-center relative cursor-pointer"
                            onClick={() => onImageClick(img, `${item.nameCN} (图 ${idx + 1})`)}
                        >
                            <img
                                src={img}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                alt={`${item.nameEN} ${idx + 1}`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/30 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border border-white/20 z-10">
                                <ZoomIn className="text-white" size={24} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full p-2 z-10 text-white/90">
                    <Images size={14} />
                </div>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/30 px-2.5 py-1.5 rounded-full backdrop-blur-md">
                    {item.images.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-4 bg-[#d4af37]" : "w-1.5 bg-white/60"
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className="p-5 flex-1 flex flex-col bg-[#fffefc]">
                <div className="mb-2 flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold text-[#0f4c3a] font-serif leading-tight flex items-center gap-2">
                            {item.nameCN}
                            {item.withEgg && (
                                <span className="flex items-center gap-1 text-[9px] bg-[#fdfbf0] text-[#8c6b48] border border-[#f0e6c5] px-1.5 py-0.5 rounded-full font-normal shadow-sm">
                                    <Egg size={8} className="fill-[#d4af37] text-[#d4af37]" /> 含半熟蛋
                                </span>
                            )}
                        </h3>
                        <p className="text-xs text-[#8c6b48] font-serif italic mt-0.5">{item.nameEN}</p>
                    </div>
                    <PriceTag price={item.price} />
                </div>
                {item.desc && (
                    <p className="text-xs text-stone-500 mt-2 leading-relaxed border-l-2 border-[#d4af37]/30 pl-2">
                        {item.desc}
                    </p>
                )}
            </div>
        </div>
    );
};

export default GalleryCard;
