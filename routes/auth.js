const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");



router.get("/signup", (req, res, next) => {
    res.render("../views/signup.hbs");
});
  
router.post("/signup", (req, res, next) => {
    res.send(req.body);
    //const {name, lastName, email, password} = req.body;
    //User.findOne({ name: name})
    //.then((user) => {
    //    if (user) {
//
    //    }
    //})
})

router.get("/signin", (req, res, next) => {
    res.send("love");
});

module.exports = router;

