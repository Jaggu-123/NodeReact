const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

const User = mongoose.model("users");
const keys = require("../config/keys");

//function to generate the cookie for the imcoming user to our server
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

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
            User.findOne({ googleId: profile.id }).then(existingUser => {
                if (existingUser) {
                    //we already have the User in database, don't save it
                    done(null, existingUser); //done(error object, returned user)
                } else {
                    //we don't have the record in database, save it
                    new User({ googleId: profile.id })
                        .save()
                        .then(user => done(null, user));
                }
            });
        }
    )
);
