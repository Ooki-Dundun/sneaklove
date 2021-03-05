const express = require("express");
const { NotExtended } = require("http-errors");
const router = express.Router();
const Sneaker = require("../models/Sneaker");

router.get("/", (req, res, next) => {
  res.render("../views/index.hbs");
});

router.get("/sneakers/collection", (req, res, next) => {
  Sneaker.find()
  .then((sneakers) => res.render("../views/products.hbs", {sneakers}))
  .catch( (err) => next(err))
});

router.get("/sneakers/men", (req, res, next) => {
  Sneaker.find({category: "men"})
  .then((sneakers) => res.render("../views/products.hbs", {sneakers}))
  .catch( (err) => next(err))
});

router.get("/sneakers/women", (req, res, next) => {
  Sneaker.find({category: "women"})
  .then((sneakers) => res.render("../views/products.hbs", {sneakers}))
  .catch( (err) => next(err))
});

router.get("/sneakers/kids", (req, res, next) => {
  Sneaker.find({category: "kids"})
  .then((sneakers) => res.render("../views/products.hbs", {sneakers}))
  .catch( (err) => next(err))
});


router.get("/one-product/:id", (req, res, next) => {
  Sneaker.findById(`${id}`)
  .then(sneaker => res.send(sneaker))
  .catch(err => next(err));
});

module.exports = router;
