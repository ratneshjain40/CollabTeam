const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;

const { get_user_profile_by_id, create_user } = require("../db/db_utils");

require("dotenv").config();

passport.serializeUser(function (profile, done) {
  done(null, profile.id);
});

passport.deserializeUser(function (profileid, done) {
  get_user_profile_by_id(profileid)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err);
    });
});

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL: "http://localhost:5000/auth/github/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      console.log(profile.id, profile.username, profile.profileUrl);
      try {
        if (
          !(await get_user_profile_by_id(
            profile.id,
            profile.username,
            profile.profileUrl
          ))
        ) {
          await create_user(profile.id, profile.username, profile.profileUrl);
        }
        return done(null, profile);
      } catch (e) {
        //console.error(e);
        done(e);
      }
    }
  )
);
