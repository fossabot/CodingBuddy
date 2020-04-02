var mongoose = require('mongoose');
var taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    content: String,
    owner: String,
    date: String
});

module.exports = mongoose.model('Task', taskSchema);
