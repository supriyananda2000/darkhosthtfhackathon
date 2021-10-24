const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const User = require("../model/userSchema");
const dotenv = require("dotenv");
const Authenicate = require("../middleware/Authenicate");
dotenv.config({ path: "./config.env" });

router.post("/register", jsonParser, async (req, res) => {
  const { name, email, phone, address } = req.body;
  if (!name || !email || !phone || !address) {
    return res.status(400).json("fill this form properly");
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "email is already exists" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        address,
      });

      const userRegister = await user.save();
      if (userRegister) {
        token = await userRegister.generateAuthToken();
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
          secure: false,
        });
        res.status(200).json("success");
      } else {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/userDetails", jsonParser, Authenicate, async (req, res) => {
  res.send(req.rootUser);
});
module.exports = router;
