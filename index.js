class Dog{
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }
}

let bigFluffyDog1 = new Dog("Buzz", "Great Pyrenees");
let bigFluffyDog2 = new Dog("Woody", "labrador");


// Create a class for Breakfast
// Breakfast will have a constructor with a food and drink

class Breakfast{
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    }
}

// Create a class for Lunch
// Lunch will have a constructor with a salad, a soup and a drink

class Lunch {
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}



// Create a class for Dinner
// Dinner will have a constructor with salad, soup entree and dessert
// Initialise dessert as a private property, with the hash symbol


class Dinner{
    #dessert
    constructor(salad, soup, entree, dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }
}