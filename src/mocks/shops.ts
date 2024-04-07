/* const mediaPath = 'https://fake-api-digitaldice.vercel.app/digitaldice/' */

const mediaPath = 'https://api-fake-vfo.vercel.app/mygoodchef/images/'

const items = [
    {
        id: 1,
        title: "Tasty",
        image: mediaPath + "place-tasty.webp",
        tag: false,
        vegan: true,
        meals: ["Desserts"],
        description: "Indulge your sweet tooth at our dessert haven, where every bite is a heavenly delight! From decadent cakes to creamy gelato, our shop is a paradise for dessert lovers. Satisfy your cravings with our irresistible treats crafted with love and passion. Whether you're celebrating a special occasion or simply craving a sweet escape, our diverse menu promises to tantalize your taste buds. Come taste the magic at our dessert shop and experience a symphony of flavors that will leave you craving for more!",
        rating: 4.5,
        totalReviews: 30,
        menu: [
            {
                id: 1,
                title: "Chocolate Cake",
                image: mediaPath,
                type: "Lunch",
                rating: 4.5,
                mealInfo: "asdasdsadasdasdasdas",
                price: 12.3,
                previousPrice: 15.8
            },
            {
                id: 2,
                title: "Chocolate Cake",
                image: mediaPath,
                type: "Lunch",
                rating: 4.3,
                mealInfo: "asdasdsadasdasdasdas",
                price: 12.3,
                previousPrice: null
            },
            {
                id: 3,
                title: "Chocolate Cake",
                image: mediaPath,
                type: "Lunch",
                rating: 4.8,
                mealInfo: "asdasdsadasdasdasdas",
                price: 12.3,
                previousPrice: null
            }
        ],
        reviews: [
            {
                id: 1,
                name: "Jack",
                photo: mediaPath,
                stars: 4,
                comment: "asdasdasdasdsa"
            },
            {
                id: 2,
                name: "Sarah",
                photo: mediaPath,
                stars: 5,
                comment: "asdasdasdasdsa"
            },
            {
                id: 3,
                name: "Monica",
                photo: mediaPath,
                stars: 5,
                comment: "asdasdasdasdsa"
            }
        ]
    },
    {
        id: 2,
        title: "Le Bistro",
        image: mediaPath + "place-lebistro.webp",
        tag: true,
        vegan: false,
        meals: ["Lunch", "Dinner", "Desserts"],
        description: "Transport yourself to the charming streets of Paris at Le Bistro, where every dish is a culinary masterpiece inspired by the rich traditions of French cuisine. From delicate crepes to savory coq au vin, our menu boasts an exquisite selection of classic French delicacies crafted with the finest ingredients and meticulous attention to detail. Whether you're enjoying a leisurely lunch or a romantic dinner, our elegant ambiance and impeccable service ensure an unforgettable dining experience. Join us at Le Bistro and savor the essence of France, where every meal is a celebration of flavor, sophistication, and joie de vivre. Bon appétit!",
        rating: 4.8,
        totalReviews: 27,
        menu: [
            {
                id: 1,
                title: "Chocolate Cake",
                image: mediaPath,
                type: "Lunch",
                rating: 4.5,
                mealInfo: "asdasdsadasdasdasdas",
                price: 12.3,
                previousPrice: 15.8
            },
            {
                id: 2,
                title: "Chocolate Cake",
                image: mediaPath,
                type: "Lunch",
                rating: 4.3,
                mealInfo: "asdasdsadasdasdasdas",
                price: 12.3,
                previousPrice: null
            },
            {
                id: 3,
                title: "Chocolate Cake",
                image: mediaPath,
                type: "Lunch",
                rating: 4.8,
                mealInfo: "asdasdsadasdasdasdas",
                price: 12.3,
                previousPrice: null
            }
        ],
        reviews: [
            {
                id: 1,
                name: "Jack",
                photo: mediaPath,
                stars: 4,
                comment: "asdasdasdasdsa"
            },
            {
                id: 2,
                name: "Sarah",
                photo: mediaPath,
                stars: 5,
                comment: "asdasdasdasdsa"
            },
            {
                id: 3,
                name: "Monica",
                photo: mediaPath,
                stars: 5,
                comment: "asdasdasdasdsa"
            }
        ]
    },
    {
        id: 3,
        title: "Mermaid's",
        image: mediaPath + "place-mermaids.webp",
        tag: false,
        vegan: false,
        meals: ["Lunch", "Desserts"],
        description: "Dive into a world of flavor and relaxation at Mermaid's, a cozy beachside retreat where the sea meets the table in a symphony of culinary delights. Nestled along the shore, our charming restaurant offers a laid-back atmosphere and stunning ocean views that perfectly complement our menu of freshly caught seafood and exotic dishes. From succulent grilled shrimp to zesty ceviche, every bite transports you to coastal paradise. Whether you're seeking a casual lunch with friends or a romantic dinner by the waves, Mermaid's promises an unforgettable dining experience filled with warmth, flavor, and the soothing rhythm of the sea. Join us and embark on a culinary journey that celebrates the bounty of the ocean in every savory bite.",
        rating: 4.7,
        totalReviews: 15,
        menu: [
            {
                id: 1,
                title: "Chocolate Cake",
                image: mediaPath,
                type: "Lunch",
                rating: 4.5,
                mealInfo: "asdasdsadasdasdasdas",
                price: 12.3,
                previousPrice: 15.8
            },
            {
                id: 2,
                title: "Chocolate Cake",
                image: mediaPath,
                type: "Lunch",
                rating: 4.3,
                mealInfo: "asdasdsadasdasdasdas",
                price: 12.3,
                previousPrice: null
            },
            {
                id: 3,
                title: "Chocolate Cake",
                image: mediaPath,
                type: "Lunch",
                rating: 4.8,
                mealInfo: "asdasdsadasdasdasdas",
                price: 12.3,
                previousPrice: null
            }
        ],
        reviews: [
            {
                id: 1,
                name: "Jack",
                photo: mediaPath,
                stars: 4,
                comment: "asdasdasdasdsa"
            },
            {
                id: 2,
                name: "Sarah",
                photo: mediaPath,
                stars: 5,
                comment: "asdasdasdasdsa"
            },
            {
                id: 3,
                name: "Monica",
                photo: mediaPath,
                stars: 5,
                comment: "asdasdasdasdsa"
            }
        ]
    },
    {
        id: 4,
        title: "Hungry Dude",
        image: mediaPath + "place-hungrydude.webp",
        tag: false,
        meals: ["Snacks"],
        description: "Craving a quick bite that won't break the bank? Look no further than our vibrant food truck parked right on the bustling streets! At our mobile kitchen, we serve up a mouthwatering array of snacks and fast food favorites, from sizzling hot dogs to crispy French fries, all at wallet-friendly prices. Whether you're on the go or simply seeking a savory pick-me-up, our convenient location and speedy service make us the perfect pit stop for hungry urban adventurers. Join the food truck frenzy and treat yourself to delicious eats without the fuss – because great taste shouldn't come with a hefty price tag!",
        rating: 4.3,
        totalReviews: 12,
        menu: [
            {
                id: 1,
                title: "Chocolate Cake",
                image: mediaPath,
                type: "Lunch",
                rating: 4.5,
                mealInfo: "asdasdsadasdasdasdas",
                price: 12.3,
                previousPrice: 15.8
            },
            {
                id: 2,
                title: "Chocolate Cake",
                image: mediaPath,
                type: "Lunch",
                rating: 4.3,
                mealInfo: "asdasdsadasdasdasdas",
                price: 12.3,
                previousPrice: null
            },
            {
                id: 3,
                title: "Chocolate Cake",
                image: mediaPath,
                type: "Lunch",
                rating: 4.8,
                mealInfo: "asdasdsadasdasdasdas",
                price: 12.3,
                previousPrice: null
            }
        ],
        reviews: [
            {
                id: 1,
                name: "Jack",
                photo: mediaPath,
                stars: 4,
                comment: "asdasdasdasdsa"
            },
            {
                id: 2,
                name: "Sarah",
                photo: mediaPath,
                stars: 5,
                comment: "asdasdasdasdsa"
            },
            {
                id: 3,
                name: "Monica",
                photo: mediaPath,
                stars: 5,
                comment: "asdasdasdasdsa"
            }
        ]
    }
];

export default items