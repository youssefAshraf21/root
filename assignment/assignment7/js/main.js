var recipes = [
    {
        name: "Greek Moussaka",
        image: "img/greekMoussaka.jfif",
        rate: 4.8,
        prepTime: "30 min",
        cookTime: "60 min",
        servings: "4 people",
        padgeOne: "Intermediate",
        padgeTwo: "Mediterranean",
        recipeDes: "Traditional layered eggplant casserole with lamb",
        ingredients: [
            "3 large eggplants, sliced",
            "500g ground lamb",
            "400g canned tomatoes",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "500ml bechamel sauce",
            "100g parmesan cheese",
            "Cinnamon and oregano",
            "Olive oil"
        ],
        instructions: [
            "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
            "Brush eggplant slices with olive oil, grill or bake until softened.",
            "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
            "Preheat oven to 180°C (350°F).",
            "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with bechamel and parmesan.",
            "Bake for 45 minutes until golden. Let rest 15 minutes before serving."
        ],
        nurtition: [
            "380 kcal",
            "28g",
            "0g",
            "35g",
            "14g",
            "720mg"
        ],
        chefTrips: [
            "Salt eggplant to remove bitterness",
            "Don't skip the resting time - it helps set the layers",
            "Use ground beef if lamb is unavailable",
            "Make ahead and reheat for easier serving"
        ]
    },
    {
        name: "Pad Thai",
        image: "img/padThai.jfif",
        rate: 4.8,
        prepTime: "20 min",
        cookTime: "15 min",
        servings: "2 people",
        padgeOne: "Intermediate",
        padgeTwo: "Asian",
        recipeDes: "Popular Thai stir-fried noodles with shrimp and peanuts",
        ingredients: [
            "200g rice noodles",
            "200g shrimp, peeled",
            "2 eggs",
            "3 tablespoons tamarind paste",
            "2 tablespoons fish sauce",
            "1 tablespoon palm sugar",
            "Bean sprouts",
            "Crushed peanuts",
            "Lime wedges and cilantro"
        ],
        instructions: [
            "Soak rice noodles in warm water until soft, about 20 minutes. Drain.",
            "Mix tamarind paste, fish sauce, and palm sugar in a small bowl for the sauce.",
            "Heat oil in a wok, cook shrimp until pink, push to one side.",
            "Crack eggs into the wok and scramble, then mix with shrimp.",
            "Add noodles and sauce, toss until coated and noodles are tender.",
            "Add bean sprouts, toss briefly, then serve topped with peanuts, lime, and cilantro."
        ],
        nurtition: [
            "420 kcal",
            "18g",
            "55g",
            "22g",
            "10g",
            "890mg"
        ],
        chefTrips: [
            "Don't over-soak the noodles or they'll turn mushy",
            "Have all ingredients prepped before you start - it cooks fast",
            "Adjust tamarind and sugar to balance sour and sweet",
            "Use a very hot wok for the best texture"
        ]
    },
    {
        name: "Chicken Tikka Masala",
        image: "img/chickenTikkaMasala.jfif",
        rate: 4.7,
        prepTime: "25 min",
        cookTime: "35 min",
        servings: "4 people",
        padgeOne: "Intermediate",
        padgeTwo: "Indian",
        recipeDes: "Grilled marinated chicken in a creamy spiced tomato sauce",
        ingredients: [
            "600g chicken breast, cubed",
            "200g plain yogurt",
            "400g canned tomatoes",
            "200ml heavy cream",
            "1 onion, diced",
            "4 cloves garlic, minced",
            "1 tablespoon ginger, grated",
            "Garam masala, cumin, and paprika",
            "Fresh cilantro"
        ],
        instructions: [
            "Marinate chicken in yogurt, garlic, ginger, and spices for at least 1 hour.",
            "Grill or pan-sear chicken until charred and cooked through. Set aside.",
            "Sauté onion until soft, add garlic, ginger, and remaining spices.",
            "Add tomatoes and simmer for 15 minutes, then blend until smooth.",
            "Stir in cream and cooked chicken, simmer for 10 minutes.",
            "Garnish with cilantro and serve with rice or naan."
        ],
        nurtition: [
            "460 kcal",
            "32g",
            "18g",
            "30g",
            "20g",
            "610mg"
        ],
        chefTrips: [
            "Marinate overnight for deeper flavor",
            "Char the chicken well - it adds smokiness to the sauce",
            "Use full-fat yogurt so it doesn't curdle on the grill",
            "Blend the sauce for a smoother, restaurant-style texture"
        ]
    },
    {
        name: "Beef Tacos",
        image: "img/beefTacos.jfif",
        rate: 4.6,
        prepTime: "15 min",
        cookTime: "20 min",
        servings: "3 people",
        padgeOne: "Easy",
        padgeTwo: "Mexican",
        recipeDes: "Seasoned ground beef tacos with fresh toppings",
        ingredients: [
            "500g ground beef",
            "8 small tortillas",
            "1 onion, diced",
            "2 tomatoes, diced",
            "1 cup shredded lettuce",
            "100g shredded cheese",
            "Cumin, chili powder, and paprika",
            "Sour cream",
            "Lime wedges"
        ],
        instructions: [
            "Cook ground beef with onion until browned, draining excess fat.",
            "Season with cumin, chili powder, and paprika. Simmer 5 minutes.",
            "Warm tortillas in a dry pan or oven.",
            "Fill tortillas with beef, then top with lettuce, tomato, and cheese.",
            "Add a dollop of sour cream and a squeeze of lime before serving."
        ],
        nurtition: [
            "410 kcal",
            "24g",
            "28g",
            "22g",
            "16g",
            "540mg"
        ],
        chefTrips: [
            "Toast tortillas lightly for better texture",
            "Drain the beef fat well to avoid soggy tacos",
            "Prep toppings ahead for quick assembly",
            "Double the seasoning for extra bold flavor"
        ]
    },
    {
        name: "Margherita Pizza",
        image: "img/margheritaPizza.jfif",
        rate: 4.9,
        prepTime: "20 min",
        cookTime: "15 min",
        servings: "2 people",
        padgeOne: "Easy",
        padgeTwo: "Italian",
        recipeDes: "Classic pizza with tomato, fresh mozzarella, and basil",
        ingredients: [
            "1 pizza dough ball",
            "150ml tomato sauce",
            "200g fresh mozzarella, sliced",
            "Fresh basil leaves",
            "2 tablespoons olive oil",
            "Salt to taste"
        ],
        instructions: [
            "Preheat oven to the highest setting with a pizza stone or tray inside.",
            "Roll out the dough into a thin round base.",
            "Spread tomato sauce evenly, leaving a border for the crust.",
            "Add mozzarella slices and drizzle with olive oil.",
            "Bake for 10-15 minutes until the crust is golden and cheese is bubbling.",
            "Top with fresh basil leaves before serving."
        ],
        nurtition: [
            "310 kcal",
            "14g",
            "36g",
            "12g",
            "6g",
            "480mg"
        ],
        chefTrips: [
            "Use a very hot oven for a crispy crust",
            "Don't overload with sauce or the base will get soggy",
            "Add basil after baking to keep it fresh and green",
            "Let dough rest at room temperature before rolling"
        ]
    },
    {
        name: "Caesar Salad",
        image: "img/caesarSalad.jfif",
        rate: 4.5,
        prepTime: "15 min",
        cookTime: "10 min",
        servings: "2 people",
        padgeOne: "Easy",
        padgeTwo: "American",
        recipeDes: "Crisp romaine lettuce with creamy dressing and croutons",
        ingredients: [
            "1 head romaine lettuce, chopped",
            "50g parmesan cheese, shaved",
            "1 cup bread cubes for croutons",
            "2 tablespoons mayonnaise",
            "1 clove garlic, minced",
            "1 teaspoon Dijon mustard",
            "1 tablespoon lemon juice",
            "Olive oil"
        ],
        instructions: [
            "Toss bread cubes with olive oil and bake until golden to make croutons.",
            "Whisk mayonnaise, garlic, mustard, and lemon juice into a dressing.",
            "Toss chopped romaine with the dressing until evenly coated.",
            "Top with croutons and shaved parmesan before serving."
        ],
        nurtition: [
            "290 kcal",
            "9g",
            "18g",
            "22g",
            "6g",
            "520mg"
        ],
        chefTrips: [
            "Make croutons fresh for the best crunch",
            "Chill the lettuce before tossing to keep it crisp",
            "Add grilled chicken for a heartier meal",
            "Shave the parmesan rather than grating for texture"
        ]
    },
    {
        name: "Vegetable Stir Fry",
        image: "img/vegetableStirFry.jfif",
        rate: 4.4,
        prepTime: "15 min",
        cookTime: "10 min",
        servings: "3 people",
        padgeOne: "Easy",
        padgeTwo: "Asian",
        recipeDes: "Quick and colorful mixed vegetables in a savory sauce",
        ingredients: [
            "1 broccoli head, cut into florets",
            "1 carrot, sliced",
            "1 red bell pepper, sliced",
            "100g snap peas",
            "3 tablespoons soy sauce",
            "1 tablespoon sesame oil",
            "2 cloves garlic, minced",
            "1 tablespoon ginger, grated",
            "Sesame seeds"
        ],
        instructions: [
            "Heat sesame oil in a wok over high heat.",
            "Add garlic and ginger, stir for 30 seconds until fragrant.",
            "Add carrots and broccoli first, stir-fry for 3 minutes.",
            "Add bell pepper and snap peas, stir-fry for 2 more minutes.",
            "Pour in soy sauce and toss everything to coat evenly.",
            "Sprinkle with sesame seeds and serve hot with rice."
        ],
        nurtition: [
            "180 kcal",
            "6g",
            "20g",
            "8g",
            "2g",
            "760mg"
        ],
        chefTrips: [
            "Keep the heat high for a proper stir-fry char",
            "Cut vegetables uniformly so they cook evenly",
            "Add protein like tofu or chicken for a full meal",
            "Don't overcook - vegetables should stay slightly crisp"
        ]
    }
];  


var btn = document.getElementById("random_btn");

function random() {
    var randomRecepi = Math.trunc(Math.random() * recipes.length);
    var recipe = recipes[randomRecepi];
    return recipe 
}


console.log(random());



