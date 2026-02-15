import React from 'react';
import { Gift, Sparkles } from 'lucide-react';

export default function FreeDrinkBanner() {
    return (
        <div className="mb-6 mx-0 relative overflow-hidden rounded-xl shadow-[0_4px_20px_-8px_rgba(212,175,55,0.3)] border border-[#f0e6c5] bg-gradient-to-r from-[#fffcf7] to-[#fff9f0]">

            {/* 背景纹理 */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] mix-blend-multiply"></div>

            {/* 流光效果 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-shimmer pointer-events-none"></div>

            <div className="relative z-10 p-4 flex items-center gap-4">

                {/* Icon */}
                <div className="relative shrink-0 animate-premium-float">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f3e6c8] to-[#e6cba5] p-[1px] shadow-sm">
                        <div className="w-full h-full rounded-full bg-[#fffbf2] flex items-center justify-center shadow-inner">
                            <Gift size={22} className="text-[#b4860b] stroke-[1.5px]" />
                        </div>
                    </div>
                    <Sparkles
                        size={10}
                        className="absolute top-0 right-0 text-[#d4af37] animate-pulse-slow fill-[#d4af37]"
                    />
                </div>

                {/* 内容区 */}
                {/* 内容区 - 这里的 pr-6 是关键，预留足够的右侧呼吸空间 */}
                <div className="flex-1 flex flex-col justify-center min-w-0 pl-2 pr-6">
                    <div className="flex flex-col items-start w-full">

                        {/* 主标题区：使用 justify-between 让价格标签和标题产生自然的间距 */}
                        <div className="flex items-center justify-between w-full mb-1.5 flex-nowrap gap-4">

                            {/* 左侧：FREE DRINK */}
                            <h3 className="font-serif font-extrabold italic text-xl tracking-[0.05em] bg-gradient-to-r from-[#9f1239] via-[#be123c] to-[#9f1239] bg-clip-text text-transparent drop-shadow-sm leading-none shrink-0">
                                FREE DRINK
                            </h3>

                            {/* 右侧：价值标识 - 组合为一个整体 */}
                            <div className="flex items-center gap-2 shrink-0">
                                <div className="w-[1px] h-3 bg-[#d4af37]/30 rotate-[20deg]"></div>

                                <div className="flex items-center gap-1.5">
                                    <span className="font-serif text-[11px] text-[#b4860b]/60 line-through decoration-[#9f1239]/40 whitespace-nowrap">
                                        RM 7.90
                                    </span>
                                    <span className="px-1.5 py-[1px] bg-[#fdf2f2] border border-[#fecaca] rounded text-[9px] font-bold text-[#9f1239] uppercase tracking-wider whitespace-nowrap">
                                        FREE
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* 装饰线 */}
                        <div className="w-8 h-[1px] bg-[#d4af37]/40 mb-1.5"></div>

                        {/* 副信息 */}
                        <div className="flex flex-col gap-0.5 w-full">
                            {/* 用 items-center 确保文字对齐 */}
                            <div className="flex items-center gap-1.5">
                                <span className="text-[#5c4d26] text-[11px] font-serif italic text-[#8c6b48] whitespace-nowrap">
                                    With any Set Meal
                                </span>
                                <span className="w-[1px] h-3 bg-[#d4af37]/40 shrink-0"></span>
                                <span className="text-[#5c4d26] text-[11px] font-sans font-bold whitespace-nowrap">
                                    凡购买任何套餐
                                </span>
                            </div>

                            <div className="flex items-center gap-1 opacity-90">
                                <span className="text-[#d4af37] text-[8px]">✦</span>
                                <span className="text-[#8c7b50] text-[10px] font-serif italic truncate">
                                    Jasmine Velvet Cold Brew
                                </span>
                                <span className="text-[#8c7b50] text-[9px] scale-90 shrink-0">
                                    • 茉莉丝绒冷萃
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <style>{`
                @keyframes shimmer { 100% { transform: translateX(100%); } }
                .animate-shimmer { animation: shimmer 3s infinite cubic-bezier(0.4, 0, 0.2, 1); }
                @keyframes premium-float {
                    0%, 100% { transform: translateY(0); filter: drop-shadow(0 4px 6px rgba(180, 134, 11, 0.2)); }
                    50% { transform: translateY(-4px); filter: drop-shadow(0 8px 12px rgba(180, 134, 11, 0.4)); }
                }
                .animate-premium-float { animation: premium-float 3s ease-in-out infinite; }
                @keyframes pulse-slow { 0%, 100% { opacity: 1; } 50% { opacity: 0.85; } }
                .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
            `}</style>
        </div>
    );
}