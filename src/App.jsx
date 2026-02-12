import React, { useState, useEffect } from 'react';
// 引入了新需要的 Images 图标
import { Utensils, Coffee, Home, Info, Sparkles, AlertCircle, Croissant, Star, ShieldCheck, Egg, ZoomIn, X, Leaf, Droplets, Heart, Zap, Smile, Moon, Flame, Snowflake, Images } from 'lucide-react';

// --- 数据配置 (Data Configuration) ---

const menuData = {
  // 核心套餐 (新春特别版 - CNY Special)
  highlights: [
    {
      id: 'h1',
      nameCN: '南洋至尊猪肠粉大拼盘',
      nameEN: 'Supreme Chee Cheong Fun Platter',
      descCN: '一次满足所有愿望！含小香肠、Q弹鱼饼、鱼丸、独家卟卟脆(炸腐皮)、鲜嫩腐皮、蟹柳及娘惹咖喱鸡。',
      descEN: 'The ultimate platter with sausage, fish cake, fish balls, crispy beancurd skin, fu pei, and crab stick.',
      price: 26.88, // 新春发财价
      image: '/assets/ccf-set.webp',
      tag: 'CNY Special / 新春限定',
      badge: 'Huat Ah / 发大财',
      options: ['甜酱 Sweet Sauce', '咖喱 Curry', '酱油 Soy Sauce'],
      upsell: {
        labelCN: '升级霹雳特色冬菇酱',
        labelEN: 'Upgrade to Perak Mushroom Sauce',
        price: 2.00
      }
    },
    {
      id: 'h2',
      nameCN: '娘惹咖喱鸡椰浆饭套餐',
      nameEN: 'Nyonya Curry Chicken Nasi Lemak',
      descCN: '香浓椰浆饭配搭慢火熬煮的娘惹咖喱鸡，佐以花生、水煮蛋与特制叁巴。',
      descEN: 'Aromatic coconut rice served with signature Nyonya curry chicken, peanuts, egg and sambal.',
      price: 13.90,
      image: '/assets/nasi-lemak-set.webp',
      tag: 'Ong Mali / 旺到来',
    },
    {
      id: 'h3',
      nameCN: '销魂芝士熔岩Maggie面套餐',
      nameEN: 'Cheesy Maggie Set',
      descCN: '浓郁咖喱汤底加入一片灵魂芝士 (Cheese)，融化后的奶香与咖喱完美融合！配搭嫩滑鸡蛋与咖喱鸡。',
      descEN: 'Rich curry broth enriched with a slice of melting cheese! Served with tender poached egg and curry chicken.',
      price: 15.90,
      image: '/assets/maggie-set.webp',
      tag: 'Must Try / 必试邪恶美食',
      badge: 'Cheese Lover',
    }
  ],
  // 主食 (单点)
  food: [
    {
      id: 'f1',
      nameCN: '传统猪肠粉',
      nameEN: 'Traditional Chee Cheong Fun',
      ingredientsCN: '鱼饼 • 鱼丸 • 腐皮',
      ingredientsEN: 'Fish Cake • Fish Ball • Beancurd Skin',
      price: 8.00,
      image: '/assets/ccf.webp',
    },
    {
      id: 'f2',
      nameCN: '娘惹风味椰浆饭',
      nameEN: 'Nyonya Nasi Lemak (Basic)',
      ingredientsCN: '鸡蛋 • 花生 • 娘惹江鱼仔叁巴• 娘惹阿杂',
      ingredientsEN: 'Egg • Peanuts • Nyonya Ikan Bilis Sambal• Nyonya Achar',
      price: 9.90,
      image: '/assets/nasi-lemak.webp',
    },
    {
      id: 'f3',
      nameCN: '销魂芝士熔岩Maggie面',
      nameEN: 'Cheesy Maggie Set',
      ingredientsCN: '芝士 • 鸡蛋 • 香菜',
      ingredientsEN: 'Cheese • Egg • Coriander',
      price: 8.90,
      image: '/assets/maggie.webp',
    },
    {
      id: 'f4',
      nameCN: '秘制咖喱鸡 (单点)',
      nameEN: 'Nyonya Curry Chicken (A La Carte)',
      ingredientsCN: '娘惹香料 • 鸡肉 • 马铃薯',
      ingredientsEN: 'Nyonya Spices • Chicken • Potato',
      price: 7.90,
      image: '/assets/curry-chicken.webp',
    }
  ],
  // 面包 (Bread Series)
  bread: [
    {
      id: 'cat_egg',
      categoryCN: '南洋早餐灵魂 (Breakfast Soul)',
      categoryEN: 'Premium Pasteurized Egg',
      items: [
        {
          id: 'b_egg',
          nameCN: '经典半熟蛋 (无菌蛋)',
          nameEN: 'Half Boiled Egg (Pasteurized)',
          price: 3.80,
          highlight: '无菌更安心 Safe to eat',
          desc: '精选高品质无菌蛋，口感滑嫩，蛋香浓郁。',
          image: '/assets/egg.webp',
          isPremiumEgg: true
        }
      ]
    },
    {
      id: 'cat_special',
      categoryCN: '独家特制 (Signature Series)',
      categoryEN: 'Served with Half Boiled Egg',
      items: [
        {
          id: 'b5',
          nameCN: '自制蒜蓉酱香面包',
          nameEN: 'Homemade Garlic Savory Bread',
          price: 9.90,
          desc: '浓郁蒜香，外酥里嫩。',
          image: '/assets/garlic-bread.webp',
          withEgg: true
        },
        {
          id: 'b6',
          nameCN: 'Hojiak "好吃"面包',
          nameEN: 'Hojiak Signature Bread',
          price: 8.90,
          desc: '福建话 "Hojiak"，必试招牌厚土司。',
          image: '/assets/hojiak.webp',
          withEgg: true
        },
        {
          id: 'b7',
          nameCN: 'Hoya "好嘢"面包',
          nameEN: 'Hoya Premium Bread',
          price: 9.90,
          desc: '广东话 "Hoya"，口感丰富的豪华组合。',
          highlight: 'Best Seller',
          // 🚨 重点修改：将 image 替换为 images 数组以支持画廊
          images: [
            '/assets/hoya-1.webp', // 替换为你的真实图片路径
            '/assets/hoya-2.webp',
            '/assets/hoya-3.webp'
          ],
          withEgg: true
        }
      ]
    },
    {
      id: 'cat_toast',
      categoryCN: '传统烤面包 (Toast)',
      categoryEN: 'Traditional Charcoal Toast',
      items: [
        {
          id: 'b1',
          nameCN: '招牌咖椰牛油烤面包',
          nameEN: 'Kaya Butter Toast',
          price: 3.80,
          highlight: '自制 Kaya',
          image: '/assets/toast.webp'
        },
        {
          id: 'b2',
          nameCN: '花生酱烤面包',
          nameEN: 'Peanut Butter Toast',
          price: 4.80,
          highlight: '自制纯花生酱',
          desc: '无反式脂肪 Zero Trans Fat',
          image: '/assets/toast-pb.webp'
        },
        {
          id: 'b8',
          nameCN: '经典黄糖烤面包',
          nameEN: 'Classic Yellow Sugar Toast',
          price: 3.80,
          desc: '撒上香甜黄糖的简单美味。',
          image: '/assets/sweet-toast.webp'
        }
      ]
    },
    {
      id: 'cat_steam',
      categoryCN: '古早味蒸面包 (Steamed)',
      categoryEN: 'Soft Steamed Bread',
      items: [
        {
          id: 'b3',
          nameCN: '咖椰牛油蒸面包',
          nameEN: 'Steamed Kaya Butter',
          price: 4.20,
          highlight: '松软 Soft',
          image: '/assets/steam-bread.webp'
        },
        {
          id: 'b4',
          nameCN: '花生酱蒸面包',
          nameEN: 'Steamed Peanut Butter',
          price: 5.20,
          highlight: '无反式脂肪',
          desc: '自制纯花生酱 Homemade Pure PB',
          image: '/assets/steam-bread-pb.webp'
        }
      ]
    }
  ],
  // 饮料 (Drinks - Redesigned for Consistency)
  drinksCategories: [
    {
      id: 'cat_coffee',
      nameCN: '香浓咖啡',
      nameEN: 'Coffee Series',
      vibe: '续命水 • Wake Up',
      icon: Zap,
      items: [
        { nameCN: '维纳斯咖啡', nameEN: "Venus's Coffee", priceHot: 3.80, priceCold: 4.50, highlight: 'Signature', recommended: true, displayColdOnly: true },
        { nameCN: '黑咖啡', nameEN: 'Long Black', priceHot: 3.50, priceCold: 3.90 },
        { nameCN: '鸳鸯', nameEN: 'Yuen Yeung', priceHot: 3.80, priceCold: 4.50 },
        // 🚨 重点修改：为 Daddy 加上了专属照片路径
        {
          nameCN: '特调咖啡 "Daddy"',
          nameEN: '"Daddy" Special',
          priceHot: null,
          priceCold: 8.90,
          highlight: 'Best Seller',
          recommended: true,
          image: '/assets/daddy.webp' // 加上你的竖屏照片路径
        },
        { nameCN: '特调咖啡 "Mummy"', nameEN: '"Mummy" Special', priceHot: null, priceCold: 8.90, highlight: 'Signature', recommended: true },
        { nameCN: '雀巢咖啡', nameEN: 'Nescafé', priceHot: 3.80, priceCold: 4.50 },
      ]
    },
    {
      id: 'cat_tea',
      nameCN: '奶茶与饮料',
      nameEN: 'Tea & Non-Coffee',
      vibe: '快乐水 • Be Happy',
      icon: Smile,
      items: [
        { nameCN: '斯里兰卡奶茶', nameEN: 'Ceylon Milk Tea', priceHot: 3.80, priceCold: 4.50, highlight: 'Signature', recommended: true, displayColdOnly: true },
        { nameCN: '斯里兰卡红茶', nameEN: 'Ceylon Tea', priceHot: 3.50, priceCold: 3.90 },
        { nameCN: '美禄特调', nameEN: 'Milo Co', priceHot: 3.80, priceCold: 4.50 },
        { nameCN: '柠檬茶', nameEN: 'Lemon Tea', priceHot: 3.80, priceCold: 4.80 },
        { nameCN: '蜂蜜柠檬', nameEN: 'Honey Lemon', priceHot: 6.90, priceCold: 8.90 },
        { nameCN: '天空之水 (白开水)', nameEN: 'Sky Juice', priceHot: 1.50, priceCold: 1.50 },
        { nameCN: '单眼佬凉茶', nameEN: 'Herbal Tea', priceHot: null, priceCold: 3.80 },
        { nameCN: '矿泉水', nameEN: 'Mineral Water', priceHot: null, priceCold: 1.50 },
      ]
    },
    {
      id: 'cat_wellness',
      nameCN: '养生系列',
      nameEN: 'Wellness Series',
      vibe: '爱自己 • Self Love',
      icon: Heart,
      items: [
        { nameCN: '养生殿', nameEN: 'Forever Young', priceHot: 8.90, priceCold: null, desc: '养颜滋补' },
        { nameCN: '黑米王', nameEN: 'Black Hunter', priceHot: 9.90, priceCold: null, desc: '健康首选' },
      ]
    },
    {
      id: 'cat_chinese_tea',
      nameCN: '中国茶',
      nameEN: 'Chinese Tea',
      vibe: '一壶茶 • Zen Mode',
      icon: Leaf,
      noteCN: '茶壶供应，额外添加水将收取 RM 1.00',
      noteEN: 'Served in Teapot. Hot water refill chargeable at RM 1.00',
      items: [
        { nameCN: '普洱茶', nameEN: 'Pu Er Tea', priceHot: 6.90, priceCold: null, desc: '消食解腻' },
      ]
    }
  ]
};

