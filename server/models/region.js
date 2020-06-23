const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regionSchema = new Schema({
    name: String
});

module.exports = mongoose.model("Region", regionSchema);