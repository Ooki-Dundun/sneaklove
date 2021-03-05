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

router.post("/signinnow", (req, res, next) => {
    const { email, password } = req.body;
    console.log(req.body.password);
    User.findOne({email: email})
    .then((user) => {
        if (!user) {
            req.flash("error", "Invalid credentials");
            res.redirect("/auth/signin");
        } else {
            console.log(password, user.password);
            const isSamePassword = bcrypt.compareSync(password, user.password);
            if(!isSamePassword) {
                req.flash("error", "Invalid credentials");
                res.redirect("/auth/signin");
            } else {
                const userObject = user.toObject();
                delete userObject.password;
                req.session.currentUser = userObject;
                req.flash("success", "Successfully logged in...");
                res.redirect("/");
            }
        }
    })
    .catch(err => next(err));
})

module.exports = router;

