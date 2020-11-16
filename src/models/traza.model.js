const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TrazaSchema = new Schema({
    table: String,
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
        },
    createdAt: {
        type: Date,
        default: Date.now()
        },
    registro: String,
    action: String
});

TrazaSchema.statics.createTraza = async function(table, user, registro, action){
    const newTraza = new this({
        table, 
        user,
        registro,
        action
    });
    return await this.create(newTraza);
}

module.exports = mongoose.model('Traza', TrazaSchema);