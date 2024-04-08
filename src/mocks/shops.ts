const mediaPath = 'https://api-fake-vfo.vercel.app/mygoodchef/images/'

const items = [
    {
        id: 1,
        title: "Tasty",
        image: mediaPath + "place-tasty.webp",
        tag: false,
        vegan: false,
        meals: ["Desserts"],
        description: "Indulge your sweet tooth at our dessert haven, where every bite is a heavenly delight! From decadent cakes to creamy gelato, our shop is a paradise for dessert lovers. Satisfy your cravings with our irresistible treats crafted with love and passion. Whether you're celebrating a special occasion or simply craving a sweet escape, our diverse menu promises to tantalize your taste buds. Come taste the magic at our dessert shop and experience a symphony of flavors that will leave you craving for more!",
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
                stars: 4,
                comment: "asdasdasdasdsa"
            },
            {
                id: 4,
                name: "Victor",
                photo: mediaPath,
                stars: 5,
                comment: "asdasdasdasdsa"
            },
            {
                id: 5,
                name: "Suzan",
                photo: mediaPath,
                stars: 4,
                comment: "asdasdasdasdsa"
            },
            {
                id: 6,
                name: "Milena",
                photo: mediaPath,
                stars: 5,
                comment: "asdasdasdasdsa"
            },
            {
                id: 7,
                name: "Bruno",
                photo: mediaPath,
                stars: 5,
                comment: "asdasdasdasdsa"
            },
            {
                id: 8,
                name: "Rick",
                photo: mediaPath,
                stars: 5,
                comment: "asdasdasdasdsa"
            },
            {
                id: 9,
                name: "Rachel",
                photo: mediaPath,
                stars: 3,
                comment: "asdasdasdasdsa"
            },
            {
                id: 10,
                name: "Tom",
                photo: mediaPath,
                stars: 5,
                comment: "asdasdasdasdsa"
            },
            {
                id: 11,
                name: "Mark",
                photo: mediaPath,
                stars: 5,
                comment: "asdasdasdasdsa"
            },
            {
                id: 12,
                name: "Spencer",
                photo: mediaPath,
                stars: 5,
                comment: "asdasdasdasdsa"
            }
        ]
    },
    {
        id: 2,
        title: "Le Bistrot",
        image: mediaPath + "place-lebistro.webp",
        tag: true,
        vegan: false,
        meals: ["Lunch", "Dinner", "Desserts"],
        description: "Transport yourself to the charming streets of Paris at Le Bistrot, where every dish is a culinary masterpiece inspired by the rich traditions of French cuisine. From delicate crepes to savory coq au vin, our menu boasts an exquisite selection of classic French delicacies crafted with the finest ingredients and meticulous attention to detail. Whether you're enjoying a leisurely lunch or a romantic dinner, our elegant ambiance and impeccable service ensure an unforgettable dining experience. Join us at Le Bistro and savor the essence of France, where every meal is a celebration of flavor, sophistication, and joie de vivre. Bon appétit!",
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
                stars: 5,
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
                stars: 3,
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
                stars: 4,
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
                stars: 3,
                comment: "asdasdasdasdsa"
            },
            {
                id: 2,
                name: "Sarah",
                photo: mediaPath,
                stars: 4,
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
        id: 5,
        title: "Vegan Garden",
        image: mediaPath + "place-vegangarden.webp",
        tag: false,
        vegan: true,
        meals: ["Breakfast", "Lunch", "Desserts"],
        description: "Nestled within the serene embrace of nature lies our vegan oasis, a peaceful retreat where freshness and flavor flourish in harmony. Situated in the heart of a beautiful park, our restaurant invites you to unwind amidst lush greenery and crisp, clean air while savoring delectable plant-based cuisine. From vibrant salads bursting with garden-fresh produce to hearty plant-based burgers that satisfy every craving, our menu is a celebration of health and sustainability. Whether you're a committed vegan or simply seeking a nourishing meal in tranquil surroundings, our haven offers a sanctuary for mindful dining and wholesome indulgence. Join us in embracing the beauty of nature and the goodness of vegan fare – because here, every bite is a step towards wellness and blissful harmony.",
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
                stars: 5,
                comment: "asdasdasdasdsa"
            },
            {
                id: 2,
                name: "Sarah",
                photo: mediaPath,
                stars: 4,
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