const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const BodyParser = require("body-parser");

const keys = require("./config/keys");
require("./models/User");
require("./services/passport"); //since we are not exporting any code from passport.js, we only just want to execute it

mongoose.connect(keys.mongoURI);

const app = express();

//making express route to make use of cookie
app.use(BodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, //time that cookie should last in milli-seconds
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app); //will turn into a function with app as an argument

const PORT = process.env.PORT || 5000;
app.listen(PORT);
