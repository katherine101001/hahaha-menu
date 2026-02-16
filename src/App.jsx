// import React, { useState, useEffect } from 'react';
// // 引入了新需要的 Images 图标, 新增 Calendar 和 Clock, 🚨 新增 Gift 图标 (移除了 ArrowRight 因为不需要价格对比了)
// import { Utensils, Coffee, Home, Info, Sparkles, AlertCircle, Croissant, Star, ShieldCheck, Egg, ZoomIn, X, Leaf, Droplets, Heart, Zap, Smile, Moon, Flame, Snowflake, Images, Calendar, Clock, ChevronRight, ChevronDown, Bell, Gift } from 'lucide-react';

// import menuData from "./data/menuData.js";

// import PriceTag from "./components/common/PriceTag";
// import Header from "./components/common/Header";
// import ImageModal from './components/common/ImageModal';
// import SectionTitle from "./components/common/SectionTitle"
// import FreeDrinkBanner from "./components/home/FreeDrinkBanner"
// import CNYHeroWidget from './components/home/HeroWidget.jsx';


// import GalleryCard from './components/bread/GalleryCard.jsx';


// // 竖屏照片设计的饮料大卡片
// const HeroDrinkCard = ({ item, onImageClick }) => (
//   <div
//     className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.2)] mb-8 cursor-pointer group border border-stone-100"
//     onClick={() => onImageClick(item.image, item.nameCN)}
//   >
//     <img src={item.image} alt={item.nameCN} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
//     <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>

//     <div className="absolute inset-0 p-5 flex flex-col justify-end">
//       {item.highlight && (
//         <div className="absolute top-4 left-4 bg-gradient-to-r from-[#d4af37] to-[#eac765] text-[#0f4c3a] text-[10px] font-bold px-3 py-1.5 rounded shadow-lg uppercase flex items-center gap-1.5 tracking-wider">
//           <Flame size={12} className="text-red-600" fill="currentColor" /> {item.highlight}
//         </div>
//       )}

//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/30 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border border-white/20 z-20">
//         <ZoomIn className="text-white" size={24} />
//       </div>

//       <div className="relative z-10 flex justify-between items-end gap-2">
//         <div className="flex-1">
//           <h3 className="text-white font-serif text-2xl font-bold mb-0.5 tracking-wide drop-shadow-md">{item.nameCN}</h3>
//           <p className="text-[#d4af37] font-serif italic text-xs mb-2 opacity-90">{item.nameEN}</p>
//         </div>

//         {item.priceCold && (
//           <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-lg shrink-0 text-center shadow-inner">
//             <span className="text-sky-400 text-[8px] font-bold block mb-0.5 uppercase tracking-wider">Cold Only</span>
//             <span className="text-white font-bold text-lg leading-none font-serif">RM {item.priceCold.toFixed(2)}</span>
//           </div>
//         )}
//       </div>
//     </div>
//   </div>
// );


// // 1. 饮料组件：推荐大卡片
// const SignatureDrinkCard = ({ item }) => {
//   let Icon = Coffee;
//   if (item.nameEN.includes('Coffee') || item.nameEN.includes('Daddy') || item.nameEN.includes('Mummy')) {
//     Icon = Coffee;
//   } else if (item.nameEN.includes('Tea') || item.nameEN.includes('Milk')) {
//     Icon = Droplets;
//   }

//   return (
//     <div className="flex-shrink-0 w-40 mr-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-stone-100 relative overflow-hidden group p-4 flex flex-col justify-between min-h-[140px]">
//       <Icon className="absolute -bottom-4 -right-4 w-20 h-20 text-[#0f4c3a] opacity-5 transform rotate-12" />
//       <div className="flex justify-between items-start">
//         <div className="bg-[#d4af37] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm flex items-center gap-1">
//           <Star size={8} fill="white" /> 推荐
//         </div>
//       </div>
//       <div className="relative z-10 mt-3">
//         <h4 className="text-[#0f4c3a] font-serif text-lg font-bold leading-tight mb-1 tracking-wide">{item.nameCN}</h4>
//         <p className="text-stone-400 text-[10px] font-sans tracking-wider leading-snug uppercase">{item.nameEN}</p>
//       </div>
//       <div className="relative z-10 mt-4 pt-3 border-t border-stone-100 flex gap-2">
//         {item.priceHot && !item.displayColdOnly && (
//           <div className="flex flex-col text-stone-700">
//             <span className="text-[8px] opacity-60 uppercase font-bold text-rose-600">Hot</span>
//             <span className="font-bold text-sm">RM {item.priceHot.toFixed(2)}</span>
//           </div>
//         )}
//         {item.priceCold && (
//           <div className="flex flex-col text-stone-700">
//             <span className="text-[8px] opacity-60 uppercase font-bold text-sky-600">Cold</span>
//             <span className="font-bold text-sm">RM {item.priceCold.toFixed(2)}</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // 2. 饮料组件：列表行 
// const ModernDrinkRow = ({ item }) => (
//   <div className="flex items-center justify-between py-3 px-2 border-b border-dashed border-stone-200 last:border-0 hover:bg-stone-50 transition-colors">
//     <div className="flex-1 pr-2">
//       <div className="flex items-center gap-2">
//         <span className="text-[#2d2d2d] font-bold text-sm">{item.nameCN}</span>
//         {item.highlight && <span className="text-[8px] border border-[#d4af37] text-[#8c6b48] px-1 rounded uppercase">{item.highlight}</span>}
//       </div>
//       <div className="text-[10px] text-stone-400 font-serif italic">{item.nameEN}</div>
//       {item.desc && <div className="text-[9px] text-stone-400 mt-0.5">{item.desc}</div>}
//     </div>
//     <div className="flex items-end gap-3 text-sm">
//       {item.priceHot && (
//         <div className="flex flex-col items-end">
//           <span className="text-[8px] text-rose-500 font-bold mb-0.5">热</span>
//           <span className="font-serif font-bold text-[#0f4c3a]">{item.priceHot.toFixed(2)}</span>
//         </div>
//       )}
//       {item.priceHot && item.priceCold && (
//         <div className="w-[1px] h-6 bg-stone-200"></div>
//       )}
//       {item.priceCold && (
//         <div className="flex flex-col items-end">
//           <span className="text-[8px] text-sky-500 font-bold mb-0.5">冷</span>
//           <span className="font-serif font-bold text-[#0f4c3a]">{item.priceCold.toFixed(2)}</span>
//         </div>
//       )}
//     </div>
//   </div>
// );

