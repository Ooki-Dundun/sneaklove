const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");



router.get("/signup", (req, res, next) => {
    res.render("../views/signup.hbs");
});
  
router.post("/signupnow", (req, res, next) => {
    const {firstname, lastname, email, password} = req.body;
    User.findOne({ name: firstname})
    .then((user) => {
        if (user) {
            req.flash("warning", "wrong credentials")
            res.redirect("/auth/signup");
        } else { const hashedPassword = bcrypt.hashSync(password, 10);
        User.create({
            name: firstname, 
            lastName: lastname,
            email,
            password: hashedPassword})
        .then((user) => {
            req.flash("success", "Congrats ! You are now registered !");
            res.redirect("/auth/signin");
        })
        .catch(err => next(err))
       }
    })
})

router.get("/signin", (req, res, next) => {
    res.render("../views/signin.hbs")
});

router.post("/signin", (req, res, next) => {

})

module.exports = router;

