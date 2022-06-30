const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
require("dotenv");

const CLIENT_ID = "734096014404-t99jh638ldsq9ql4ej48turva1k5ui7n.apps.googleusercontent.com"
const CLIENT_SECRET = "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"

passport.use(
	new GoogleStrategy(
		{
			// clientID: process.env.CLIENT_ID,
			clientID: CLIENT_ID,
			clientSecret: CLIENT_SECRET,
			// clientSecret: process.env.CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
