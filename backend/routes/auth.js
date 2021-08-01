const router = require("express").Router();
const User = require("../models/User")



router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }

})

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(401).json("wrong email");

        const password = await User.findOne({ password: req.body.password });
        !password && res.status(401).json("wrong password");
        res.status(201).json(user)
    } catch (err) {
        res.status(404).json(err);
    }
})




module.exports = router;