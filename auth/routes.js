const router = require("express").Router();
const isAuth = require("./verifyAuth").isAuth;
const passport = require("passport");

// ---------------------------- GET ----------------------------

router.get("/login", (req, res) => {
  res.redirect("/auth/github");
});

router.get("/is-logged", isAuth, (req, res, next) => {
  res.json({
    user: req.user.username,
    profile_url: req.user.profile_url,
    success: true,
  });
});

router.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["read:user"] })
);

router.get("/login-success", isAuth, (req, res) => {
  res.json({
    user: req.user.username,
    success: true,
  });
});

router.get("/auth/error", (req, res) => res.send("Unknown Error"));

router.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/auth/error" }),
  (req, res) => {
    res.redirect("http://localhost:3000/");
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  req.session = null;
  res.redirect("http://localhost:3000/");
});

// ---------------------------- POST ----------------------------
router.post("/logout", (req, res) => {
  req.logout();
  req.session = null;
  res.json({
    success: true,
  });
});

module.exports = router;
