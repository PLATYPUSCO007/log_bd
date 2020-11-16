const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MarcaSchema = new Schema({
    name: String,
});

module.exports = mongoose.model('Marca', MarcaSchema);