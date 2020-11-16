const {TrazaModel} = require('../models');

module.exports = {
    create: async function(schema, req){
        try {
            const result = await schema.create(req.body);   
            if (result) {
                if(req.session.user){
                    try {
                        const newTraza = await TrazaModel.createTraza(schema.modelName, req.session.user.id, result._id, 'create');  
                        console.log("El registro " + newTraza + " fue creado el " + newTraza.createdAt.toLocaleString());    
                    } catch (error) {
                        console.log(error);
                        return result;
                    }
                }
            }
            return result;
        } catch (error) {
            console.log(error);
            return new Error('No se pudo crear el registro ');
        }
    },
    delete: async function(schema, req){
        try {
            const result = await schema.findByIdAndDelete(req.params.id);
            if (result) {
                try {
                    const newTraza = await TrazaModel.createTraza(schema.modelName, req.session.user.id, result._id, 'delete');  
                    console.log("El registro " + newTraza + " fue creado el " + newTraza.createdAt.toLocaleString());    
                } catch (error) {
                    console.log(error);
                    return result;
                }
            }
            return result;
        } catch (error) {
            console.log(error);
            return new Error('No se pudo eliminar el registro ');
        }
    },
    update: async function(schema, req){  
        try {
            const result = await schema.findByIdAndUpdate(req.params.id, req.body, {new: true, useFindAndModify: false});
            if (result) {
                try {
                    const newTraza = await TrazaModel.createTraza(schema.modelName, req.session.user.id, result._id, 'update');  
                    console.log("El registro " + newTraza + " fue creado el " + newTraza.createdAt.toLocaleString());    
                } catch (error) {
                    console.log(error);
                    return result;
                }
            }
            return result;
        } catch (error) {
            console.log(error);
            return new Error('No se pudo actualizar el registro ');
        }
    },
    toList: async function(schema, req){  
        try {
            const result = await schema.find();
            if (result) {
                try {
                    const newTraza = await TrazaModel.createTraza(schema.modelName, req.session.user.id, result._id, 'list');  
                    console.log("El registro " + newTraza + " fue creado el " + newTraza.createdAt.toLocaleString());    
                } catch (error) {
                    console.log(error);
                    return result;
                }
            }
            return result;
        } catch (error) {
            console.log(error);
            return new Error('No se pudo listar el registro ');
        }
    }
}
