const express = require("express");
const app = express();
const mongoose = require("mongoose");
const seedDB = require("./seed");
const quoteRoutes = require("./api/quoteRoutes");
const cors = require("cors");
const methodOverride = require("method-override");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/User");
const session = require("express-session");
const userRoutes = require("./api/userRoutes");
const flash = require("connect-flash");
// require("dotenv").config();
const dotenv = require("dotenv")
dotenv.config();

const { DATABASE_URL,PORT } = process.env;

mongoose.connect(DATABASE_URL)
  .then(() => {
    console.log("mongodb connection established");
  })
  .catch(() => {
    console.log("error connecting to MongoDB");
  });

app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      expire: Date.now() + 7 * 24 * 60 * 60 * 1000,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: ["https://gorgeous-sprinkles-65c1d9.netlify.app/"],
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
  })
);
app.use(flash());

app.use(passport.session());
app.use(passport.initialize());

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(methodOverride("_method"));
passport.use(new LocalStrategy(User.authenticate()));

app.use(quoteRoutes);
app.use(userRoutes);

// save Quotes in mongo db
// seedDB()

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
