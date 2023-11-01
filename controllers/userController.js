const { User } = require('../models')
const createUser = (req, res) => {
    try {
        const user = User.create(req.body);
        res.status(201).json(user)
    } catch(e) {
        console.log(e)
        res.status(500).json({messgae:e})
    }
}

module.exports = { createUser }