require("../../config/mongodb");
const User = require("../../models/User");

const usersData = [
    {
        name: "Shupoo",
        lastName: "DimSum",
        email: "shupoo.dimsum@test.com",
        password: 25
    },
    {
        name: "Shumon",
        lastName: "taro",
        email: "shumon.taro@test.com",
        password: 26
    }
];


User.insertMany(usersData)
.then((users) => console.log(users))
.catch((err) => console.log(err));