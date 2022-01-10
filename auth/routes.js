const router = require("express").Router();
const passport = require("passport");

router.get("/", (req, res) => {
  console.log(req.session);
  res.send(`Hello world ${req.user.username}`);
});

router.get("/auth/error", (req, res) => res.send("Unknown Error"));

router.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["read:user"] })
);

router.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/auth/error" }),
  function (req, res) {
    res.redirect("/");
  }
);

module.exports = router;