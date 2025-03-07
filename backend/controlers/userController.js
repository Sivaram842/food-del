import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


//login User 

const loginUser = async (res, req) => {

}

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {

    } catch (error) {

    }
}

export { loginUser, registerUser };