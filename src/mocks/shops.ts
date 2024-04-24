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
                        id: 6027,
                        title: "Chocolate Cake",
                        image: food + "tasty-chocolate-cake.webp",
                        mealInfo: "Satisfy your sweet cravings with our decadent chocolate cake! Rich, moist layers of velvety chocolate sponge cake are lovingly sandwiched together with luscious chocolate ganache, creating a symphony of indulgent flavors and textures. Each slice is a heavenly delight, delivering an exquisite balance of deep cocoa notes and sumptuous sweetness. Whether you're celebrating a special occasion or simply craving a luxurious dessert, our chocolate cake promises to elevate your taste buds to new heights of delight. Treat yourself to a slice of pure bliss and experience the ultimate chocolate lover's dream!",
                        price: 20.3,
                        previousPrice: 25.8
                    },
                    {
                        id: 8503,
                        title: "Strawberry Ice Cream",
                        image: food + "tasty-strawberry-icecream.webp",
                        mealInfo: "Indulge in a delightful scoop of our lusciously creamy strawberry ice cream! Bursting with the sweet essence of ripe strawberries, each spoonful offers a refreshing symphony of fruity flavors, perfectly balanced with the smooth richness of premium dairy. Crafted with care and passion, our strawberry ice cream is a delightful treat for any occasion, whether it's a sunny day at the park or a cozy evening at home. Taste the essence of summer in every bite and treat yourself to the simple pleasure of our irresistible strawberry ice cream.",
                        price: 3.0,
                        previousPrice: null
                    },
                    {
                        id: 9082,
                        title: "Strawberry Milkshake",
                        image: food + "tasty-strawberry-milkshake.webp",
                        mealInfo: "Quench your thirst and delight your senses with our irresistible strawberry milkshake! Made with plump, ripe strawberries blended to creamy perfection with chilled, velvety milk, each sip is a symphony of fruity sweetness and smooth dairy goodness. Refreshingly indulgent, our strawberry milkshake is the perfect companion for a sunny day or a sweet treat any time of the year. Whether you're sipping it through a straw or savoring it with a spoon, this classic favorite is sure to transport you to a world of pure bliss with every delicious sip. Treat yourself to the ultimate strawberry sensation and experience the joy of our creamy, dreamy milkshake today!",
                        price: 7.3,
                        previousPrice: null
                    },
                    {
                        id: 4733,
                        title: "Chocolate Puppy",
                        image: food + "tasty-chocolate-puppy.webp",
                        mealInfo: "Hop into happiness with our adorable chocolate puppy candies! Crafted from the finest Belgian chocolate, each petite rabbit is meticulously molded into a charming shape that's as delightful to behold as it is delicious to devour. With a smooth, velvety texture and a rich cocoa flavor that melts in your mouth, these miniature treats are the perfect indulgence for any chocolate lover. Whether you're celebrating Easter, a special occasion, or simply craving a sweet pick-me-up, our chocolate bunny candies are sure to bring a smile to your face. Treat yourself or someone special to a taste of whimsical delight with these irresistible confections!",
                        price: 7.3,
                        previousPrice: null
                    },
                    {
                        id: 1499,
                        title: "Passion Fruit Mousse",
                        image: food + "tasty-passionfruit-mousse.webp",
                        mealInfo: "Indulge in a taste of tropical paradise with our exquisite passion fruit mousse! Each spoonful is a burst of vibrant flavor, blending the tangy sweetness of ripe passion fruit with the delicate creaminess of whipped mousse. With its velvety texture and refreshing tang, this heavenly dessert is a true culinary delight. Whether you're dreaming of a beach getaway or simply seeking a moment of pure indulgence, our passion fruit mousse is sure to transport you to sun-kissed shores with its tropical flair. Treat yourself to a taste of paradise and experience the irresistible allure of our luscious passion fruit mousse today!",
                        price: 3.0,
                        previousPrice: 3.5
                    },
                    {
                        id: 4554,
                        title: "Churro",
                        image: food + "tasty-churro.webp",
                        mealInfo: "Satisfy your cravings with our freshly fried churros, a delectable Spanish treat that's crispy on the outside, soft and fluffy on the inside, and coated in a heavenly dusting of cinnamon sugar. Each golden-brown spiral is a symphony of flavors and textures, offering the perfect balance of sweet and savory with every bite. Whether you're enjoying it as a delightful snack or as a delicious dessert, our churros are sure to transport your taste buds to the bustling streets of Spain. Treat yourself to a taste of tradition and experience the irresistible allure of our mouthwatering churros today!",
                        price: 1.5,
                        previousPrice: null
                    },
                    {
                        id: 1386,
                        title: "Banana Pancake",
                        image: food + "tasty-bananapancake.webp",
                        mealInfo: "Wake up to a taste of pure delight with our fluffy banana pancakes! Made with ripe, mashed bananas folded into a light and airy pancake batter, each bite is a heavenly fusion of sweet fruitiness and comforting warmth. Served with a drizzle of golden maple syrup and a dollop of creamy whipped butter, these pancakes are a perfect balance of indulgence and wholesomeness. Whether you're starting your day with a hearty breakfast or treating yourself to a cozy brunch, our banana pancakes are sure to bring a smile to your face and warmth to your soul. Dive into a stack of happiness and savor the irresistible charm of our delightful banana pancakes today!",
                        price: 3.6,
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
                type: "Lunch & Dinner",
                list: [
                    {
                        id: 1068,
                        title: "Bouillabaissee",
                        image: food + "lebistrot-bouillabaisse.webp",
                        mealInfo: "This traditional French seafood stew is a symphony of flavors, combining the freshest catch of the day with fragrant herbs and spices in a rich, savory broth. Each spoonful offers a tantalizing array of tender fish, succulent shellfish, and hearty vegetables, infused with the essence of saffron, garlic, and tomatoes. Served piping hot with a side of crusty bread and zesty rouille sauce, our Bouillabaisse is a culinary masterpiece that transports you to the sun-drenched shores of Provence with every delicious bite.",
                        price: 15.7,
                        previousPrice: 17.8
                    },
                    {
                        id: 8127,
                        title: "Onion Soup",
                        image: food + "lebistrot-onion-soup.webp",
                        mealInfo: "Served piping hot in a crock topped with golden, melted cheese, each spoonful is a comforting embrace of rich, caramelized onions simmered to perfection in a savory beef broth. The aroma of toasted bread mingling with the sweet and savory flavors creates a symphony for the senses that warms you from the inside out. Whether you're seeking solace on a chilly evening or simply craving a taste of culinary nostalgia, our French onion soup promises to delight with its hearty goodness and soul-soothing warmth. Dive into a bowl of tradition and experience the timeless charm of this beloved dish today!",
                        price: 10.5,
                        previousPrice: null
                    },
                    {
                        id: 3372,
                        title: "Quiche Lorraine",
                        image: food + "lebistrot-quiche-lorraine.webp",
                        mealInfo: "This savory delight features a buttery, flaky crust filled with a luscious custard made from creamy eggs, rich cream, and savory Swiss cheese. Each bite is a harmonious blend of smoky bacon and sweet caramelized onions, enveloped in a velvety custard that melts in your mouth. Served warm or cold, our Quiche Lorraine is the epitome of comfort food sophistication, perfect for brunch, lunch, or a light dinner. Experience the timeless charm of this French classic and savor the simple elegance of our Quiche Lorraine today!",
                        price: 13.0,
                        previousPrice: 15.5
                    },
                    {
                        id: 5078,
                        title: "Salmon en Papillote",
                        image: food + "lebistrot-salmon-en-papillote.webp",
                        mealInfo: "Our Salmon en Papillote features fresh salmon fillets nestled on a bed of veggies and herbs, wrapped in parchment paper to seal in flavors. Unveil perfectly cooked salmon infused with lemon, garlic, and herbs, creating a symphony of textures and flavors. Elegant and flavorful, it's a feast for the senses.",
                        price: 17.0,
                        previousPrice: null
                    }
                ]
            },
            {
                type: "Desserts",
                list: [
                    {
                        id: 7997,
                        title: "Macarrons",
                        image: food + "lebistrot-macarrons.webp",
                        mealInfo: "Indulge in our French macarons, with their delicate exterior and soft, chewy center. Crafted from the finest almond flour, these bite-sized treats come in a variety of vibrant flavors, from classic pistachio to exotic passion fruit. Perfect for any occasion, our macarons promise an irresistible blend of charm and flavor. Treat yourself to a taste of Parisian perfection today!",
                        price: 3.0,
                        previousPrice: 3.8
                    },
                    {
                        id: 5898,
                        title: "Chocolate Cake",
                        image: food + "lebistrot-chocolate-cake.webp",
                        mealInfo: "Indulge in our decadent French Chocolate Cake, handcrafted with the finest French chocolate. Each slice offers a rich symphony of velvety cocoa flavors, complemented by layers of silky ganache. Topped with cocoa powder and chocolate curls, it's visually stunning and irresistibly delicious. Whether for a special occasion or a simple treat, our cake promises pure bliss with every bite. Experience French pastry artistry and savor the divine pleasure today.",
                        price: 5.8,
                        previousPrice: null
                    },
                    {
                        id: 3378,
                        title: "Lemon Pie",
                        image: food + "lebistrot-lemonpie.webp",
                        mealInfo: "Savor the zesty brightness of summer with our Lemon Pie, a delightful confection that embodies the essence of sunshine in every bite. Nestled within a flaky, buttery crust lies a velvety lemon filling, bursting with tangy citrus flavor and balanced with just the right amount of sweetness. Each slice is crowned with a cloud of whipped cream or a dusting of powdered sugar, adding a touch of elegance to this classic treat. Whether you're indulging in a slice after a leisurely dinner or sharing it with loved ones during a festive gathering, our Lemon Pie promises to uplift your spirits and tantalize your taste buds with its refreshing zest. Dive into a slice of summer bliss and experience the joy of our irresistible Lemon Pie today!",
                        price: 2.4,
                        previousPrice: null
                    },
                    {
                        id: 8384,
                        title: "Pudding",
                        image: food + "lebistrot-pudding.webp",
                        mealInfo: "Indulge in creamy decadence with our irresistible pudding! Each spoonful of this velvety dessert is a luxurious experience, offering a perfect balance of smooth texture and rich flavor. Whether you prefer classic vanilla, indulgent chocolate, or exotic flavors like butterscotch or coconut, our pudding is sure to satisfy your sweet tooth and leave you craving more. Served chilled and topped with a dollop of whipped cream or a sprinkle of your favorite toppings, our pudding is the ultimate comfort food treat for any occasion. Treat yourself to a moment of pure indulgence and experience the heavenly delight of our delicious pudding today!",
                        price: 2.0,
                        previousPrice: 2.3
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
                stars: 4,
                comment: "Great!"
            },
            {
                name: "Monica",
                photo: user + "user09.webp",
                stars: 5,
                comment: "Magnifique! I ordered some lunch and I found them really tasty."
            },
            {
                name: "Beth",
                photo: user + "user10.webp",
                stars: 3,
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
                type: "Lunch & Dinner",
                list: [
                    {
                        id: 1240,
                        title: "Pasta with Shrimps",
                        image: food + "mermaids-pasta-shrimps.webp",
                        mealInfo: "Savor the taste of the sea with our exquisite shrimp pasta dish! Succulent shrimp sautéed with garlic and cherry tomatoes, tossed in al dente pasta and a savory white wine sauce. Finished with a sprinkle of fresh parsley and a squeeze of lemon, it's a burst of flavor in every bite. Dive into a culinary delight that's sure to satisfy your cravings!",
                        price: 12.3,
                        previousPrice: 13.0
                    },
                    {
                        id: 3570,
                        title: "Lobster with Fries",
                        image: food + "mermaids-lobster-fries.webp",
                        mealInfo: "Indulge in luxury with our Lobster and Fries dish! Succulent lobster tail, perfectly grilled to tender perfection, served alongside golden, crispy fries. Each bite is a harmonious blend of rich, buttery lobster meat and the satisfying crunch of perfectly seasoned fries. Accompanied by a side of tangy lemon aioli for dipping, this dish is a true celebration of surf and turf. Treat yourself to a taste of culinary bliss with our Lobster and Fries today!",
                        price: 17.9,
                        previousPrice: 20.0
                    },
                    {
                        id: 9071,
                        title: "Pasta with Mussels",
                        image: food + "mermaids-pasta-mussels.webp",
                        mealInfo: "Delight in the flavors of the ocean with our Pasta with Mussels dish! Tender, plump mussels simmered in a fragrant garlic and white wine sauce, served over a bed of al dente pasta. Each forkful is a symphony of savory seafood goodness, accented by the subtle sweetness of the mussels and the aromatic blend of herbs and spices. Finished with a sprinkle of fresh parsley and a squeeze of lemon, it's a taste of coastal indulgence you won't soon forget. Dive into a culinary adventure with our Pasta with Mussels today!",
                        price: 15.0,
                        previousPrice: null
                    },
                    {
                        id: 5402,
                        title: "Rice and Fish",
                        image: food + "mermaids-rice-fish.webp",
                        mealInfo: "Savor the fusion of land and sea with our Rice with Fish dish! Succulent pieces of tender fish, perfectly seasoned and nestled atop a bed of fluffy, fragrant rice. Each bite is a harmony of flavors, with the delicate sweetness of the fish complementing the savory richness of the rice. Enhanced with a medley of vibrant herbs and spices, it's a culinary journey that delights the senses and satisfies the palate. Dive into a world of flavor with our Rice with Fish today!",
                        price: 10.0,
                        previousPrice: null
                    }
                ]
            },
            {
                type: "Desserts",
                list: [
                    {
                        id: 6228,
                        title: "Banana with Ice Cream",
                        image: food + "mermaids-banana-icecream.webp",
                        mealInfo: "Indulge in a classic treat with our Banana with Ice Cream dessert! Sweet, ripe bananas, sliced and served alongside a generous scoop of creamy vanilla ice cream. Each bite is a delightful contrast of warm, caramelized banana and cool, velvety ice cream, creating a symphony of flavors and textures that dance on your palate. Topped with a drizzle of rich chocolate sauce and a sprinkle of crunchy nuts, it's a decadent delight that's sure to satisfy your sweet cravings. Treat yourself to a taste of nostalgia with our Banana with Ice Cream dessert today!",
                        price: 4.0,
                        previousPrice: null
                    },
                    {
                        id: 4099,
                        title: "Chocolate Mousse",
                        image: food + "mermaids-chocolate-mousse.webp",
                        mealInfo: "Indulge in decadence with our Chocolate Mousse dessert! Silky-smooth and irresistibly rich, each spoonful is a heavenly delight. Crafted from the finest cocoa and whipped to perfection, it's a velvety symphony of flavor that melts in your mouth. Garnished with a dollop of freshly whipped cream and a sprinkle of chocolate shavings, it's a luxurious treat that's sure to satisfy your sweet tooth. Dive into bliss with our Chocolate Mousse today!",
                        price: 2.8,
                        previousPrice: null
                    },
                    {
                        id: 6162,
                        title: "Pistacchio Pie",
                        image: food + "mermaids-pistacchio-pie.webp",
                        mealInfo: "Treat yourself to a slice of pure indulgence with our Pistachio Pie dessert! Each mouthwatering bite features a flaky, buttery crust filled with a luxurious pistachio filling that's creamy, nutty, and utterly irresistible. Topped with a cloud of whipped cream and a sprinkle of crushed pistachios, it's a symphony of flavor and texture that will delight your senses. Dive into a slice of pistachio perfection and experience the bliss of our decadent Pistachio Pie today!",
                        price: 4.4,
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
                type: "Snacks",
                list: [
                    {
                        id: 6765,
                        title: "Hot Dog",
                        image: food + "hungrydude-hotdog.webp",
                        mealInfo: "Indulge in the classic delight of a hot dog: a savory sausage nestled in a soft bun, adorned with your favorite toppings. Its juicy, flavorful bite offers a symphony of tastes and textures, from the snap of the casing to the comforting embrace of the bun. Whether enjoyed at a ballgame or a backyard barbecue, this timeless treat satisfies cravings and sparks joy with every delicious bite.",
                        price: 5,
                        previousPrice: null
                    },
                    {
                        id: 7429,
                        title: "Pizza Slice",
                        image: food + "hungrydude-pizza.webp",
                        mealInfo: "Savor the irresistible allure of pizza: a delectable medley of flavors atop a golden crust. Each slice offers a harmonious blend of tangy tomato sauce, melted mozzarella cheese, and an array of mouthwatering toppings. From classic pepperoni to gourmet combinations, every bite is a journey through layers of savory satisfaction. Whether shared with friends or savored solo, pizza transcends mere food—it's a culinary experience that ignites the senses and brings joy to every palate.",
                        price: 2.5,
                        previousPrice: null
                    },
                    {
                        id: 9682,
                        title: "Chicken Nuggets with Fries",
                        image: food + "hungrydude-nuggets.webp",
                        mealInfo: "Treat yourself to the ultimate comfort food combo: chicken nuggets and fries nestled in a convenient box. Crispy on the outside, tender on the inside, each golden nugget is a burst of savory perfection. Paired with a generous serving of hot, crispy fries, it's a match made in fast-food heaven. Whether dipped in tangy sauce or enjoyed on their own, every bite is a delightful symphony of flavor and texture. Perfect for a quick meal on the go or a satisfying indulgence any time of day.",
                        price: 7.3,
                        previousPrice: null
                    },
                    {
                        id: 4094,
                        title: "Fries",
                        image: food + "hungrydude-fries.webp",
                        mealInfo: "Delight in the timeless allure of French fries: golden, crispy, and irresistibly delicious. Each bite offers a tantalizing contrast of textures—crunchy exterior giving way to fluffy, potato perfection within. Whether enjoyed solo or paired with your favorite dipping sauce, these iconic fries are a universal symbol of indulgence and satisfaction. From fast-food joints to upscale eateries, they're a beloved side dish that never fails to please. Treat yourself to the simple pleasure of French fries and experience pure culinary bliss.",
                        price: 3.5,
                        previousPrice: 3.9
                    },
                    {
                        id: 3090,
                        title: "Hamburguer",
                        image: food + "hungrydude-hamburguer.webp",
                        mealInfo: "Satisfy your cravings with the quintessential classic: the hamburger. A juicy, flame-grilled patty nestled between two soft buns, adorned with crisp lettuce, ripe tomatoes, and tangy pickles. Each bite is a symphony of flavors, from the savory meat to the creamy cheese and zesty condiments. Whether enjoyed at a diner, food truck, or backyard barbecue, this iconic sandwich is a timeless favorite that never fails to please. Indulge in the delicious simplicity of a hamburger and experience culinary bliss with every bite.",
                        price: 8,
                        previousPrice: 10
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
                type: "Breakfast",
                list: [
                    {
                        id: 5716,
                        title: "Blueberry Baked Oatmeal",
                        image: food + "vegangarden-blueberry-oatmeal.webp",
                        mealInfo: "Indulge in the comforting embrace of Blueberry Baked Oatmeal—a wholesome blend of hearty oats, plump blueberries, and fragrant spices, baked to golden perfection. With each spoonful, savor the warm, gooey texture complemented by bursts of sweet-tart blueberries. This nourishing dish is a delicious marriage of wholesome ingredients and cozy flavors, perfect for a leisurely breakfast or a cozy brunch with loved ones. Whether enjoyed fresh from the oven or reheated for a comforting treat, Blueberry Baked Oatmeal is sure to warm both body and soul with its comforting embrace.",
                        price: 4.7,
                        previousPrice: 15.8
                    },
                    {
                        id: 9681,
                        title: "Black Coffee with Toasts",
                        image: food + "vegangarden-coffee.webp",
                        mealInfo: "Kickstart your day with a simple yet satisfying breakfast: a steaming cup of black coffee paired with crisp, golden toasts. Savor the bold, robust flavors of the coffee as it invigorates your senses, while the toasts offer a satisfying crunch with each bite. Whether enjoyed as a quick morning pick-me-up or a leisurely start to your day, this classic combination is sure to fuel your adventures ahead. Simple, comforting, and undeniably delicious, it's the perfect way to embrace the morning and seize the day.",
                        price: 2,
                        previousPrice: null
                    },
                    {
                        id: 4658,
                        title: "Fruit Salad",
                        image: food + "vegangarden-fruit-salad.webp",
                        mealInfo: "Delight in the vibrant freshness of a fruit salad bowl—a colorful medley of nature's finest bounty, featuring juicy watermelon chunks, sweet strawberries, tangy pineapple slices, and succulent grapes. Each spoonful is a burst of flavor and vitality, offering a refreshing blend of textures and tastes. Drizzled with a hint of honey and sprinkled with crunchy granola for added texture, this bowl is a celebration of wholesome goodness. Whether enjoyed as a light breakfast, a refreshing snack, or a guilt-free dessert, it's a delightful way to nourish the body and awaken the senses with every spoonful.",
                        price: 5.5,
                        previousPrice: 7
                    }
                ]
            },
            {
                type: "Lunch",
                list: [
                    {
                        id: 6808,
                        title: "Avocado Mix",
                        image: food + "vegangarden-avocado-mix.webp",
                        mealInfo: "Elevate your taste buds with a refreshing avocado salad: a vibrant medley of creamy avocado slices, crisp mixed greens, juicy cherry tomatoes, and zesty red onions, drizzled with a tangy vinaigrette. Each forkful bursts with freshness and flavor, marrying the rich creaminess of avocado with the bright acidity of the dressing. Packed with nutrients and bursting with color, this salad is a celebration of wholesome ingredients that nourish the body and delight the senses. Enjoy it as a light lunch or a refreshing side dish, and savor the goodness of nature's bounty in every bite.",
                        price: 15.5,
                        previousPrice: 15.8
                    },
                    {
                        id: 5423,
                        title: "Pasta with Mushrooms",
                        image: food + "vegangarden-pasta-mushrooms.webp",
                        mealInfo: "Indulge in a culinary symphony of flavors with a tantalizing pasta and mushrooms dish. Tender pasta ribbons cradle earthy, sautéed mushrooms, bathed in a luscious garlic-infused olive oil sauce. Each bite offers a harmonious blend of textures and tastes, from the hearty mushrooms to the al dente pasta. Finished with a sprinkle of Parmesan cheese and fresh herbs, this dish is a celebration of rustic elegance that satisfies the palate and comforts the soul. Whether enjoyed as a cozy weeknight dinner or a gourmet feast, it's sure to delight even the most discerning of food lovers.",
                        price: 12.7,
                        previousPrice: null
                    },
                    {
                        id: 9872,
                        title: "Rice with Broccoli",
                        image: food + "vegangarden-rice-broccoli.webp",
                        mealInfo: "Delight in the simplicity of a rice and broccoli dish—a harmonious blend of fluffy rice grains and vibrant broccoli florets, tossed in a fragrant seasoning. Each forkful offers a delightful contrast of textures, from the tender rice to the crisp-tender broccoli. Enhanced with a hint of garlic and a splash of soy sauce, this dish is a testament to wholesome comfort and nourishing simplicity. Whether enjoyed as a satisfying side or a hearty main course, it's a deliciously wholesome addition to any mealtime repertoire.",
                        price: 8,
                        previousPrice: null
                    },
                    {
                        id: 4108,
                        title: "Tomato Salad",
                        image: food + "vegangarden-tomato-salad.webp",
                        mealInfo: "Experience the vibrant freshness of a tomato salad: ripe, juicy tomatoes bursting with flavor, paired with crisp cucumber slices and thinly sliced red onions. Drizzled with a tangy balsamic vinaigrette and garnished with fragrant basil leaves, each bite is a symphony of summer goodness. Simple yet satisfying, this salad celebrates the essence of ripe tomatoes, offering a burst of sunshine in every mouthful. Enjoy it as a refreshing side dish or a light and healthy lunch, and savor the taste of the season with every forkful.",
                        price: 9.3,
                        previousPrice: 10.5
                    }
                ]
            },
            {
                type: "Desserts",
                list: [
                    {
                        id: 3865,
                        title: "Natural Mango Popsicle",
                        image: food + "vegangarden-mango-popsicle.webp",
                        mealInfo: "Indulge in the tropical delight of our natural mango popsicle. Bursting with the sweet, juicy essence of sun-ripened mangoes, each lick delivers a refreshing taste of summer. Made with real fruit, it's a guilt-free treat to beat the heat!",
                        price: 3,
                        previousPrice: 3.5
                    },
                    {
                        id: 4284,
                        title: "Waffles with blueberry jam",
                        image: food + "vegangarden-waffles.webp",
                        mealInfo: "Savor the perfect blend of crispiness and sweetness with our delectable waffles topped with luscious blueberry jam. Each bite is a symphony of flavors, marrying the warm, fluffy waffle texture with the tangy sweetness of ripe blueberries. Breakfast bliss awaits!",
                        price: 5.7,
                        previousPrice: null
                    },
                    {
                        id: 8501,
                        title: "Chocolate Cake with Nuts",
                        image: food + "vegangarden-chocolate-cake.webp",
                        mealInfo: "Indulge guilt-free in our decadent vegan chocolate cake adorned with an array of crunchy nuts. Rich cocoa flavors meld with the nutty goodness of almonds, walnuts, and hazelnuts, creating a symphony of taste and texture in every bite. A cruelty-free delight for chocolate lovers everywhere!",
                        price: 3.5,
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
    },
    {
        id: 6,
        title: "Itadakimasu",
        image: place + "itadakimasu.webp",
        tag: true,
        vegan: false,
        meals: ["Dinner"],
        description: "Welcome to Itadakimasu, where culinary artistry meets traditional Japanese flavors in a contemporary setting. Nestled in the heart of bustling streets, our restaurant offers a serene escape into the essence of Japan. As you step inside, the ambiance envelops you with minimalist décor, accentuated by subtle nods to Japanese culture. The menu, a harmonious blend of time-honored recipes and innovative twists, promises a gastronomic journey through the Land of the Rising Sun. From delicate sushi rolls crafted with the freshest seafood to sizzling teppanyaki plates that ignite the senses, each dish is a masterpiece, meticulously prepared by our skilled chefs. Indulge in the rich umami of miso-glazed black cod or savor the comforting warmth of steaming bowls of ramen, brimming with savory broth and tender noodles. Accompany your meal with a selection from our curated sake list, offering a spectrum of flavors to complement every palate. Whether you're seeking a romantic dinner for two or a lively gathering with friends, Itadakimasu invites you to savor the flavors of Japan with every bite, uttering gratitude for the meal about to be enjoyed.",
        menu: [
            {
                type: "Dinner",
                list: [
                    {
                        id: 8214,
                        title: "Sushi",
                        image: food + "itadakimasu-sushi.webp",
                        mealInfo: "Introducing Ocean Symphony - a vibrant sushi ensemble at Itadakimasu. Each piece is a harmonious blend of fresh, melt-in-your-mouth sashimi, nestled atop seasoned rice pillows. From buttery salmon to delicate tuna, every bite sings with the essence of the sea, accompanied by a crescendo of wasabi and soy. Dive into this culinary symphony and let your taste buds dance to the rhythm of the ocean.",
                        price: 20,
                        previousPrice: null
                    },
                    {
                        id: 3896,
                        title: "Ramen",
                        image: food + "itadakimasu-ramen.webp",
                        mealInfo: "Experience Noodle Nirvana at Itadakimasu with our signature ramen dish. Delicate strands of hand-pulled noodles swim in a rich, savory broth, infused with the soul-warming essence of slow-simmered pork bone and fragrant spices. Topped with tender slices of chashu pork, perfectly soft-boiled egg, and crisp greens, each spoonful is a journey to culinary bliss, leaving you longing for just one more slurp.",
                        price: 10.3,
                        previousPrice: null
                    },
                    {
                        id: 3480,
                        title: "Sashimi",
                        image: food + "itadakimasu-sashimi.webp",
                        mealInfo: "Introducing Sashimi Symphony at Itadakimasu. A masterpiece of simplicity and elegance, this dish features an exquisite selection of pristine sashimi slices, meticulously arranged to showcase the ocean's bounty. From velvety salmon to buttery tuna, each bite offers a delicate dance of flavors, accented by fresh wasabi and tangy soy sauce. Immerse yourself in the pure essence of seafood perfection with every sublime mouthful.",
                        price: 17.9,
                        previousPrice: 7
                    },
                    {
                        id: 7412,
                        title: "Curry Rice",
                        image: food + "itadakimasu-curry.webp",
                        mealInfo: "Introducing Curry Comfort at Itadakimasu. This dish is a cozy embrace of aromatic curry sauce, blanketing fluffy Japanese rice and tender chunks of succulent chicken or vegetables. Each spoonful is a symphony of flavors, with the perfect balance of spice and warmth, offering a comforting hug in every bite. Dive into this soul-soothing dish and let its rich, savory goodness transport you to a place of pure culinary bliss.",
                        price: 12,
                        previousPrice: 13.7
                    }
                ]
            }
        ],
        reviews: [
            {
                name: "Josh",
                photo: user + "user44.webp",
                stars: 5,
                comment: "Amazing food! Arigato"
            },
            {
                name: "Nina",
                photo: user + "user45.webp",
                stars: 5,
                comment: "The ramen is just incredible. That's my favorite restaurant."
            },
            {
                name: "Sandra",
                photo: user + "user46.webp",
                stars: 5,
                comment: "Excellent!!!!"
            },
            {
                name: "Sindy",
                photo: null,
                stars: 5,
                comment: "Just delicious."
            },
            {
                name: "Ricardo",
                photo: null,
                stars: 4,
                comment: "Their food is really tasty, you should give it a try."
            },
            {
                name: "Alexa",
                photo: user + "user47.webp",
                stars: 5,
                comment: "I tried the sushi and I gotta say it is the best one I've had in my life!"
            },
            {
                name: "Giovanna",
                photo: null,
                stars: 5,
                comment: "I love Japanese food."
            },
            {
                name: "Paula",
                photo: user + "user48.webp",
                stars: 5,
                comment: "Incredible!"
            },
            {
                name: "Danilo",
                photo: user + "user49.webp",
                stars: 4,
                comment: "Although their menu is a little expensive, their food is good."
            },
            {
                name: "Doug",
                photo: user + "user50.webp",
                stars: 5,
                comment: "I had never tried Japanese food before, now I'm a huge fan."
            },
            {
                name: "Breno",
                photo: null,
                stars: 5,
                comment: "Yummy!"
            },
            {
                name: "Lolla",
                photo: user + "user51.webp",
                stars: 5,
                comment: "I'm amazed! Their ramen is so tasty that made me order it every weekend."
            },
            {
                name: "Maria",
                photo: user + "user52.webp",
                stars: 5,
                comment: "My favorite restaurant."
            },
            {
                name: "Marvin",
                photo: user + "user53.webp",
                stars: 5,
                comment: "I really like the restaurant."
            }
        ]
    },
    {
        id: 7,
        title: "Meu Brasil",
        image: place + "meubrasil.webp",
        tag: false,
        vegan: false,
        meals: ["Lunch", "Desserts"],
        description: "Meu Brasil invites you on a culinary journey through the vibrant flavors of Brazil. Nestled in the heart of [city], our restaurant celebrates the rich tapestry of Brazilian cuisine, from the fiery spices of Bahia to the smoky meats of the South. Savor traditional dishes like feijoada and moqueca, expertly crafted with authentic ingredients and passion. With warm hospitality and a lively atmosphere, Meu Brasil is your passport to an unforgettable dining experience, where every bite tells a story of Brazilian culture and heritage.",
        menu: [
            {
                type: "Lunch",
                list: [
                    {
                        id: 5202,
                        title: "Feijoada",
                        image: food + "meubrasil-feijoada.webp",
                        mealInfo: "Indulge in the quintessential Brazilian comfort food - Feijoada. A hearty stew of black beans, pork, and sausage, simmered to perfection with spices and served with rice, collard greens, and orange slices. Experience the soulful flavors of Brazil in every savory spoonful.",
                        price: 11,
                        previousPrice: null
                    },
                    {
                        id: 8913,
                        title: "Rice and Churrasco",
                        image: food + "meubrasil-churrasco.webp",
                        mealInfo: "Savor the essence of Brazilian barbecue with our mouthwatering rice and barbecue meat dish. Juicy cuts of grilled meat, seasoned to perfection, paired with fluffy rice for a delightful fusion of flavors. An irresistible combination that will transport your taste buds to the heart of Brazil with every bite.",
                        price: 7,
                        previousPrice: null
                    },
                    {
                        id: 1564,
                        title: "Rice, Fish and Pirão",
                        image: food + "meubrasil-rice-fish.webp",
                        mealInfo: "Delight in the freshness of the sea with our tantalizing rice and fish dish. Tender, flaky fish served atop a bed of fragrant rice, infused with aromatic spices and herbs. A symphony of flavors that captures the essence of coastal Brazil in every satisfying bite.",
                        price: 13.9,
                        previousPrice: 14.9
                    }
                ]
            },
            {
                type: "Desserts",
                list: [
                    {
                        id: 3642,
                        title: "Brigadeiro",
                        image: food + "meubrasil-brigadeiro.webp",
                        mealInfo: "Indulge in the sweet sensation of Brazil with Brigadeiro. These delectable chocolate truffles, rolled in sprinkles, offer a rich and velvety texture with every bite. A beloved Brazilian treat, perfect for satisfying your sweet cravings and sharing moments of joy with loved ones.",
                        price: 1.5,
                        previousPrice: null
                    },
                    {
                        id: 4385,
                        title: "Bolo de Rolo",
                        image: food + "meubrasil-bolo-rolo.webp",
                        mealInfo: "Treat yourself to the exquisite taste of Brazil with Bolo de Rolo. This delicate rolled cake features thin layers of sweet dough swirled with rich guava paste, creating a heavenly blend of flavors. A beloved Brazilian delicacy that's as visually stunning as it is delicious.",
                        price: 3,
                        previousPrice: null
                    },
                    {
                        id: 4503,
                        title: "Açaí bowl",
                        image: food + "meubrasil-acai.webp",
                        mealInfo: "Fuel your day with the vibrant energy of Brazil with our Açaí Bowl. Packed with antioxidants and nutrients, this luscious blend of frozen açaí, topped with fresh fruits, granola, and honey, is a nutritious powerhouse that revitalizes your body and delights your taste buds. Embrace the taste of vitality in every spoonful.",
                        price: 7,
                        previousPrice: 7.5
                    }
                ]
            }
        ],
        reviews: [
            {
                name: "Carla",
                photo: user + "user54.webp",
                stars: 5,
                comment: "I love the spice."
            },
            {
                name: "Maria",
                photo: user + "user55.webp",
                stars: 5,
                comment: "Their food is so exotic, I had a great time eating the Feijoada."
            },
            {
                name: "Hellen",
                photo: user + "user56.webp",
                stars: 4,
                comment: "I like it a lot."
            },
            {
                name: "Wanda",
                photo: user + "user57.webp",
                stars: 5,
                comment: "Great great great!"
            },
            {
                name: "Brenda",
                photo: user + "user58.webp",
                stars: 4,
                comment: "Really tasty."
            },
            {
                name: "Tina",
                photo: user + "user59.webp",
                stars: 5,
                comment: "My fav!"
            },
            {
                name: "Hugo",
                photo: user + "user60.webp",
                stars: 5,
                comment: "You really gotta try Bolo de Rolo. I ate that when I was in Brazil last year and now I had the change to eat that again."
            },
            {
                name: "Sawyer",
                photo: null,
                stars: 5,
                comment: "Amazing!"
            },
            {
                name: "Kate",
                photo: user + "user61.webp",
                stars: 4,
                comment: "They make such tasty dishes, my favorite is the feijoada and the açaí, of course!"
            },
            {
                name: "Rodrigo",
                photo: user + "user62.webp",
                stars: 5,
                comment: "My favorite BR restaurant."
            },
            {
                name: "David",
                photo: null,
                stars: 5,
                comment: "I enjoyed it."
            },
            {
                name: "Antonio",
                photo: user + "user63.webp",
                stars: 5,
                comment: "The dessert is really sweet, but I like it."
            },
            {
                name: "Kevin",
                photo: user + "user64.webp",
                stars: 5,
                comment: "Good food at good price."
            },
            {
                name: "Mariana",
                photo: user + "user65.webp",
                stars: 5,
                comment: "I have tried all the desserts and I gotta say I'm in love with this restaurant."
            }
        ]
    }
];

export default items