// // 核心卡片组件 (PremiumCard)
// const PremiumCard = ({ item, onImageClick }) => {
//   const isCNY = item.tag && (item.tag.includes('CNY') || item.tag.includes('新春') || item.tag.includes('Ong') || item.tag.includes('Huat'));
//   return (
//     <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-stone-100 mb-6 flex flex-col relative group">
//       <div
//         className="relative h-56 w-full overflow-hidden cursor-pointer"
//         onClick={() => onImageClick(item.image, item.nameCN)}
//       >
//         <img src={item.image} alt={item.nameEN} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/30 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border border-white/20">
//           <ZoomIn className="text-white" size={24} />
//         </div>
//         {item.tag && (
//           <div className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1
//             ${isCNY ? 'bg-red-600 text-[#ffeb3b]' : 'bg-[#d4af37] text-[#0f4c3a]'}`}>
//             <Star size={10} fill={isCNY ? '#ffeb3b' : '#0f4c3a'} /> {item.tag}
//           </div>
//         )}
//         {item.badge && (
//           <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md border border-[#ffeb3b]">
//             {item.badge}
//           </div>
//         )}
//         <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg flex items-center">
//           <PriceTag price={item.price} />
//         </div>
//       </div>
//       <div className={`p-5 flex-1 flex flex-col bg-[#fffefc] ${isCNY ? 'border-b-4 border-red-600' : ''}`}>
//         <div className="mb-2">
//           <h3 className="text-xl font-bold text-[#0f4c3a] font-serif leading-tight mb-1">{item.nameCN}</h3>
//           <p className="text-xs text-[#8c6b48] font-serif italic">{item.nameEN}</p>
//         </div>
//         {item.descCN && (
//           <p className="text-xs text-stone-500 mb-3 leading-relaxed border-l-2 border-[#d4af37]/30 pl-2">
//             {item.descCN}
//           </p>
//         )}
//         {(item.ingredientsCN) && (
//           <div className="mb-3 text-[10px] text-stone-500 bg-stone-50 p-2 rounded border border-stone-100">
//             <span className="font-bold text-stone-600 block mb-0.5">内含 Includes:</span>
//             {item.ingredientsCN}
//           </div>
//         )}
//         {item.options && (
//           <div className="mb-3">
//             <p className="text-[10px] font-bold text-stone-400 uppercase mb-1">可选酱料 Sauce Options</p>
//             <div className="flex flex-wrap gap-1">
//               {item.options.map((opt, idx) => (
//                 <span key={idx} className="text-[10px] border border-stone-200 text-stone-600 px-2 py-0.5 rounded-full">
//                   {opt}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}
//         {item.upsell && (
//           <div className="mt-auto pt-3 border-t border-dashed border-[#d4af37]/30">
//             <div className="flex justify-between items-center bg-[#fdfbf0] p-2 rounded-lg border border-[#f0e6c5]">
//               <div className="flex items-center gap-2">
//                 <Sparkles size={14} className="text-[#d4af37]" />
//                 <div>
//                   <p className="text-xs font-bold text-[#5c4d26]">{item.upsell.labelCN}</p>
//                   <p className="text-[9px] text-[#8c7b50]">{item.upsell.labelEN}</p>
//                 </div>
//               </div>
//               <div className="text-xs font-bold text-[#d4af37] bg-white px-2 py-1 rounded shadow-sm">
//                 + RM {item.upsell.price.toFixed(2)}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // 紧凑卡片组件 (CompactCard)
// const CompactCard = ({ item, type = 'bread', onImageClick }) => (
//   <div className="flex bg-white p-3 rounded-xl shadow-sm border border-stone-100 mb-3 items-center gap-3 relative overflow-hidden">
//     <div
//       className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-stone-100 relative cursor-pointer group"
//       onClick={() => onImageClick(item.image, item.nameCN)}
//     >
//       <img src={item.image} alt={item.nameEN} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-90" />
//       <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//         <ZoomIn className="text-white drop-shadow-md" size={16} />
//       </div>
//       {item.isPremiumEgg && (
//         <div className="absolute top-0 right-0 bg-[#d4af37] text-white p-1 rounded-bl-lg shadow-sm z-10">
//           <ShieldCheck size={12} />
//         </div>
//       )}
//     </div>
//     <div className="flex-1 min-w-0">
//       <h4 className="text-base font-bold text-[#2d2d2d] truncate flex items-center gap-2">
//         {item.nameCN}
//         {item.withEgg && (
//           <span className="flex items-center gap-1 text-[9px] bg-[#fdfbf0] text-[#8c6b48] border border-[#f0e6c5] px-1.5 py-0.5 rounded-full font-normal">
//             <Egg size={8} className="fill-[#d4af37] text-[#d4af37]" /> 含半熟蛋
//           </span>
//         )}
//       </h4>
//       <p className="text-[10px] text-stone-500 truncate mb-1 font-serif italic">{item.nameEN}</p>
//       {item.desc && <p className="text-[10px] text-stone-400 line-clamp-1 mb-1">{item.desc}</p>}
//       {item.highlight && (
//         <span className="inline-block bg-[#0f4c3a] text-white text-[9px] px-1.5 py-0.5 rounded-sm mb-1">
//           {item.highlight}
//         </span>
//       )}
//       <div className="flex items-end justify-between mt-1">
//         {item.isDrink ? (
//           <div className="flex items-center gap-2">
//             {item.priceHot && <div className="text-xs text-stone-600"><span className="text-rose-600 font-bold">H</span> {item.priceHot.toFixed(2)}</div>}
//             {item.priceCold && <div className="text-xs text-stone-600"><span className="text-sky-600 font-bold">C</span> {item.priceCold.toFixed(2)}</div>}
//           </div>
//         ) : (
//           <PriceTag price={item.price} small />
//         )}
//       </div>
//     </div>
//   </div>
// );

