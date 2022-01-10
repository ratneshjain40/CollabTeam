const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
require("dotenv").config();

passport.serializeUser(function (user, done) {
  let _user = {
    id: user.id,
    username: user.username,
    profileUrl: user.profileUrl
  };
  done(null, _user);
});

passport.deserializeUser(function (_user, done) {
  done(null, _user);
});

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL: "http://localhost:5000/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      //console.log(profile);
      return done(null, profile);
    }
  )
);