// --- 通用组件 (Components) ---

// 全屏图片查看器
const ImageModal = ({ image, onClose, name }) => {
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
};

// 头部
const Header = () => (
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

// 标题分割线
const SectionTitle = ({ titleCN, titleEN }) => (
  <div className="flex items-center justify-center my-8 space-x-3">
    <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
    <div className="text-center">
      <h2 className="text-2xl font-serif text-[#0f4c3a] font-bold">{titleCN}</h2>
      <p className="text-[10px] text-[#8c6b48] uppercase tracking-[0.2em] font-medium mt-1">{titleEN}</p>
    </div>
    <div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
  </div>
);

// 价格显示
const PriceTag = ({ price, small = false }) => (
  <span className={`text-[#0f4c3a] font-bold font-serif ${small ? 'text-base' : 'text-lg'}`}>
    <span className="text-xs mr-0.5 font-sans font-normal">RM</span>
    {price.toFixed(2)}
  </span>
);

// 🚨 新增：Hoya面包专用的多图画廊卡片
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

      {/* 🚨 补回这里：左上角悬浮 Best Seller 标签 */}
      {item.highlight && (
        <div className="absolute top-3 left-3 bg-gradient-to-r from-[#d4af37] to-[#eac765] text-[#0f4c3a] text-[10px] font-bold px-3 py-1.5 rounded shadow-lg uppercase flex items-center gap-1.5 tracking-wider z-20">
          <Flame size={12} className="text-red-600" fill="currentColor" /> {item.highlight}
        </div>
      )}

      {/* 横向滑动图片区 */}
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
              <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={`${item.nameEN} ${idx + 1}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/30 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border border-white/20 z-10">
                <ZoomIn className="text-white" size={24} />
              </div>
            </div>
          ))}
        </div>

        {/* 多图操作提示 */}
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full p-2 z-10 text-white/90">
          <Images size={14} />
        </div>

        {/* 指示器 */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/30 px-2.5 py-1.5 rounded-full backdrop-blur-md">
          {item.images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-4 bg-[#d4af37]' : 'w-1.5 bg-white/60'}`}
            />
          ))}
        </div>
      </div>

      {/* 信息区 (保留你原来的精美排版) */}
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


