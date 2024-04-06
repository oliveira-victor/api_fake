/* const mediaPath = 'https://fake-api-digitaldice.vercel.app/digitaldice/' */

const mediaPath = 'https://api-fake-vfo.vercel.app/mygoodchef/images/'

const items = [
    {
        id: 1,
        title: "Tasty",
        image: mediaPath + "place-tasty.webp",
        tag: false,
        meals: ["Desserts"],
        description: "asdasdasdasdsadasd",
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
        meals: ["Lunch", "Dinner", "Desserts"],
        description: "asdasdasdasdsadasd",
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
        meals: ["Lunch", "Desserts"],
        description: "asdasdasdasdsadasd",
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
        description: "asdasdasdasdsadasd",
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