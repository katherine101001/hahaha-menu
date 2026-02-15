// 全屏图片查看器

import { X } from "lucide-react";
export default function ImageModal({ image, onClose, name }) {
    if (!image) return null;
    return (
        <div
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div className="relative max-w-lg w-full">
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white p-2 bg-white/10 rounded-full"
                >
                    <X size={24} />
                </button>
                <img
                    src={image}
                    alt="Preview"
                    className="w-full h-auto rounded-lg shadow-2xl border-2 border-[#d4af37]"
                    onClick={(e) => e.stopPropagation()}
                />
                <div className="mt-4 text-center">
                    <h3 className="text-white font-serif text-xl tracking-wider">{name}</h3>
                    <p className="text-white/60 text-xs mt-1">点击任意处关闭 | Tap anywhere to close</p>
                </div>
            </div>
        </div>
    );
}
