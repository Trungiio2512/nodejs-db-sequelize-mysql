const db = require('../models/index')
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const hashPasswordUser = (password) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const hashPassword = await bcrypt.hashSync(password, salt);
                resolve(hashPassword);
            }
            catch (err) {
                reject(err)
            }
        })
}

const createUser = async (data) => {

    return new Promise(
        async (resolve, reject) => {
            try {
                const hashPassword = await hashPasswordUser(data.password)
                await db.Users.create({
                    email: data.email,
                    password: hashPassword,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    phoneNumber: data.phoneNumber,
                    gender: data.gender === 1 ? true : false,
                    roleId: data.roleId,
                })
                resolve('success create new user')
            }
            catch (err) {
                reject(err)
            }
        })
}

module.exports = { createUser }