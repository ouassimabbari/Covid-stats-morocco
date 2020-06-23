const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statSchema = new Schema({
    city: {
        type: Schema.Types.ObjectId,
        ref: 'City'
    },
    record_date: Date,
    active_cases: Number,
    total_cases: Number,
    new_cases: Number,
    total_recovered: Number,
    new_recovered: Number,
    total_deaths: Number,
    new_deaths: Number
});

module.exports = mongoose.model("Stats", statSchema);