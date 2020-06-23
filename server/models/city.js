const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    region: {
        type: Schema.Types.ObjectId,
        ref: 'Region'
    },
    name: String,
    region_name: String
});

module.exports = mongoose.model("City", citySchema);