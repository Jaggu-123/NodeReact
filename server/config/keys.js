//taking the decision which file is to used

if (process.env.NODE_ENV === "production") {
    //use prod.js file
    module.exports = require("./prod");
} else {
    module.exports = require("./dev");
}
