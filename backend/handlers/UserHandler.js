const Db = require('../database/Database');
const Bcrypt = require('bcryptjs');
const Jwt = require('jsonwebtoken');

const dbName = "Metadata";
const collectionName = "users";

const jwtSecret = process.env.JWT_SECRET;

async function handleLogin(req, res) {

    const username = req.query.username;
    const password = req.query.password;

    const userData = await getData(undefined, username, password);
    const cookies = getCookies(userData);

    res.cookie("cookies", cookies).status(200).send(userData);
}

async function firstLogin(req) {

    const userId = parseInt(req.query.user);

    await Db.update(dbName, collectionName, true,

        {
            "userId": userId
        },

        {
            $set: {

                "first_login": false
            }
        }
    );
}

async function getData(userId, username, password) {

    const query = (

        userId === undefined ?

        {
            "username": username
        } :

        {
            "userId": userId
        }
    );

    let result = await Db.read(dbName, collectionName, false, query,

        {
            projection: {

                "_id": 0,
                userId: 1,
                username: 1,
                password: 1,
                access_level: 1,
                first_login: 1,
            }
        }
    );

    if (result.length > 0) {

        result = Object.values(result[0]);

        if ( verifyPassword(password, result[2]) ) {

            result.splice(2, 1)
        }
        else {

            result = [];
        }
    }
    else {

        result = [];
    }

    return result;
}

function verifyPassword(passwordInput, passwordStored) {

    return Bcrypt.compareSync(passwordInput, passwordStored);
}



async function changePassword(req) {

    const userId = parseInt(req.query.userId);
    const presentPassword = req.query.presentPassword;
    const newPassword = req.query.newPassword;
    const confirmNewPassword = req.query.confirmNewPassword;

    const userData = await getData(userId, undefined, presentPassword);


    const presentPasswordVerified = userData.length > 0;
    const newPasswordConfirmed = newPassword === confirmNewPassword;
    const newPasswordNotEmpty = newPassword.replace(/\s/g, "") !== "";


    const response = [];

    response.push(presentPasswordVerified);
    response.push(newPasswordConfirmed);
    response.push(newPasswordNotEmpty);

    if (presentPasswordVerified && newPasswordConfirmed && newPasswordNotEmpty) {

        try {

            await setPassword(userId, newPassword);
            response.push(true)
        }
        catch (e) {

            console.log(e)
            response.push(false)
        }
    }

    return response;
}

async function setPassword(userId, newPassword) {

    const salt = Bcrypt.genSaltSync();
    const hashedNewPassword = Bcrypt.hashSync(newPassword, salt);

    await Db.update(dbName, collectionName, true,

        {
            "userId": userId
        },

        {
            $set: {

                "password": hashedNewPassword
            }
        }
    );
}



function getCookies(userData) {

    let cookies = null;

    if (userData.length > 0) {

        cookies = Jwt.sign({userData: userData}, jwtSecret);
    }

    return cookies;
}

function clearCookies(req, res) {

    const userData = verifyCookies(req);

    if (userData.length > 0) {

        res.clearCookie("cookies").sendStatus(200);
    }
}

function verifyCookies(req) {

    const { cookies } = req.cookies;
    let userData = []

    if (cookies) {

        try {

            const decodedCookies = Jwt.verify(cookies, jwtSecret);
            userData = decodedCookies.userData;
        }
        catch(err) {

            console.log(err)
        } 
    }

    return userData;
}

exports.handleLogin = handleLogin;
exports.getData = getData;
exports.firstLogin = firstLogin;
exports.verifyPassword = verifyPassword;
exports.changePassword = changePassword;
exports.clearCookies = clearCookies;
exports.verifyCookies = verifyCookies;