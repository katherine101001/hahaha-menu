import { Zap, Smile, Heart, Leaf } from 'lucide-react';

const menuData = {
    // 核心套餐 (新春特别版 - CNY Special)
    highlights: [
        {
            id: 'h1',
            nameCN: '南洋至尊猪肠粉大拼盘',
            nameEN: 'Supreme Chee Cheong Fun Platter',
            descCN: '一次满足所有愿望！含小香肠、Q弹鱼饼、鱼丸、独家卟卟脆(炸腐皮)、鲜嫩腐皮、蟹柳及娘惹咖喱菜园鸡。',
            descEN: 'The ultimate platter with sausage, fish cake, fish balls, crispy beancurd skin, fu pei, crab stick and Nyonya Kampung Chicken curry.',
            price: 26.88, // 新春发财价
            image: '/assets/ccf-set.webp',
            tag: 'CNY Special / 新春限定',
            badge: 'Huat Ah / 发大财',
            isSet: true,
            options: ['甜酱 Sweet Sauce', '咖喱 Curry', '酱油 Soy Sauce'],
            upsell: {
                labelCN: '升级霹雳特色冬菇酱',
                labelEN: 'Upgrade to Perak Mushroom Sauce',
                price: 2.00
            }
        },
        // {
        //     id: 'h2',
        //     nameCN: '娘惹咖喱鸡椰浆饭套餐',
        //     nameEN: 'Nyonya Curry Chicken Nasi Lemak',
        //     descCN: '香浓椰浆饭配搭慢火熬煮的娘惹咖喱，选用肉质紧实的菜园鸡，佐以花生、水煮蛋与特制叁巴。',
        //     descEN: 'Aromatic coconut rice served with signature curry made with Kampung Chicken, peanuts, egg and sambal.',
        //     price: 17.88,
        //     image: '/assets/nasi-lemak-set.webp',
        //     tag: 'Ong Mali / 旺到来',
        // },
        {
            id: 'h3',
            nameCN: '销魂芝士熔岩Maggie面套餐',
            nameEN: 'Cheesy Maggie Set',
            descCN: '浓郁咖喱汤底加入一片灵魂芝士 (Cheese)，融化后的奶香与咖喱完美融合！配搭嫩滑鸡蛋、小料与咖喱鸡。',
            descEN: 'Rich curry broth enriched with a slice of melting cheese! Served with tender poached egg and curry chicken.',
            price: 18.88,
            image: '/assets/maggie.webp',
            tag: 'Must Try / 必试邪恶美食',
            badge: 'Cheese Lover',
            isSet: true,
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
            ingredientsCN: '芝士 • 鸡蛋 • 蟹柳 • 腐皮 • 鱼丸 • 香菜',
            ingredientsEN: 'Cheese • Egg • Coriander',
            price: 10.90,
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
                    images: [
                        '/assets/hoya-1.webp',
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
    // 饮料 (Drinks)
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
                {
                    nameCN: '特调咖啡 "Daddy"',
                    nameEN: '"Daddy" Special',
                    priceHot: null,
                    priceCold: 8.90,
                    highlight: 'Best Seller',
                    recommended: true,
                    image: '/assets/daddy.webp'
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

export default menuData;
