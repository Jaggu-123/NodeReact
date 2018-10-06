const express = require("express");
require("./services/passport"); //since we are not exporting any code from passport.js, we only just want to execute it

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
