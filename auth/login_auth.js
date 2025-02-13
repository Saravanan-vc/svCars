const express = require('express');
const bcrypt = require('bcrypt');
const addData = require('../firebase/add_data');
const Router = express.Router();

Router.post('/login', (req, res) => {
    const { email, password } = req.body;


    if (!email || !password) {
        return res.status(400).json({
            "success": false,
            "message": "Enter required details",
        });
    }
    const doc = Math.floor(100000 + Math.random() * 900000);
    addData('email', `${doc}`, { "email": `${email}`, "password": `${password}` });
    res.status(200).json({
        "success": true,
        "message": "Login successful",
        "person_id": doc
    });
});

Router.post('/newuser', async (req, res) => {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
        return res.status(400).json({
            "success": false,
            "message": "Enter required details",
        });
    } else {
        const doc = Math.floor(100000 + Math.random() * 900000);
        const haspassword = await bcrypt.hash(password, 10);
        addData('email', `${doc}`, { "name": `${name}`, "email": `${email}`, "password": `${haspassword}` });
        res.status(200).json({
            "success": true,
            "message": "Successfuly created new account",
            "person_id": doc
        });
    }
});

module.exports = Router;  