var express = require("express"),
  router = express.Router(),
  Job = require("../models/job"),
  passport = require("passport"),
  User = require("../models/user");

router.get("/", function (req, res) {
  res.render("landing");
});

//========AUTH ROUTES===========//

//handle sign up logic
router.post("/register", function (req, res, next) {
  var newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, function (err, user) {
    if (err) {
      res.status(500);
      return next(err);
    }
    passport.authenticate("local")(req, res, function () {
      res.sendStatus(200);
    });
  });
});

//handle login logic
//app.post("/login", middleware, callback)
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/jobs",
    successFlash: "Welcome to YelpCamp!",
    failureFlash: true,
    failureRedirect: "/login",
  }),
  function (req, res) {}
);

//logout route
router.get("/logout", function (req, res) {
  req.logout();
  req.flash("success", "Logged you out!");
  res.redirect("/jobs");
});

module.exports = router;