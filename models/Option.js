const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    text: {
        type: String,
        require: ture,
        default: 0
    }
}, {
    timestamps: true
})

const Option = mongoose.model('Option', optionSchema);
module.exports = Option;
