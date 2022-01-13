const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");

require("./auth/passport");
const AuthRoutes = require("./auth/routes");
const ApiRoutes = require("./api/routes");
const ApplicationRoutes = require("./app/routes");

//<----------------- Middleware ----------------->
app.use(express.static("./public"));

app.use(cors({ credentials: true, origin: "https://localhost:5000" }));
app.use(
  cookieSession({
    keys: [process.env.SECRET],
    secret: process.env.SECRET,
    maxAge: 1000 * 60 * 60 * 24,
    sameSite: "lax",
    httpOnly: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(AuthRoutes);
app.use(ApplicationRoutes);
app.use(ApiRoutes);

//<----------------- Run ----------------->

app.listen(5000, () => {
  console.log("Serve is up and running at the http://localhost:5000/");
});
