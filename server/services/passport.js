const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys = require("../config/keys");

// we are making a new instance for authentication with google
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            //This arrow function is our oppurtunity to get profile from google
            console.log(accessToken);
            console.log(refreshToken);
            console.log(profile);
        }
    )
);
