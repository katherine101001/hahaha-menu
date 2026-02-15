// 标题分割线

export default function SectionTitle({ titleCN, titleEN }) {
    return (
        <div className="flex items-center justify-center my-8 space-x-3">
            <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
            <div className="text-center">
                <h2 className="text-2xl font-serif text-[#0f4c3a] font-bold">{titleCN}</h2>
                <p className="text-[10px] text-[#8c6b48] uppercase tracking-[0.2em] font-medium mt-1">{titleEN}</p>
            </div>
            <div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
        </div>
    );
}