// 🚨 新增：专为 Daddy 等【竖屏】照片设计的饮料大卡片
const HeroDrinkCard = ({ item, onImageClick }) => (
  <div
    // 采用 h-[380px] 让竖屏照片有充分的展示空间
    className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.2)] mb-8 cursor-pointer group border border-stone-100"
    onClick={() => onImageClick(item.image, item.nameCN)}
  >
    <img src={item.image} alt={item.nameCN} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
    {/* 渐变遮罩加深到底部，确保就算照片下面很亮，白色文字也能看清 */}
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


// 1. 饮料组件：推荐大卡片 (保留原本你的设计)
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

// 2. 饮料组件：列表行 
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

// 核心卡片组件 (PremiumCard)
const PremiumCard = ({ item, onImageClick }) => {
  const isCNY = item.tag && (item.tag.includes('CNY') || item.tag.includes('新春') || item.tag.includes('Ong') || item.tag.includes('Huat'));
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-stone-100 mb-6 flex flex-col relative group">
      <div
        className="relative h-56 w-full overflow-hidden cursor-pointer"
        onClick={() => onImageClick(item.image, item.nameCN)}
      >
        <img src={item.image} alt={item.nameEN} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/30 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border border-white/20">
          <ZoomIn className="text-white" size={24} />
        </div>
        {item.tag && (
          <div className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1
            ${isCNY ? 'bg-red-600 text-[#ffeb3b]' : 'bg-[#d4af37] text-[#0f4c3a]'}`}>
            <Star size={10} fill={isCNY ? '#ffeb3b' : '#0f4c3a'} /> {item.tag}
          </div>
        )}
        {item.badge && (
          <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md border border-[#ffeb3b]">
            {item.badge}
          </div>
        )}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg flex items-center">
          <PriceTag price={item.price} />
        </div>
      </div>
      <div className={`p-5 flex-1 flex flex-col bg-[#fffefc] ${isCNY ? 'border-b-4 border-red-600' : ''}`}>
        <div className="mb-2">
          <h3 className="text-xl font-bold text-[#0f4c3a] font-serif leading-tight mb-1">{item.nameCN}</h3>
          <p className="text-xs text-[#8c6b48] font-serif italic">{item.nameEN}</p>
        </div>
        {item.descCN && (
          <p className="text-xs text-stone-500 mb-3 leading-relaxed border-l-2 border-[#d4af37]/30 pl-2">
            {item.descCN}
          </p>
        )}
        {(item.ingredientsCN) && (
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

// 紧凑卡片组件 (CompactCard)
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

// 底部导航按钮
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

// 页脚
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

// --- 主应用组件 ---

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
            <div className="rounded-xl overflow-hidden shadow-lg mb-8 relative h-40 bg-gradient-to-r from-red-800 to-red-600 flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/oriental-tiles.png')]"></div>
              <div className="z-10 text-center px-4 border-y-2 border-[#ffeb3b] py-4 bg-red-900/40 backdrop-blur-sm w-full">
                <h2 className="text-[#ffeb3b] font-serif text-xl font-bold tracking-widest mb-1 flex items-center justify-center gap-2">
                  <span className="text-2xl">🧧</span> 新春快乐 <span className="text-2xl">🧧</span>
                </h2>
                <p className="text-white text-[10px] tracking-[0.3em] font-light uppercase">Gong Xi Fa Cai • CNY Specials</p>
              </div>
            </div>
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
                  // 🚨 使用新逻辑：如果是多图产品(Hoya 面包)，渲染画廊卡片
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

            {/* 🚨 首屏大图展示：渲染唯一的竖向特调照片 (Daddy) */}
            {heroDrinks.map((item, idx) => (
              <HeroDrinkCard key={`hero-${idx}`} item={item} onImageClick={handleImageClick} />
            ))}

            {/* Top Picks - 横向滚动保留 (给其他没照片的饮料) */}
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

            {/* 常规列表 (保留你原本设计的架构) */}
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
                    {/* 修改 1: 加上 items-start 确保 flex 子元素靠左 */}
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-left">{category.noteCN}</span>
                      {/* 修改 2: 加上 origin-left 确保缩小时是靠左缩，而不是向中间缩 */}
                      <span className="opacity-80 font-serif italic scale-90 origin-left text-left">
                        {category.noteEN}
                      </span>
                    </div>
                  </div>
                )}

                <div className="bg-white rounded-xl border border-stone-100 p-2 shadow-sm">
                  {/* 只渲染没有被抽离出去做主打的常规饮料 */}
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
      `}</style>
    </div>
  );
}