// // 底部导航按钮
// const TabButton = ({ active, icon: Icon, labelCN, labelEN, onClick }) => (
//   <button
//     onClick={onClick}
//     className={`flex flex-col items-center justify-center py-2 px-1 w-full transition-all duration-300 relative
//       ${active ? 'text-[#0f4c3a]' : 'text-stone-400 hover:text-stone-600'}
//     `}
//   >
//     {active && (
//       <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#d4af37] rounded-b-lg shadow-sm"></span>
//     )}
//     <Icon size={20} className={active ? "stroke-[2.5px]" : "stroke-1.5"} />
//     <span className={`text-[10px] mt-1 leading-none ${active ? 'font-bold' : 'font-medium'}`}>{labelCN}</span>
//     <span className="text-[8px] scale-90 leading-none opacity-80 mt-0.5 font-serif">{labelEN}</span>
//   </button>
// );

// // 页脚
// const FooterDisclaimer = () => (
//   <div className="bg-[#f2f0e9] px-6 py-8 text-center text-stone-500 text-[10px] pb-28 mt-4">
//     <div className="inline-block border border-[#d4af37] rounded-full px-4 py-1 mb-4 text-[#8c6b48]">
//       <span className="font-serif italic">HAHAHA HOJIAK Since 2018</span>
//     </div>
//     <div className="flex flex-col gap-1 opacity-80">
//       <p>所有价格不包含 10% 服务费 | All prices are subject to 10% Service Charge.</p>
//       <p>打包外带将收取额外费用 | Additional charges apply for takeaway packaging.</p>
//       <p>图片仅供参考 | Images are for illustration purposes only.</p>
//     </div>
//   </div>
// );

// // --- 主应用组件 ---

// export default function App() {
//   const [activeTab, setActiveTab] = useState('home');
//   const [previewImage, setPreviewImage] = useState(null);
//   const [previewName, setPreviewName] = useState('');

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [activeTab]);

//   const handleImageClick = (imgSrc, imgName) => {
//     setPreviewImage(imgSrc);
//     setPreviewName(imgName);
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'home':
//         return (
//           <div className="animate-fade-in px-4 pt-4">

//             <CNYHeroWidget />
//             {/* 🚨 新增：免费饮料 Banner */}
//             <FreeDrinkBanner />

//             {menuData.highlights.map(item => (
//               <PremiumCard key={item.id} item={item} onImageClick={handleImageClick} />
//             ))}
//           </div>
//         );
//       case 'food':
//         return (
//           <div className="px-4 pt-2 animate-fade-in">
//             <SectionTitle titleCN="经典主食" titleEN="A LA CARTE MAINS" />
//             <div className="grid gap-2">
//               {menuData.food.map(item => (
//                 <PremiumCard key={item.id} item={item} onImageClick={handleImageClick} />
//               ))}
//             </div>
//           </div>
//         );
//       case 'bread':
//         return (
//           <div className="px-4 pt-2 animate-fade-in">
//             <SectionTitle titleCN="南洋面包系列" titleEN="NANYANG BREAD SERIES" />
//             <div className="bg-[#fffbf0] border border-[#f0e6c5] p-3 rounded-lg mb-6 flex flex-col gap-3">
//               <div className="flex items-start gap-3">
//                 <div className="bg-[#d4af37] text-white rounded-full p-1 mt-0.5 shrink-0">
//                   <Star size={12} />
//                 </div>
//                 <div>
//                   <h4 className="text-[#5c4d26] font-bold text-sm">自制 Kaya (Homemade)</h4>
//                   <p className="text-[#8c7b50] text-xs">慢火熬制，不含防腐剂。</p>
//                 </div>
//               </div>
//               <div className="w-full h-[1px] bg-[#f0e6c5] border-t border-dashed border-[#d4af37]/30"></div>
//               <div className="flex items-start gap-3">
//                 <div className="bg-[#d4af37] text-white rounded-full p-1 mt-0.5 shrink-0">
//                   <Star size={12} />
//                 </div>
//                 <div>
//                   <h4 className="text-[#5c4d26] font-bold text-sm">纯花生酱 (Pure Peanut Butter)</h4>
//                   <p className="text-[#8c7b50] text-xs">自制纯正花生酱，<span className="font-bold">无反式脂肪 (Zero Trans Fat)</span>，健康香浓。</p>
//                 </div>
//               </div>
//             </div>
//             {menuData.bread.map(cat => (
//               <div key={cat.id} className="mb-8">
//                 <div className="flex items-center gap-2 mb-3 px-1">
//                   <div className="w-1 h-4 bg-[#0f4c3a] rounded-full"></div>
//                   <h3 className="text-[#0f4c3a] font-bold text-base">{cat.categoryCN}</h3>
//                   <span className="text-xs text-stone-400 font-serif italic">{cat.categoryEN}</span>
//                 </div>
//                 {cat.items.map(item => {
//                   if (item.images && item.images.length > 0) {
//                     return <GalleryCard key={item.id} item={item} onImageClick={handleImageClick} />;
//                   }
//                   return <CompactCard key={item.id} item={item} type="bread" onImageClick={handleImageClick} />;
//                 })}
//               </div>
//             ))}
//           </div>
//         );
//       case 'drinks':
//         // 分离出有图片的推荐饮料和无图片的推荐饮料
//         const allRecommended = menuData.drinksCategories.flatMap(cat => cat.items.filter(i => i.recommended));
//         const heroDrinks = allRecommended.filter(i => i.image);
//         const standardRecommended = allRecommended.filter(i => !i.image);

