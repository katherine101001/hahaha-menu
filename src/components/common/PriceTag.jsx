// 价格显示

export default function PriceTag({ price, small = false }) {
    return (
        <span className={`text-[#0f4c3a] font-bold font-serif ${small ? 'text-base' : 'text-lg'}`}>
            <span className="text-xs mr-0.5 font-sans font-normal">RM</span>
            {price.toFixed(2)}
        </span>
    );
}
