const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let list = ({
    todo: { type : String, required: true}
},{
    collection: 'List'
})

module.exports = mongo.model('List',list);
