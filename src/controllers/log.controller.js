const {UserModel} = require('../models');

const readySession = (req, user)=>{
    req.session.user = {
        'id': user._id,
        'username': user.username
    }
}

const log = {
    In: async (req, res)=>{
        try {
            const userLog = await UserModel.findOne({username: req.body.username});
            if(userLog){
                if(userLog.validPassword(req.body.password)){
                    readySession(req, userLog);
                    res.status(201).render('index', { title: 'Usuario valido, esta logueado' });
                }else{
                    res.status(401).json({
                        error: 'El usuario no es correcto'
                    });
                }
            }else{
                res.status(401).json({
                    error: 'El usuario no es correcto'
                });
            }

        } catch (error) {
            console.log(error);
            res.status(401).json({error});
        }
    },
    Out: async (req, res)=>{
        try {
            if(req.session.user) {
                req.session.destroy();
                res.status(200).render('index', {title: 'Ha sido deslogueado'});
            }else{
                res.status(200).render('index', {title: 'Inicia sesion'});
            }
            
        } catch (error) {
            console.log(error);
            res.status(400).json({error});
        }
    }
}

module.exports = log;