const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (email, password) => {
    const user = await userModel.findByEmail(email);
    if (!user) {
        throw new Error('Invalid email or password');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid email or password');
    }
    const token = jwt.sign({ userId: user.id }, 
        process.env.JWT_SECRET, 
        { expiresIn: process.env.JWT_EXPIRES_IN });
    return { token };
}

const register = async (nombre, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create(nombre, email, hashedPassword);
    if (!user) {
        throw new Error('Error creating user');
    }
    return user;
};

module.exports = {
    login,
    register
};
