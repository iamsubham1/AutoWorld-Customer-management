const User = require('../models/userModel');
const bcrypt = require("bcryptjs");
const { generateJWT } = require('../utility/helper');

const signUpController = async (req, res) => {
    try {
        const { name, email, password, phoneNumber, role } = req.body;

        // Check if the role is specified in the request body, default to 'worker'
        const userRole = role || 'worker';

        let user = await User.findOne({ email: email });
        if (!user) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            user = await User.create({
                name: name,
                password: hashedPassword,
                email: email,
                phoneNumber: phoneNumber,
                role: userRole
            });

            return res.status(200).json({ success: true, msg: "Account created", user });
        }

        console.log("Account exists. Login instead");
        return res.status(400).json({ error: "Account exists" });

    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error");
    }
};

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Received login request for email:", email);

        let user = await User.findOne({ email: email });
        console.log("User found in the database:", user);

        if (user) {
            const passwordCompare = await bcrypt.compare(password, user.password);
            console.log("Password comparison result:", passwordCompare);

            if (passwordCompare) {
                console.log("Password is correct. Generating JWT...");

                const token = generateJWT(user);
                res.cookie('JWT', token, { httpOnly: false, secure: true, sameSite: 'none' });
                return res.status(200).json({ success: true, token });
            } else {
                console.log("Incorrect password");
            }
        } else {
            console.log("User not found");
        }

        return res.status(400).json({ success: false, error: "Enter correct credentials" });

    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ success: false, error: "Internal server error" });
    }
};

module.exports = { signUpController, loginController };
