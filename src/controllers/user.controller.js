const {UserModel} = require('../models');
const {CoreService} = require('../services');

const userController = {
    createUser: async (req, res) => {
        try {
            const newUser = await CoreService.create(UserModel, req);   
            (newUser == null) || (newUser == Error) ?  res.status(401).json({ Error: 'No fue posible crear el usuario'}) : res.status(200).json({ User: newUser});
        } catch (error) {
            console.log(error);
        }
    },
    listUsers: async (req, res) => {
        try {
            const users = await CoreService.toList(UserModel, req);
            (users == null) || (users == Error)?  res.status(401).json({ Error: 'No fue posible listar los usuarios'}) : res.status(200).json({ User: users});
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = userController;