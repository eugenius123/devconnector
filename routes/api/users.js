const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

//load user model
const User = require("../../models/User");

// @router GET api/users/test
// @desc  Tests users route
// @access  Public

router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// @router post api/users/test
// @desc  Tests users route
// @access  Public

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email Already exists" });
    } else {
      const avatar = garavtar.url(req.body.email, {
        s: "200", //size
        r: "pg", //rating
        d: "mm" //default
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });
    }
  });
});

module.exports = router;
