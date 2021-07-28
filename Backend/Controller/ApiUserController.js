const Client = require('../model/client_model')
const chalk = require('chalk');

const Error = chalk.bold.red;
const Sucess = chalk.inverse.green;

exports.signUp = async (request, res, next) => {

    const req = request.body 
    console.log(chalk.inverse(req.email));
    const client = new Client({
        name: req.name,
        email: req.email,
        password: req.password,
    })
    
    try {

        await client.save()
        res.status(200).send(client)
        
    } catch (error) {
        console.log(Error(error));
        res.status(500).send({'error': error})
    }
}