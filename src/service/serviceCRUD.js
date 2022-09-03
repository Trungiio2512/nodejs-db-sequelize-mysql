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

const updateUser = (userId, formData) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const user = await getUserById(userId);

                if (user) {
                    await db.Users.upsert({
                        id: userId,
                        ...formData
                    })
                    resolve('Thay đổi thành công')
                }
                else {
                    resolve(false)
                }
            }
            catch (err) {
                reject(err)
            }
        })
}

const deleteUser = (userId) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const user = await getUserById(userId);

                if (user) {
                    const hasDel = await db.Users.destroy({
                        where: { id: userId }
                    });
                    if (hasDel) {
                        resolve('Xoá thành công')
                    }
                    else {
                        resolve(false)
                    }
                }
                else {
                    resolve(false)
                }
            }
            catch (err) {
                reject(err)
            }
        })
}

const getAllUser = () => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const users = await db.Users.findAll({
                    raw: true
                })
                resolve(users)
            }
            catch (err) {
                reject(err)
            }
        })
}

const getUserById = async (userId) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const user = await db.Users.findOne({
                    where: { id: userId },
                    raw: true
                })
                if (user) {
                    resolve(user)
                }
                else {
                    resolve(false)
                }
            }
            catch (err) {
                reject(err)
            }
        }
    )
}



module.exports = { createUser, getAllUser, getUserById, updateUser, deleteUser }