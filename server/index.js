const express = require("express");
const mongoose = require("mongoose");

const keys = require("./config/keys");
require("./models/User");
require("./services/passport"); //since we are not exporting any code from passport.js, we only just want to execute it

mongoose.connect(keys.mongoURI);

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
