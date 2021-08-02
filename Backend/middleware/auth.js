const jwt = require('jsonwebtoken')
const Client = require('../model/client_model')

const chalk = require('chalk')

const auth = async (req, res, next) => {

    try {
        
        const token = req.header('Authorization').replace('Bearer ', '')
        
        const decoded = jwt.verify(token, 'unavailnodejsSecretKey')
        console.log(decoded._id);
        const client = await Client.findOne({
            _id: decoded._id
        })

        if (!client) {
            res.status(400).send({ error: 'Unable to find user' })
            console.log(red.inverse('Unable to find user'));
            return
        }

        req.token = token
        req.client = client
        next()
        
    } catch (error) {
        console.log(chalk.red(error));
        res.status(500).send({error: error})
    }
}

module.exports = auth
