const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ElectrodomesticoSchema = new Schema({
    marca: {type: mongoose.Schema.Types.ObjectId, ref: 'Marca'},
    tipo: String,
    modelo: String
});

module.exports = mongoose.model('Electrodomestico', ElectrodomesticoSchema);