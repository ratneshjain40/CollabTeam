const express = require("express");
const app = express();

const cookieSession = require("cookie-session");
const session = require("express-session");

const passport = require("passport");

require("./auth/passport");
const AuthRoutes = require("./auth/routes");

//<----------------- Middleware ----------------->

app.use(
  cookieSession({
    keys: [process.env.SECRET],
    secret: process.env.SECRET,
    maxAge: 1000 * 60 * 60 * 24,
  })
);

//app.use(
//  session({
//    secret: process.env.SECRET,
//    resave: false,
//    saveUninitialized: true,
//    cookie: {
//      maxAge: 1000 * 60 * 60 * 24,
//    },
//  })
//);

app.use(passport.initialize());
app.use(passport.session());
app.use(AuthRoutes);

//<----------------- Run ----------------->

app.listen(5000, () => {
  console.log("Serve is up and running at the localhost:5000");
});
