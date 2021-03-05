const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("../views/index.hbs");
});

router.get("/sneakers/:cat", (req, res) => {
  res.send("yo");
});

router.get("/one-product/:id", (req, res) => {
  res.send("baz");
});

router.get("/signup", (req, res) => {
  res.send("sneak");
});

router.get("/signin", (req, res) => {
  res.send("love");
});


module.exports = router;
