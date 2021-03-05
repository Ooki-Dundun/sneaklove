require("../../config/mongodb");
const Sneaker = require("../../models/Sneaker");

const sneakersData = [
    {
        name: "killer shark men",
        ref: "#1231FAda22",
        size: 47,
        description: "running shoes",
        price: 123,
        category: "men"
    },
    {
        name: "killer shark women",
        ref: "#1231FAda23",
        size: 37,
        description: "running shoes",
        price: 123,
        category: "women"
    },
    {
        name: "killer shark kids",
        ref: "#1231FAda24",
        size: 15,
        description: "running shoes",
        price: 87,
        category: "kids"
    },
]

Sneaker.insertMany(sneakersData)
.then((sneakers) => console.log(sneakers))
.catch(err => console.log(err));