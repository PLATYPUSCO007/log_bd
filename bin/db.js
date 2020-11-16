const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const urlMongo = 'mongodb+srv://admin:iJfgIvgFk5wketAF@cluster0.akac0.mongodb.net/traza_adminBD?retryWrites=true&w=majority';

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(urlMongo, config)
    .then(function(){  
        console.log('Conexion satisfactoria a la BD');
    }).catch(function(error){  
        console.log('La conexion ha fallado');
        console.log(error.message);
    });

module.exports = mongoose.connection;