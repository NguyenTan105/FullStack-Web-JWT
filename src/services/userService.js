const User = require("../models/user");
const bcrypt = require("bcrypt");
const salt = 10;

const createUserService = async (name, email, password) => {
  try {
    //hash user password
    const hashPassword = await bcrypt.hash(password, salt);

    //save user to database
    let result = await User.create({
      name: name,
      email: email,
      password: hashPassword,
      role: "NGUYENTAN",
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
module.exports = {
  createUserService,
};