const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')

const AuthService = {

    getUserwithUserName(db, user_name){
        return db('dog_parks_users')
            .where({user_name})
            .first()
    },

    comparePasswords(password, hash){
        return bcrypt.compare(password, hash)
    },

    createJwt(subject, payload){
        return jwt.sign(payload, config.JWT_SECRET, {
            subject,
            algorithm: 'HS256',
        })
    }


}


module.exports = AuthService