const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
    date: Date,
    value: String,
    times: Number,
    owner: String
});

module.exports = mongoose.model('searchHistory', HistorySchema);