//         return (
//           <div className="px-4 pt-2 animate-fade-in pb-10">
//             <SectionTitle titleCN="HAHAHA 冰室" titleEN="HAHAHA BING SUTT" />

//             {/* 首屏大图展示：渲染唯一的竖向特调照片 (Daddy) */}
//             {heroDrinks.map((item, idx) => (
//               <HeroDrinkCard key={`hero-${idx}`} item={item} onImageClick={handleImageClick} />
//             ))}

//             {/* Top Picks - 横向滚动保留 (给其他没照片的饮料) */}
//             {standardRecommended.length > 0 && (
//               <div className="mb-8">
//                 <div className="flex items-center gap-2 mb-3">
//                   <Star size={16} className="text-[#d4af37]" fill="#d4af37" />
//                   <h3 className="text-[#0f4c3a] font-bold text-base">店长私房推介</h3>
//                   <span className="text-xs text-stone-400 font-serif italic">Must Try!</span>
//                 </div>
//                 <div className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
//                   {standardRecommended.map((item, idx) => (
//                     <SignatureDrinkCard key={idx} item={item} />
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* 常规列表 */}
//             {menuData.drinksCategories.map((category) => (
//               <div key={category.id} className="mb-8">
//                 <div className="flex items-center gap-2 mb-3 px-1">
//                   <div className="w-1 h-4 bg-[#0f4c3a] rounded-full"></div>
//                   <h3 className="text-[#0f4c3a] font-bold text-base">{category.nameCN}</h3>
//                   <span className="text-xs text-stone-400 font-serif italic">{category.nameEN}</span>
//                 </div>

//                 {(category.noteCN || category.noteEN) && (
//                   <div className="bg-[#fffbf0] text-[#8c6b48] text-[10px] px-3 py-2 border border-[#f0e6c5] rounded-lg flex items-center gap-2 mb-3">
//                     <Info size={14} className="shrink-0 text-[#d4af37]" />
//                     <div className="flex flex-col items-start">
//                       <span className="font-bold text-left">{category.noteCN}</span>
//                       <span className="opacity-80 font-serif italic scale-90 origin-left text-left">
//                         {category.noteEN}
//                       </span>
//                     </div>
//                   </div>
//                 )}

//                 <div className="bg-white rounded-xl border border-stone-100 p-2 shadow-sm">
//                   {/* 只渲染没有被抽离出去做主打的常规饮料 */}
//                   {category.items.filter(item => !item.image).map((item, idx) => (
//                     <ModernDrinkRow key={idx} item={item} />
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f9f8f4] font-sans text-slate-800 pb-16 max-w-md mx-auto shadow-2xl relative border-x border-stone-200">
//       <Header />
//       <ImageModal
//         image={previewImage}
//         name={previewName}
//         onClose={() => setPreviewImage(null)}
//       />
//       <main className="min-h-[80vh] relative z-10">
//         <div className="fixed top-20 left-0 w-32 h-32 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-3xl opacity-5 pointer-events-none"></div>
//         <div className="fixed bottom-40 right-0 w-40 h-40 bg-[#0f4c3a] rounded-full mix-blend-multiply filter blur-3xl opacity-5 pointer-events-none"></div>
//         {renderContent()}
//       </main>
//       <FooterDisclaimer />
//       <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] z-50 max-w-md mx-auto pb-safe">
//         <div className="flex justify-between items-end px-2 pb-1">
//           <TabButton active={activeTab === 'home'} onClick={() => setActiveTab('home')} icon={Home} labelCN="套餐" labelEN="Sets" />
//           <TabButton active={activeTab === 'food'} onClick={() => setActiveTab('food')} icon={Utensils} labelCN="主食" labelEN="Mains" />
//           <TabButton active={activeTab === 'bread'} onClick={() => setActiveTab('bread')} icon={Croissant} labelCN="面包" labelEN="Bread" />
//           <TabButton active={activeTab === 'drinks'} onClick={() => setActiveTab('drinks')} icon={Coffee} labelCN="饮料" labelEN="Drinks" />
//         </div>
//       </nav>
//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in {
//           animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//         }
//         .pb-safe {
//           padding-bottom: env(safe-area-inset-bottom, 20px);
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//             display: none;
//         }
//         .scrollbar-hide {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//         }
//         @keyframes shimmer {
//           100% { transform: translateX(100%); }
//         }
//         .animate-shimmer {
//           animation: shimmer 3s infinite cubic-bezier(0.4, 0, 0.2, 1);
//         }
//         @keyframes premium-float {
//           0%, 100% { transform: translateY(0); filter: drop-shadow(0 4px 6px rgba(180, 134, 11, 0.2)); }
//           50% { transform: translateY(-4px); filter: drop-shadow(0 8px 12px rgba(180, 134, 11, 0.4)); }
//         }
//         .animate-premium-float {
//           animation: premium-float 3s ease-in-out infinite;
//         }
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.85; }
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 3s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
// 1. 引入所有需要的图标，包含新增的 Plus, Soup, Layers (用于面包)
import {
  Utensils, Coffee, Home, Info, Sparkles, AlertCircle, Croissant,
  Star, ShieldCheck, Egg, ZoomIn, X, Leaf, Droplets, Heart, Zap,
  Smile, Moon, Flame, Snowflake, Images, Calendar, Clock,
  ChevronRight, ChevronDown, Bell, Gift, Plus, Soup, Layers
} from 'lucide-react';

