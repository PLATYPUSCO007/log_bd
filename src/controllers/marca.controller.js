const {MarcaModel} = require('../models');
const {CoreService} = require('../services');


const marcaController = {
    create: async function(req, res){
        try {
            const newMarca = await CoreService.create(MarcaModel, req);
            (newMarca == Error) || (newMarca == null) ?  res.status(401).json({ Error: newMarca}) : res.status(200).json({ Marca: newMarca});
        } catch (error) {
            console.log(error);
            res.status(401).json({ Error: error + 'Marca'});
        }
    },
    delete: async function(req, res){
        try {
            const deleteMarca = await CoreService.delete(MarcaModel, req.params.id);
            (deleteMarca == Error) || (deleteMarca == null) ?  res.status(401).json({ Error: 'No fue posible eliminar la marca'}) : res.status(200).json({ MarcaDelete: 'Ha sido borrado exitosamente'});
        } catch (error) {
            console.log(error);
            res.status(401).json({ Error: 'No fue posible eliminar la marca'});
        }
    },
    update: async function(req, res){  
        try {
            const updateMarca = await CoreService.update(MarcaModel, req);
            (updateMarca == Error) || (updateMarca == null) ?  res.status(401).json({ Error: 'No fue posible actualizar la marca'}) : res.status(200).json({updateMarca});
        } catch (error) {
            console.log(error);
            res.status(401).json({ Error: 'No fue posible actualizar la marca'});
        }
    },
    list: async function(req, res){
        try {
            const marcas = await CoreService.toList(MarcaModel, req);
            (marcas == Error) || (marcas == null) ?  res.status(401).json({ Error: 'No fue posible listar las marcas'}) : res.status(200).json({ MarcaUpdate: marcas});
        } catch (error) {
            console.log(error);
            res.status(401).json({ Error: 'No fue posible listar las marcas'})
        }
    }
}

module.exports = marcaController;