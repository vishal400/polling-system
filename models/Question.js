const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Option'
    }]
}, {
    timestamps: true
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;

