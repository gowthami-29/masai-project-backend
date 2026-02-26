const { createUser, findUserByEmail } = require("../models/user.model");
const { hashPassword, comparePassword } = require('../utils/hashpassword')
const generateToken = require("../utils/generateToken");

// signup
const Signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await findUserByEmail(email);
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashed = await hashPassword(password);

    const user = await createUser({ name, email, password: hashed });

    res.json({ message: "Signup successful", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// login
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(401).send({
            status:false,
            message:"all fields are reaq"
        })
    }

    const user = await findUserByEmail(email);
    if (!user)
      return res.status(404).json({ message: "User not found" });

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user);

    res.json({ message: "Login success", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { Signup, Login };