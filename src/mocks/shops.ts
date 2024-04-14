/* const food = 'https://api-fake-vfo.vercel.app/mygoodchef/images/' */

const food = "https://api-fake-vfo.vercel.app/mygoodchef/images/food/"
const place = "https://api-fake-vfo.vercel.app/mygoodchef/images/place/"
const user = "https://api-fake-vfo.vercel.app/mygoodchef/images/user/"

const items = [
    {
        id: 1,
        title: "Tasty",
        image: place + "tasty.webp",
        tag: false,
        vegan: false,
        meals: ["Desserts"],
        description: "Indulge your sweet tooth at our dessert haven, where every bite is a heavenly delight! From decadent cakes to creamy gelato, our shop is a paradise for dessert lovers. Satisfy your cravings with our irresistible treats crafted with love and passion. Whether you're celebrating a special occasion or simply craving a sweet escape, our diverse menu promises to tantalize your taste buds. Come taste the magic at our dessert shop and experience a symphony of flavors that will leave you craving for more!",
        menu: [
            {
                type: "Desserts",
                list: [
                    {
                        title: "Chocolate Cake",
                        image: food + "tasty-chocolate-cake.webp",
                        mealInfo: "Satisfy your sweet cravings with our decadent chocolate cake! Rich, moist layers of velvety chocolate sponge cake are lovingly sandwiched together with luscious chocolate ganache, creating a symphony of indulgent flavors and textures. Each slice is a heavenly delight, delivering an exquisite balance of deep cocoa notes and sumptuous sweetness. Whether you're celebrating a special occasion or simply craving a luxurious dessert, our chocolate cake promises to elevate your taste buds to new heights of delight. Treat yourself to a slice of pure bliss and experience the ultimate chocolate lover's dream!",
                        price: 20.3,
                        previousPrice: 25.8
                    },
                    {
                        title: "Strawberry Ice Cream",
                        image: food + "tasty-strawberry-icecream.webp",
                        mealInfo: "Indulge in a delightful scoop of our lusciously creamy strawberry ice cream! Bursting with the sweet essence of ripe strawberries, each spoonful offers a refreshing symphony of fruity flavors, perfectly balanced with the smooth richness of premium dairy. Crafted with care and passion, our strawberry ice cream is a delightful treat for any occasion, whether it's a sunny day at the park or a cozy evening at home. Taste the essence of summer in every bite and treat yourself to the simple pleasure of our irresistible strawberry ice cream.",
                        price: 3.0,
                        previousPrice: null
                    },
                    {
                        title: "Strawberry Milkshake",
                        image: food + "tasty-strawberry-milkshake.webp",
                        mealInfo: "Quench your thirst and delight your senses with our irresistible strawberry milkshake! Made with plump, ripe strawberries blended to creamy perfection with chilled, velvety milk, each sip is a symphony of fruity sweetness and smooth dairy goodness. Refreshingly indulgent, our strawberry milkshake is the perfect companion for a sunny day or a sweet treat any time of the year. Whether you're sipping it through a straw or savoring it with a spoon, this classic favorite is sure to transport you to a world of pure bliss with every delicious sip. Treat yourself to the ultimate strawberry sensation and experience the joy of our creamy, dreamy milkshake today!",
                        price: 7.3,
                        previousPrice: null
                    },
                    {
                        title: "Chocolate Rabbit",
                        image: food + "tasty-chocolate-rabbit.webp",
                        mealInfo: "Hop into happiness with our adorable chocolate bunny candies! Crafted from the finest Belgian chocolate, each petite rabbit is meticulously molded into a charming shape that's as delightful to behold as it is delicious to devour. With a smooth, velvety texture and a rich cocoa flavor that melts in your mouth, these miniature treats are the perfect indulgence for any chocolate lover. Whether you're celebrating Easter, a special occasion, or simply craving a sweet pick-me-up, our chocolate bunny candies are sure to bring a smile to your face. Treat yourself or someone special to a taste of whimsical delight with these irresistible confections!",
                        price: 7.3,
                        previousPrice: null
                    }
                ]
            }
        ],
        reviews: [
            {
                name: "Jack",
                photo: null,
                stars: 4,
                comment: "Good."
            },
            {
                name: "Nina",
                photo: null,
                stars: 5,
                comment: "I recommend it!"
            },
            {
                name: "Monica",
                photo: null,
                stars: 4,
                comment: "I find the desserts very tasty."
            },
            {
                name: "Victor",
                photo: user + "user01.webp",
                stars: 5,
                comment: "Amazing! I ordered some desserts for my bday party, everyone liked it!"
            },
            {
                name: "Mark",
                photo: user + "user02.webp",
                stars: 5,
                comment: "Simply great!"
            },
            {
                name: "Milena",
                photo: null,
                stars: 5,
                comment: "Approved!"
            },
            {
                name: "Bruno",
                photo: user + "user03.webp",
                stars: 5,
                comment: "My favorite one is the chocolate cake. Just increbly tasty."
            },
            {
                name: "Rick",
                photo: null,
                stars: 5,
                comment: "Amazing"
            },
            {
                name: "Rachel",
                photo: null,
                stars: 5,
                comment: "Delicious!"
            },
            {
                name: "Antony",
                photo: user + "user04.webp",
                stars: 5,
                comment: "The food is delicious! All the desserts are just amazing!"
            },
            {
                name: "Hayley",
                photo: user + "user05.webp",
                stars: 3,
                comment: "The desserts are good, but they should have more varieties"
            },
            {
                name: "Edward",
                photo: user + "user06.webp",
                stars: 4,
                comment: "Good place to eat."
            }
        ]
    },
    {
        id: 2,
        title: "Le Bistrot",
        image: place + "lebistro.webp",
        tag: true,
        vegan: false,
        meals: ["Lunch", "Dinner", "Desserts"],
        description: "Transport yourself to the charming streets of Paris at Le Bistrot, where every dish is a culinary masterpiece inspired by the rich traditions of French cuisine. From delicate crepes to savory coq au vin, our menu boasts an exquisite selection of classic French delicacies crafted with the finest ingredients and meticulous attention to detail. Whether you're enjoying a leisurely lunch or a romantic dinner, our elegant ambiance and impeccable service ensure an unforgettable dining experience. Join us at Le Bistro and savor the essence of France, where every meal is a celebration of flavor, sophistication, and joie de vivre. Bon appétit!",
        menu: [
            {
                type: "Lunch",
                list: [
                    {
                        title: "Chocolate Cake",
                        image: food + "shrimps.webp",
                        mealInfo: "asdasdsadasdasdasdas",
                        price: 12.3,
                        previousPrice: 15.8
                    },
                    {
                        title: "Chocolate Cake",
                        image: food + "shrimps.webp",
                        mealInfo: "asdasdsadasdasdasdas",
                        price: 12.3,
                        previousPrice: null
                    },
                    {
                        title: "Chocolate Cake",
                        image: food + "shrimps.webp",
                        mealInfo: "asdasdsadasdasdasdas",
                        price: 12.3,
                        previousPrice: null
                    },
                    {
                        title: "Chocolate Cake",
                        image: food + "shrimps.webp",
                        mealInfo: "asdasdsadasdasdasdas",
                        price: 12.3,
                        previousPrice: null
                    }
                ]
            },
            {
                type: "Dessert",
                list: [
                    {
                        title: "Chocolate Cake",
                        image: food + "shrimps.webp",
                        mealInfo: "asdasdsadasdasdasdas",
                        price: 12.3,
                        previousPrice: 15.8
                    },
                    {
                        title: "Chocolate Cake",
                        image: food + "shrimps.webp",
                        mealInfo: "asdasdsadasdasdasdas",
                        price: 12.3,
                        previousPrice: null
                    },
                    {
                        title: "Chocolate Cake",
                        image: food + "shrimps.webp",
                        mealInfo: "asdasdsadasdasdasdas",
                        price: 12.3,
                        previousPrice: null
                    },
                    {
                        title: "Chocolate Cake",
                        image: food + "shrimps.webp",
                        mealInfo: "asdasdsadasdasdasdas",
                        price: 12.3,
                        previousPrice: null
                    }
                ]
            }
        ],
        reviews: [
            {
                name: "Jack",
                photo: user + "user07.webp",
                stars: 5,
                comment: "I had a great time with my friends trying their food. Just flawless."
            },
            {
                name: "Sarah",
                photo: user + "user08.webp",
                stars: 5,
                comment: "Great!"
            },
            {
                name: "Monica",
                photo: user + "user09.webp",
                stars: 3,
                comment: "Magnifique! I ordered some lunch and I found them really tasty."
            },
            {
                name: "Beth",
                photo: user + "user10.webp",
                stars: 4,
                comment: "It's ok."
            },
            {
                name: "Nina",
                photo: null,
                stars: 5,
                comment: "Good"
            },
            {
                name: "Barbara",
                photo: null,
                stars: 5,
                comment: "It's ok."
            },
            {
                name: "Mariana",
                photo: null,
                stars: 5,
                comment: "I strongly recommend it."
            },
            {
                name: "Nick",
                photo: null,
                stars: 5,
                comment: "Go fot it!"
            },
            {
                name: "Maria",
                photo: user + "user11.webp",
                stars: 5,
                comment: "I'll order more from them. Their food is just amazing!"
            },
            {
                name: "Pedro",
                photo: null,
                stars: 5,
                comment: "Five stars!"
            },
            {
                name: "Michael",
                photo: user + "user12.webp",
                stars: 5,
                comment: "Just perfect."
            },
            {
                name: "Bob",
                photo: user + "user13.webp",
                stars: 4,
                comment: "I like it."
            },
            {
                name: "Adriana",
                photo: null,
                stars: 5,
                comment: "One of the best food experiences I've ever had."
            },
            {
                name: "James",
                photo: user + "user14.webp",
                stars: 5,
                comment: "The best of French cuisine. I've been to France and I can say their food taste the same."
            }
        ]
    },
    {
        id: 3,
        title: "Mermaid's",
        image: place + "mermaids.webp",
        tag: false,
        vegan: false,
        meals: ["Lunch", "Desserts"],
        description: "Dive into a world of flavor and relaxation at Mermaid's, a cozy beachside retreat where the sea meets the table in a symphony of culinary delights. Nestled along the shore, our charming restaurant offers a laid-back atmosphere and stunning ocean views that perfectly complement our menu of freshly caught seafood and exotic dishes. From succulent grilled shrimp to zesty ceviche, every bite transports you to coastal paradise. Whether you're seeking a casual lunch with friends or a romantic dinner by the waves, Mermaid's promises an unforgettable dining experience filled with warmth, flavor, and the soothing rhythm of the sea. Join us and embark on a culinary journey that celebrates the bounty of the ocean in every savory bite.",
        menu: [
            {
                type: "Dessert",
                list: [
                    {
                        title: "Chocolate Cake",
                        image: food + "shrimps.webp",
                        type: "Lunch",
                        rating: 4.5,
                        mealInfo: "asdasdsadasdasdasdas",
                        price: 12.3,
                        previousPrice: 15.8
                    },
                    {
                        title: "Chocolate Cake",
                        image: food + "shrimps.webp",
                        type: "Lunch",
                        mealInfo: "asdasdsadasdasdasdas",
                        price: 12.3,
                        previousPrice: null
                    },
                    {
                        title: "Chocolate Cake",
                        image: food + "shrimps.webp",
                        type: "Lunch",
                        mealInfo: "asdasdsadasdasdasdas",
                        price: 12.3,
                        previousPrice: null
                    },
                    {
                        title: "Chocolate Cake",
                        image: food + "shrimps.webp",
                        type: "Lunch",
                        mealInfo: "asdasdsadasdasdasdas",
                        price: 12.3,
                        previousPrice: null
                    }
                ]
            }
        ],
        reviews: [
            {
                name: "Gabriel",
                photo: null,
                stars: 4,
                comment: "They're good."
            },
            {
                name: "Ruth",
                photo: user + "user15.webp",
                stars: 5,
                comment: "Simply the best!"
            },
            {
                name: "Lara",
                photo: null,
                stars: 5,
                comment: "Luv it"
            },
            {
                name: "Maria",
                photo: null,
                stars: 5,
                comment: "The place is amazing! And so is the food."
            },
            {
                name: "Alice",
                photo: user + "user16.webp",
                stars: 5,
                comment: "Just try the shrimps!"
            },
            {
                name: "Bianca",
                photo: user + "user17.webp",
                stars: 5,
                comment: "I really like their food."
            },
            {
                name: "George",
                photo: user + "user18.webp",
                stars: 5,
                comment: "My favourite place for sea food."
            },
            {
                name: "Greta",
                photo: null,
                stars: 3,
                comment: "Good food."
            },
            {
                name: "Richard",
                photo: user + "user19.webp",
                stars: 4,
                comment: "Their food is just great. I ordered some shrimps."
            },
            {
                name: "Mark",
                photo: user + "user20.webp",
                stars: 5,
                comment: "Excellent."
            },
            {
                name: "Daniel",
                photo: user + "user21.webp",
                stars: 5,
                comment: "I will order from them again."
            }
        ]
    },
    {
        id: 4,
        title: "Hungry Dude",
        image: place + "hungrydude.webp",
        tag: false,
        meals: ["Snacks"],
        description: "Craving a quick bite that won't break the bank? Look no further than our vibrant food truck parked right on the bustling streets! At our mobile kitchen, we serve up a mouthwatering array of snacks and fast food favorites, from sizzling hot dogs to crispy French fries, all at wallet-friendly prices. Whether you're on the go or simply seeking a savory pick-me-up, our convenient location and speedy service make us the perfect pit stop for hungry urban adventurers. Join the food truck frenzy and treat yourself to delicious eats without the fuss – because great taste shouldn't come with a hefty price tag!",
        menu: [
            {
                type: "Dessert",
                list: [
                    {
                        title: "Chocolate Cake",
                        image: food + "shrimps.webp",
                        type: "Lunch",
                        rating: 4.5,
                        mealInfo: "asdasdsadasdasdasdas",
                        price: 12.3,
                        previousPrice: 15.8
                    },
                    {
                        title: "Chocolate Cake",
                        image: food + "shrimps.webp",
                        type: "Lunch",
                        mealInfo: "asdasdsadasdasdasdas",
                        price: 12.3,
                        previousPrice: null
                    },
                    {
                        title: "Chocolate Cake",
                        image: food + "shrimps.webp",
                        type: "Lunch",
                        mealInfo: "asdasdsadasdasdasdas",
                        price: 12.3,
                        previousPrice: null
                    },
                    {
                        title: "Chocolate Cake",
                        image: food + "shrimps.webp",
                        type: "Lunch",
                        mealInfo: "asdasdsadasdasdasdas",
                        price: 12.3,
                        previousPrice: null
                    }
                ]
            }
        ],
        reviews: [
            {
                name: "Margareth",
                photo: user + "user22.webp",
                stars: 5,
                comment: "Nice"
            },
            {
                name: "Meggan",
                photo: user + "user23.webp",
                stars: 4,
                comment: "Good fast food."
            },
            {
                name: "Tony",
                photo: user + "user24.webp",
                stars: 5,
                comment: "They have great snacks."
            },
            {
                name: "Elisabeth",
                photo: user + "user25.webp",
                stars: 5,
                comment: "Great."
            },
            {
                name: "Johnny",
                photo: null,
                stars: 3,
                comment: "They make good snacks, just need to be faster to be fast food."
            },
            {
                name: "Aline",
                photo: user + "user26.webp",
                stars: 5,
                comment: "Their sauce comes from heaven!"
            },
            {
                name: "Lilly",
                photo: user + "user27.webp",
                stars: 5,
                comment: "That`s my favourite place for fast food. I order from them every weekend."
            }
        ]
    },
    {
        id: 5,
        title: "Vegan Garden",
        image: place + "vegangarden.webp",
        tag: false,
        vegan: true,
        meals: ["Breakfast", "Lunch", "Desserts"],
        description: "Nestled within the serene embrace of nature lies our vegan oasis, a peaceful retreat where freshness and flavor flourish in harmony. Situated in the heart of a beautiful park, our restaurant invites you to unwind amidst lush greenery and crisp, clean air while savoring delectable plant-based cuisine. From vibrant salads bursting with garden-fresh produce to hearty plant-based burgers that satisfy every craving, our menu is a celebration of health and sustainability. Whether you're a committed vegan or simply seeking a nourishing meal in tranquil surroundings, our haven offers a sanctuary for mindful dining and wholesome indulgence. Join us in embracing the beauty of nature and the goodness of vegan fare – because here, every bite is a step towards wellness and blissful harmony.",
        menu: [
            {
                type: "Dessert",
                list: [
                    {
                        title: "Chocolate Cake",
                        image: food + "shrimps.webp",
                        type: "Lunch",
                        rating: 4.5,
                        mealInfo: "asdasdsadasdasdasdas",
                        price: 12.3,
                        previousPrice: 15.8
                    },
                    {
                        title: "Chocolate Cake",
                        image: food + "shrimps.webp",
                        type: "Lunch",
                        mealInfo: "asdasdsadasdasdasdas",
                        price: 12.3,
                        previousPrice: null
                    },
                    {
                        title: "Chocolate Cake",
                        image: food + "shrimps.webp",
                        type: "Lunch",
                        mealInfo: "asdasdsadasdasdasdas",
                        price: 12.3,
                        previousPrice: null
                    },
                    {
                        title: "Chocolate Cake",
                        image: food + "shrimps.webp",
                        type: "Lunch",
                        mealInfo: "asdasdsadasdasdasdas",
                        price: 12.3,
                        previousPrice: null
                    }
                ]
            }
        ],
        reviews: [
            {
                name: "Mari",
                photo: user + "user28.webp",
                stars: 5,
                comment: "Such good food!"
            },
            {
                name: "Kate",
                photo: user + "user29.webp",
                stars: 5,
                comment: "Go vegan!"
            },
            {
                name: "Mauricio",
                photo: user + "user30.webp",
                stars: 5,
                comment: "Their food is incredible, doesn't even seem vegan lol"
            },
            {
                name: "Norah",
                photo: user + "user31.webp",
                stars: 5,
                comment: "I like their food :)"
            },
            {
                name: "Sandra",
                photo: user + "user32.webp",
                stars: 4,
                comment: "Delicious menu options!"
            },
            {
                name: "Rick",
                photo: user + "user33.webp",
                stars: 5,
                comment: "I'm glad I found such a place to order good vegan food."
            },
            {
                name: "Juliana",
                photo: user + "user34.webp",
                stars: 5,
                comment: "My favorite restaurant."
            },
            {
                name: "Beatrice",
                photo: user + "user35.webp",
                stars: 5,
                comment: "I recommend it!"
            },
            {
                name: "Mary",
                photo: user + "user36.webp",
                stars: 4,
                comment: "Their food is delicious, the price is ok."
            },
            {
                name: "Bob",
                photo: user + "user37.webp",
                stars: 5,
                comment: "Incredible vegan food."
            },
            {
                name: "Miguel",
                photo: null,
                stars: 5,
                comment: "I'm ordering again soon."
            },
            {
                name: "Brad",
                photo: user + "user38.webp",
                stars: 5,
                comment: "This is a great place."
            },
            {
                name: "Martin",
                photo: user + "user39.webp",
                stars: 5,
                comment: "Some dishes I had never seen before. They're just great."
            },
            {
                name: "Mary",
                photo: user + "user40.webp",
                stars: 5,
                comment: "Luv the food and the place."
            },
            {
                name: "Martina",
                photo: user + "user41.webp",
                stars: 5,
                comment: "If you have the chance to visit the place, that's the best you can do. It's a peaceful park with fresh air. The food is great, vegan, delish!"
            },
            {
                name: "Fionna",
                photo: user + "user42.webp",
                stars: 5,
                comment: "My fav vegan place."
            },
            {
                name: "Isabella",
                photo: user + "user43.webp",
                stars: 5,
                comment: "I recommend this place to everyone. Their food is healthy and tasty."
            }
        ]
    }
];

export default items