

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-[#0f4c3a] shadow-lg border-b-2 border-[#d4af37]">
            <div className="max-w-md mx-auto px-4 py-3 flex justify-between items-center bg-[#0f4c3a]">
                <div>
                    <h1 className="text-[#d4af37] font-serif text-xl font-bold tracking-wide flex items-center gap-2">
                        HAHAHA HOJIAK
                    </h1>
                    <p className="text-[#a8cfc0] text-[10px] tracking-[0.2em] uppercase">Taste of Happiness</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#165f49] flex items-center justify-center border border-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                    <span className="text-[#d4af37] font-serif font-bold text-lg">哈</span>
                </div>
            </div>
        </header>
    );
}