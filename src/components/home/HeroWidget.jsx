import { useState } from "react";
import { ChevronDown, Calendar, X } from "lucide-react";

const holidaySchedule = [
    {
        label: "即日起 - 初四 (2月20日)",
        description: "🧧 照常营业 (Open)",
        color: "green", // open
    },
    {
        label: "初五 (21日) - 26日",
        description: "🛑 休息 (Closed) • 27日开工",
        color: "red", // closed
    },
];

export default function CNYHeroWidget() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 mx-0 mt-2 bg-gradient-to-br from-[#8B1D1D] via-[#A02222] to-[#681212]">
            {/* 静态背景纹理 */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/oriental-tiles.png')] mix-blend-overlay"></div>

            {/* 装饰光效 */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#ffeb3b] rounded-full blur-[50px] opacity-20 pointer-events-none"></div>

            <div className="relative z-10 p-5 pb-6 flex flex-col items-center text-center">
                {/* 顶部：新春贺词 */}
                <div className="mb-4">
                    <div className="inline-flex items-center gap-2 mb-1">
                        <span className="text-2xl filter drop-shadow-md">🧧</span>
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#fdb931] font-serif text-2xl font-bold tracking-widest drop-shadow-sm">
                            新春快乐
                        </h2>
                        <span className="text-2xl filter drop-shadow-md">🧧</span>
                    </div>
                    <p className="text-[#e6cba5] text-[10px] tracking-[0.4em] font-light uppercase border-t border-[#e6cba5]/30 pt-1 mt-1">
                        Gong Xi Fa Cai • 2026
                    </p>
                </div>

                {/* 核心交互区 */}
                <div className="w-full relative flex justify-center perspective-1000 min-h-[40px]">
                    {/* 收起状态按钮 */}
                    <div
                        className={`transition-all duration-500 ease-in-out absolute top-0 left-0 right-0 flex justify-center z-20 ${isExpanded ? "opacity-0 translate-y-4 pointer-events-none scale-90" : "opacity-100 translate-y-0 scale-100"
                            }`}
                    >
                        <button
                            onClick={() => setIsExpanded(true)}
                            className="group flex items-center justify-center gap-2 bg-[#000000]/30 hover:bg-[#000000]/40 backdrop-blur-md border border-[#ffffff]/20 rounded-full px-5 py-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:border-[#ffd700]/30"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-[#ffd700] font-medium text-xs tracking-wide group-hover:text-white transition-colors">
                                照常营业至初四
                            </span>
                            <ChevronDown size={14} className="text-[#e6cba5]/70 animate-bounce mt-0.5" />
                        </button>
                    </div>

                    {/* 展开状态卡片 */}
                    <div
                        className={`transition-all duration-500 ease-in-out w-full ${isExpanded ? "opacity-100 translate-y-0 relative z-10" : "opacity-0 -translate-y-4 absolute pointer-events-none scale-95"
                            }`}
                    >
                        <div className="bg-[#000000]/20 backdrop-blur-md rounded-xl p-4 text-left border border-[#ffffff]/10 shadow-inner">
                            <div className="flex justify-between items-center mb-3 border-b border-[#e6cba5]/20 pb-2">
                                <span className="text-[#e6cba5] font-serif italic text-xs flex items-center gap-1">
                                    <Calendar size={12} /> Holiday Schedule
                                </span>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsExpanded(false);
                                    }}
                                    className="text-[#e6cba5] hover:text-white transition-colors p-1"
                                >
                                    <X size={14} />
                                </button>
                            </div>

                            <div className="space-y-4 pl-1">
                                {holidaySchedule.map((item, idx) => (
                                    <div key={idx} className="flex gap-3 group">
                                        {/* Timeline dot */}
                                        <div className="flex flex-col items-center pt-1">
                                            <div
                                                className={`w-2 h-2 rounded-full shadow-[0_0_8px_${item.color === "green" ? "#22c55e" : "#ef4444"
                                                    }] ${item.color === "green" ? "bg-green-500" : "bg-red-500"} group-hover:scale-125 transition-transform`}
                                            ></div>
                                            {idx !== holidaySchedule.length - 1 && <div className="w-[1px] h-full bg-white/10 min-h-[16px] mt-1"></div>}
                                        </div>

                                        {/* Timeline content */}
                                        <div>
                                            <h4 className={`font-bold text-sm leading-none ${item.color === "green" ? "text-white" : "text-red-300"}`}>
                                                {item.label}
                                            </h4>
                                            <p className={`text-[10px] mt-1 font-light ${item.color === "green" ? "text-white/80" : "text-red-300"}`}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* 收起提示 */}
                            <div className="mt-3 text-center border-t border-white/5 pt-2 cursor-pointer" onClick={() => setIsExpanded(false)}>
                                <span className="text-[9px] text-white/40 hover:text-white/80 transition-colors uppercase tracking-widest">
                                    Close Schedule
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
