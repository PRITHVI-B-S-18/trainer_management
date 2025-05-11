import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import users from "../models/user.js";

export const signup = async (req, res) => {
  const {
    name,
    email,
    password,
    confirm_password
  } = req.body;
  try {
    //Checking that user is already exist or not. If user is already exist, then it will return true
    const existingUser = await users.findOne({ email });
    //If the user is already existed, it will return status of 400
    if (existingUser) {
      return res.status(400).json({ message: "User already registered" });
    }
    //If user is not existed
    //Password is hashed using bcrypt hash function which takes two arugument (password, numberofsaltrounds)
    // Refer ( https://masteringjs.io/tutorials/node/bcrypt )
    const hashedPassword = await bcrypt.hash(password, 8);
    //then a new user is created
    const newUser = await users.create({
      name,
      email,
      password: hashedPassword,
    });

    //creating a token
    // Refer ( https://www.youtube.com/watch?v=p_sDlCyzUFU , https://siddharthac6.medium.com/json-web-token-jwt-the-right-way-of-implementing-with-node-js-65b8915d550e )
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({ result: newUser, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong in the server " + error });
  }
};

export const login = async (req, res) => {
  const { id: _id } = req.params;
  const { email, password } = req.body;

  try {
    //Checking that user is already exist or not. If user is already exist, then it will return true
    const existingUser = await users.findOne({ email });
    //If the user is not existed, it will return status of 400
    if (!existingUser) {
      return res.status(400).json({ message: "No user found" });
    }
    //If user is already existed, password will be compared by using bcrypt compare function
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    //If password mismatch, it iwll return error
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    //creating a token
    // Refer ( https://www.youtube.com/watch?v=p_sDlCyzUFU , https://siddharthac6.medium.com/json-web-token-jwt-the-right-way-of-implementing-with-node-js-65b8915d550e )
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1m",
      }
    );

    return res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong in the server " + error });
  }
};