// 假设你的目录结构没变，保留原本的引用
import menuData from "./data/menuData.js";
import PriceTag from "./components/common/PriceTag";
import Header from "./components/common/Header";
import ImageModal from './components/common/ImageModal';
import SectionTitle from "./components/common/SectionTitle"
import FreeDrinkBanner from "./components/home/FreeDrinkBanner"
import CNYHeroWidget from './components/home/HeroWidget.jsx';
import GalleryCard from './components/bread/GalleryCard.jsx';

// --- 组件定义开始 ---

// 1. 竖屏照片设计的饮料大卡片 (HeroDrinkCard)
const HeroDrinkCard = ({ item, onImageClick }) => (
  <div
    className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.2)] mb-8 cursor-pointer group border border-stone-100"
    onClick={() => onImageClick(item.image, item.nameCN)}
  >
    <img src={item.image} alt={item.nameCN} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>

    <div className="absolute inset-0 p-5 flex flex-col justify-end">
      {item.highlight && (
        <div className="absolute top-4 left-4 bg-gradient-to-r from-[#d4af37] to-[#eac765] text-[#0f4c3a] text-[10px] font-bold px-3 py-1.5 rounded shadow-lg uppercase flex items-center gap-1.5 tracking-wider">
          <Flame size={12} className="text-red-600" fill="currentColor" /> {item.highlight}
        </div>
      )}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/30 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border border-white/20 z-20">
        <ZoomIn className="text-white" size={24} />
      </div>

      <div className="relative z-10 flex justify-between items-end gap-2">
        <div className="flex-1">
          <h3 className="text-white font-serif text-2xl font-bold mb-0.5 tracking-wide drop-shadow-md">{item.nameCN}</h3>
          <p className="text-[#d4af37] font-serif italic text-xs mb-2 opacity-90">{item.nameEN}</p>
        </div>

        {item.priceCold && (
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-lg shrink-0 text-center shadow-inner">
            <span className="text-sky-400 text-[8px] font-bold block mb-0.5 uppercase tracking-wider">Cold Only</span>
            <span className="text-white font-bold text-lg leading-none font-serif">RM {item.priceCold.toFixed(2)}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

// 2. 饮料组件：推荐大卡片 (SignatureDrinkCard)
const SignatureDrinkCard = ({ item }) => {
  let Icon = Coffee;
  if (item.nameEN.includes('Coffee') || item.nameEN.includes('Daddy') || item.nameEN.includes('Mummy')) {
    Icon = Coffee;
  } else if (item.nameEN.includes('Tea') || item.nameEN.includes('Milk')) {
    Icon = Droplets;
  }

  return (
    <div className="flex-shrink-0 w-40 mr-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-stone-100 relative overflow-hidden group p-4 flex flex-col justify-between min-h-[140px]">
      <Icon className="absolute -bottom-4 -right-4 w-20 h-20 text-[#0f4c3a] opacity-5 transform rotate-12" />
      <div className="flex justify-between items-start">
        <div className="bg-[#d4af37] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm flex items-center gap-1">
          <Star size={8} fill="white" /> 推荐
        </div>
      </div>
      <div className="relative z-10 mt-3">
        <h4 className="text-[#0f4c3a] font-serif text-lg font-bold leading-tight mb-1 tracking-wide">{item.nameCN}</h4>
        <p className="text-stone-400 text-[10px] font-sans tracking-wider leading-snug uppercase">{item.nameEN}</p>
      </div>
      <div className="relative z-10 mt-4 pt-3 border-t border-stone-100 flex gap-2">
        {item.priceHot && !item.displayColdOnly && (
          <div className="flex flex-col text-stone-700">
            <span className="text-[8px] opacity-60 uppercase font-bold text-rose-600">Hot</span>
            <span className="font-bold text-sm">RM {item.priceHot.toFixed(2)}</span>
          </div>
        )}
        {item.priceCold && (
          <div className="flex flex-col text-stone-700">
            <span className="text-[8px] opacity-60 uppercase font-bold text-sky-600">Cold</span>
            <span className="font-bold text-sm">RM {item.priceCold.toFixed(2)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

// 3. 饮料组件：列表行 (ModernDrinkRow)
const ModernDrinkRow = ({ item }) => (
  <div className="flex items-center justify-between py-3 px-2 border-b border-dashed border-stone-200 last:border-0 hover:bg-stone-50 transition-colors">
    <div className="flex-1 pr-2">
      <div className="flex items-center gap-2">
        <span className="text-[#2d2d2d] font-bold text-sm">{item.nameCN}</span>
        {item.highlight && <span className="text-[8px] border border-[#d4af37] text-[#8c6b48] px-1 rounded uppercase">{item.highlight}</span>}
      </div>
      <div className="text-[10px] text-stone-400 font-serif italic">{item.nameEN}</div>
      {item.desc && <div className="text-[9px] text-stone-400 mt-0.5">{item.desc}</div>}
    </div>
    <div className="flex items-end gap-3 text-sm">
      {item.priceHot && (
        <div className="flex flex-col items-end">
          <span className="text-[8px] text-rose-500 font-bold mb-0.5">热</span>
          <span className="font-serif font-bold text-[#0f4c3a]">{item.priceHot.toFixed(2)}</span>
        </div>
      )}
      {item.priceHot && item.priceCold && (
        <div className="w-[1px] h-6 bg-stone-200"></div>
      )}
      {item.priceCold && (
        <div className="flex flex-col items-end">
          <span className="text-[8px] text-sky-500 font-bold mb-0.5">冷</span>
          <span className="font-serif font-bold text-[#0f4c3a]">{item.priceCold.toFixed(2)}</span>
        </div>
      )}
    </div>
  </div>
);

// 4. 核心卡片组件 (PremiumCard) - 🚨 重点修改：增加了套餐可视化模块
const PremiumCard = ({ item, onImageClick }) => {
  const isCNY = item.tag && (item.tag.includes('CNY') || item.tag.includes('新春') || item.tag.includes('Ong') || item.tag.includes('Huat'));

  // // 智能判断是否为套餐：通过 tag 包含 "Set" 或 "套餐"，或者数据里有 isSet 字段
  // const isSetMeal = item.isSet || (item.tag && (item.tag.includes('Set') || item.tag.includes('套餐')));
  const isSetMeal = true;
  // 或者
  //const isSetMeal = item.tag.includes('Special') || item.tag.includes('Must Try') || item.isSet;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-[0_8px_25px_-10px_rgba(0,0,0,0.1)] border border-stone-100 mb-6 flex flex-col relative group transition-all duration-300 hover:-translate-y-1">
      {/* 图片部分 */}
      <div
        className="relative h-60 w-full overflow-hidden cursor-pointer"
        onClick={() => onImageClick(item.image, item.nameCN)}
      >
        <img src={item.image} alt={item.nameEN} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80"></div>

        {/* 点击放大提示 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/30 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border border-white/20">
          <ZoomIn className="text-white" size={24} />
        </div>

        {/* 标签 */}
        {item.tag && (
          <div className={`absolute top-3 left-3 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-md
            ${isCNY ? 'bg-red-600/90 text-[#ffeb3b]' : 'bg-[#d4af37]/90 text-white'}`}>
            <Star size={10} fill={isCNY ? '#ffeb3b' : 'white'} /> {item.tag}
          </div>
        )}

        {item.badge && (
          <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md border border-[#ffeb3b]">
            {item.badge}
          </div>
        )}

        {/* 价格浮标 */}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg flex items-center border border-stone-100">
          <PriceTag price={item.price} />
        </div>
      </div>

      {/* 内容部分 */}
      <div className={`p-5 flex-1 flex flex-col bg-[#fffefc] ${isCNY ? 'border-b-4 border-red-600' : ''}`}>
        <div className="mb-2">
          <h3 className="text-xl font-bold text-[#0f4c3a] font-serif leading-tight mb-1 flex items-center justify-between">
            {item.nameCN}
            {isSetMeal && <Gift size={18} className="text-[#d4af37]" />}
          </h3>
          <p className="text-xs text-[#8c6b48] font-serif italic">{item.nameEN}</p>
        </div>

        {/* 🚨 套餐可视化区域 (Set Meal Visualization) 🚨 */}
        {isSetMeal ? (
          <div className="mb-4 mt-2 bg-[#fdfbf0] border border-[#f0e6c5] rounded-xl p-3 relative overflow-hidden">
            {/* 装饰水印 */}
            <div className="absolute -right-2 -bottom-4 text-[#d4af37] opacity-10 transform -rotate-12">
              <Utensils size={60} />
            </div>

            <p className="text-[9px] font-bold text-[#d4af37] uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Sparkles size={10} fill="#d4af37" /> 套餐包含 Includes
            </p>

            {/* 视觉公式：主食 + 汤 + 面包 */}
            <div className="flex items-center justify-between gap-1 relative z-10">

              {/* 1. 主食 */}
              <div className="flex flex-col items-center justify-center flex-1 bg-white border border-[#eaddb6] rounded-lg py-2 px-1 shadow-sm h-16">
                <Utensils size={18} className="text-[#0f4c3a] mb-1" />
                <span className="text-[9px] font-bold text-stone-600">主食</span>
                <span className="text-[7px] text-stone-400 scale-90">Main Dish</span>
              </div>

              <Plus size={12} className="text-[#d4af37] shrink-0" />

              {/* 2. 红豆汤 */}
              <div className="flex flex-col items-center justify-center flex-1 bg-white border border-red-200 rounded-lg py-2 px-1 shadow-sm h-16">
                <div className="relative">
                  <Soup size={18} className="text-red-600 mb-1" />
                  <Flame size={8} className="absolute -top-1 -right-1 text-red-500 fill-red-500 animate-pulse" />
                </div>
                <span className="text-[9px] font-bold text-[#7f1d1d]">红豆汤</span>
                <span className="text-[7px] text-red-400 scale-90">Red Bean</span>
              </div>

              <Plus size={12} className="text-[#d4af37] shrink-0" />

              {/* 3. Hojiak 蛋治 */}
              <div className="flex flex-col items-center justify-center flex-1 bg-white border border-orange-200 rounded-lg py-2 px-1 shadow-sm h-16">
                <div className="relative">
                  <Layers size={18} className="text-orange-600 mb-1" />
                  <Egg size={8} className="absolute -top-1 -right-1 text-orange-500 fill-orange-500" />
                </div>
                <span className="text-[9px] font-bold text-[#7c2d12]">蛋治面包</span>
                <span className="text-[7px] text-orange-400 scale-90">Hojiak Bread</span>
              </div>
            </div>
          </div>
        ) : (
          /* 非套餐显示普通描述 */
          item.descCN && (
            <p className="text-xs text-stone-500 mb-3 leading-relaxed border-l-2 border-[#d4af37]/30 pl-2">
              {item.descCN}
            </p>
          )
        )}

        {(item.ingredientsCN && !isSetMeal) && (
          <div className="mb-3 text-[10px] text-stone-500 bg-stone-50 p-2 rounded border border-stone-100">
            <span className="font-bold text-stone-600 block mb-0.5">内含 Includes:</span>
            {item.ingredientsCN}
          </div>
        )}

        {item.options && (
          <div className="mb-3">
            <p className="text-[10px] font-bold text-stone-400 uppercase mb-1">可选酱料 Sauce Options</p>
            <div className="flex flex-wrap gap-1">
              {item.options.map((opt, idx) => (
                <span key={idx} className="text-[10px] border border-stone-200 text-stone-600 px-2 py-0.5 rounded-full">
                  {opt}
                </span>
              ))}
            </div>
          </div>
        )}

        {item.upsell && (
          <div className="mt-auto pt-3 border-t border-dashed border-[#d4af37]/30">
            <div className="flex justify-between items-center bg-[#fdfbf0] p-2 rounded-lg border border-[#f0e6c5]">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-[#d4af37]" />
                <div>
                  <p className="text-xs font-bold text-[#5c4d26]">{item.upsell.labelCN}</p>
                  <p className="text-[9px] text-[#8c7b50]">{item.upsell.labelEN}</p>
                </div>
              </div>
              <div className="text-xs font-bold text-[#d4af37] bg-white px-2 py-1 rounded shadow-sm">
                + RM {item.upsell.price.toFixed(2)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// 5. 紧凑卡片组件 (CompactCard)
const CompactCard = ({ item, type = 'bread', onImageClick }) => (
  <div className="flex bg-white p-3 rounded-xl shadow-sm border border-stone-100 mb-3 items-center gap-3 relative overflow-hidden">
    <div
      className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-stone-100 relative cursor-pointer group"
      onClick={() => onImageClick(item.image, item.nameCN)}
    >
      <img src={item.image} alt={item.nameEN} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-90" />
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <ZoomIn className="text-white drop-shadow-md" size={16} />
      </div>
      {item.isPremiumEgg && (
        <div className="absolute top-0 right-0 bg-[#d4af37] text-white p-1 rounded-bl-lg shadow-sm z-10">
          <ShieldCheck size={12} />
        </div>
      )}
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="text-base font-bold text-[#2d2d2d] truncate flex items-center gap-2">
        {item.nameCN}
        {item.withEgg && (
          <span className="flex items-center gap-1 text-[9px] bg-[#fdfbf0] text-[#8c6b48] border border-[#f0e6c5] px-1.5 py-0.5 rounded-full font-normal">
            <Egg size={8} className="fill-[#d4af37] text-[#d4af37]" /> 含半熟蛋
          </span>
        )}
      </h4>
      <p className="text-[10px] text-stone-500 truncate mb-1 font-serif italic">{item.nameEN}</p>
      {item.desc && <p className="text-[10px] text-stone-400 line-clamp-1 mb-1">{item.desc}</p>}
      {item.highlight && (
        <span className="inline-block bg-[#0f4c3a] text-white text-[9px] px-1.5 py-0.5 rounded-sm mb-1">
          {item.highlight}
        </span>
      )}
      <div className="flex items-end justify-between mt-1">
        {item.isDrink ? (
          <div className="flex items-center gap-2">
            {item.priceHot && <div className="text-xs text-stone-600"><span className="text-rose-600 font-bold">H</span> {item.priceHot.toFixed(2)}</div>}
            {item.priceCold && <div className="text-xs text-stone-600"><span className="text-sky-600 font-bold">C</span> {item.priceCold.toFixed(2)}</div>}
          </div>
        ) : (
          <PriceTag price={item.price} small />
        )}
      </div>
    </div>
  </div>
);

// 6. 底部导航按钮 (TabButton)
const TabButton = ({ active, icon: Icon, labelCN, labelEN, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center py-2 px-1 w-full transition-all duration-300 relative
      ${active ? 'text-[#0f4c3a]' : 'text-stone-400 hover:text-stone-600'}
    `}
  >
    {active && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#d4af37] rounded-b-lg shadow-sm"></span>
    )}
    <Icon size={20} className={active ? "stroke-[2.5px]" : "stroke-1.5"} />
    <span className={`text-[10px] mt-1 leading-none ${active ? 'font-bold' : 'font-medium'}`}>{labelCN}</span>
    <span className="text-[8px] scale-90 leading-none opacity-80 mt-0.5 font-serif">{labelEN}</span>
  </button>
);

// 7. 页脚 (FooterDisclaimer)
const FooterDisclaimer = () => (
  <div className="bg-[#f2f0e9] px-6 py-8 text-center text-stone-500 text-[10px] pb-28 mt-4">
    <div className="inline-block border border-[#d4af37] rounded-full px-4 py-1 mb-4 text-[#8c6b48]">
      <span className="font-serif italic">HAHAHA HOJIAK Since 2018</span>
    </div>
    <div className="flex flex-col gap-1 opacity-80">
      <p>所有价格不包含 10% 服务费 | All prices are subject to 10% Service Charge.</p>
      <p>打包外带将收取额外费用 | Additional charges apply for takeaway packaging.</p>
      <p>图片仅供参考 | Images are for illustration purposes only.</p>
    </div>
  </div>
);

// --- 主应用组件 (App) ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [previewImage, setPreviewImage] = useState(null);
  const [previewName, setPreviewName] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const handleImageClick = (imgSrc, imgName) => {
    setPreviewImage(imgSrc);
    setPreviewName(imgName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="animate-fade-in px-4 pt-4">

            <CNYHeroWidget />
            <FreeDrinkBanner />

            {menuData.highlights.map(item => (
              <PremiumCard key={item.id} item={item} onImageClick={handleImageClick} />
            ))}
          </div>
        );
      case 'food':
        return (
          <div className="px-4 pt-2 animate-fade-in">
            <SectionTitle titleCN="经典主食" titleEN="A LA CARTE MAINS" />
            <div className="grid gap-2">
              {menuData.food.map(item => (
                <PremiumCard key={item.id} item={item} onImageClick={handleImageClick} />
              ))}
            </div>
          </div>
        );
      case 'bread':
        return (
          <div className="px-4 pt-2 animate-fade-in">
            <SectionTitle titleCN="南洋面包系列" titleEN="NANYANG BREAD SERIES" />
            <div className="bg-[#fffbf0] border border-[#f0e6c5] p-3 rounded-lg mb-6 flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <div className="bg-[#d4af37] text-white rounded-full p-1 mt-0.5 shrink-0">
                  <Star size={12} />
                </div>
                <div>
                  <h4 className="text-[#5c4d26] font-bold text-sm">自制 Kaya (Homemade)</h4>
                  <p className="text-[#8c7b50] text-xs">慢火熬制，不含防腐剂。</p>
                </div>
              </div>
              <div className="w-full h-[1px] bg-[#f0e6c5] border-t border-dashed border-[#d4af37]/30"></div>
              <div className="flex items-start gap-3">
                <div className="bg-[#d4af37] text-white rounded-full p-1 mt-0.5 shrink-0">
                  <Star size={12} />
                </div>
                <div>
                  <h4 className="text-[#5c4d26] font-bold text-sm">纯花生酱 (Pure Peanut Butter)</h4>
                  <p className="text-[#8c7b50] text-xs">自制纯正花生酱，<span className="font-bold">无反式脂肪 (Zero Trans Fat)</span>，健康香浓。</p>
                </div>
              </div>
            </div>
            {menuData.bread.map(cat => (
              <div key={cat.id} className="mb-8">
                <div className="flex items-center gap-2 mb-3 px-1">
                  <div className="w-1 h-4 bg-[#0f4c3a] rounded-full"></div>
                  <h3 className="text-[#0f4c3a] font-bold text-base">{cat.categoryCN}</h3>
                  <span className="text-xs text-stone-400 font-serif italic">{cat.categoryEN}</span>
                </div>
                {cat.items.map(item => {
                  if (item.images && item.images.length > 0) {
                    return <GalleryCard key={item.id} item={item} onImageClick={handleImageClick} />;
                  }
                  return <CompactCard key={item.id} item={item} type="bread" onImageClick={handleImageClick} />;
                })}
              </div>
            ))}
          </div>
        );
      case 'drinks':
        // 分离出有图片的推荐饮料和无图片的推荐饮料
        const allRecommended = menuData.drinksCategories.flatMap(cat => cat.items.filter(i => i.recommended));
        const heroDrinks = allRecommended.filter(i => i.image);
        const standardRecommended = allRecommended.filter(i => !i.image);

        return (
          <div className="px-4 pt-2 animate-fade-in pb-10">
            <SectionTitle titleCN="HAHAHA 冰室" titleEN="HAHAHA BING SUTT" />

            {/* 首屏大图展示 */}
            {heroDrinks.map((item, idx) => (
              <HeroDrinkCard key={`hero-${idx}`} item={item} onImageClick={handleImageClick} />
            ))}

            {/* Top Picks */}
            {standardRecommended.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Star size={16} className="text-[#d4af37]" fill="#d4af37" />
                  <h3 className="text-[#0f4c3a] font-bold text-base">店长私房推介</h3>
                  <span className="text-xs text-stone-400 font-serif italic">Must Try!</span>
                </div>
                <div className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
                  {standardRecommended.map((item, idx) => (
                    <SignatureDrinkCard key={idx} item={item} />
                  ))}
                </div>
              </div>
            )}

            {/* 常规列表 */}
            {menuData.drinksCategories.map((category) => (
              <div key={category.id} className="mb-8">
                <div className="flex items-center gap-2 mb-3 px-1">
                  <div className="w-1 h-4 bg-[#0f4c3a] rounded-full"></div>
                  <h3 className="text-[#0f4c3a] font-bold text-base">{category.nameCN}</h3>
                  <span className="text-xs text-stone-400 font-serif italic">{category.nameEN}</span>
                </div>

                {(category.noteCN || category.noteEN) && (
                  <div className="bg-[#fffbf0] text-[#8c6b48] text-[10px] px-3 py-2 border border-[#f0e6c5] rounded-lg flex items-center gap-2 mb-3">
                    <Info size={14} className="shrink-0 text-[#d4af37]" />
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-left">{category.noteCN}</span>
                      <span className="opacity-80 font-serif italic scale-90 origin-left text-left">
                        {category.noteEN}
                      </span>
                    </div>
                  </div>
                )}

                <div className="bg-white rounded-xl border border-stone-100 p-2 shadow-sm">
                  {category.items.filter(item => !item.image).map((item, idx) => (
                    <ModernDrinkRow key={idx} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f8f4] font-sans text-slate-800 pb-16 max-w-md mx-auto shadow-2xl relative border-x border-stone-200">
      <Header />
      <ImageModal
        image={previewImage}
        name={previewName}
        onClose={() => setPreviewImage(null)}
      />
      <main className="min-h-[80vh] relative z-10">
        <div className="fixed top-20 left-0 w-32 h-32 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-3xl opacity-5 pointer-events-none"></div>
        <div className="fixed bottom-40 right-0 w-40 h-40 bg-[#0f4c3a] rounded-full mix-blend-multiply filter blur-3xl opacity-5 pointer-events-none"></div>
        {renderContent()}
      </main>
      <FooterDisclaimer />
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] z-50 max-w-md mx-auto pb-safe">
        <div className="flex justify-between items-end px-2 pb-1">
          <TabButton active={activeTab === 'home'} onClick={() => setActiveTab('home')} icon={Home} labelCN="套餐" labelEN="Sets" />
          <TabButton active={activeTab === 'food'} onClick={() => setActiveTab('food')} icon={Utensils} labelCN="主食" labelEN="Mains" />
          <TabButton active={activeTab === 'bread'} onClick={() => setActiveTab('bread')} icon={Croissant} labelCN="面包" labelEN="Bread" />
          <TabButton active={activeTab === 'drinks'} onClick={() => setActiveTab('drinks')} icon={Coffee} labelCN="饮料" labelEN="Drinks" />
        </div>
      </nav>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom, 20px);
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes premium-float {
          0%, 100% { transform: translateY(0); filter: drop-shadow(0 4px 6px rgba(180, 134, 11, 0.2)); }
          50% { transform: translateY(-4px); filter: drop-shadow(0 8px 12px rgba(180, 134, 11, 0.4)); }
        }
        .animate-premium-float {
          animation: premium-float 3s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}