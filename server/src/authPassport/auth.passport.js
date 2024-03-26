import { GraphQLLocalStrategy } from "graphql-passport";
import { User } from "../models/user.model.js";

export const authPassport = (passport) => {
    passport.use(
        new GraphQLLocalStrategy(async (email, password, done) => {
            try {
                const user = await User.findOne({ email });
                if (!user) {
                    return done(null, false, { message: "Invalid email" });
                }
                if (!user.comparePassword(password)) {
                    return done(null, false, { message: "Invalid password" });
                }
                return done(null, user);
            } catch (error) {
                return done(error);
            }

}))};