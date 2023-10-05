const Question = require("../../models/Question");
const Option = require("../../models/Option");

// get question
module.exports.getQuestion = async function(req, res){
    try {
        const question = await Question.findById(req.params.id).populate({path: 'options'});
        if(!question){
            return res.status(404).json({
                message: "Question not found"
            })
        }

        const formattedOptions = question.options.map(option => ({
            id: option._id,
            text: option.text,
            votes: option.votes,
            link_to_vote: option.link_to_vote
        }));

        return res.status(200).json({
            id: question._id,
            title: question.title,
            options: formattedOptions
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// create question
module.exports.create = async function (req, res) {
    try {
        // get the title
        var title = req.body.title;

        // find in database if this title already exists
        var titleInDB = await Question.findOne({ title: title });
        if (titleInDB) {
            return res.status(409).json({
                message: "Question with this title already exists",
            });
        }

        // create question
        const question = await Question.create({ title: title });

        // send json response with status 200 ok
        return res.status(200).json({
            id: question.id,
            title: question.title,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

// delete
module.exports.delete = async function(req, res){
    try {
        const question = await Question.findByIdAndDelete(req.params.id);
        if(!question){
            return res.status(404).json({
                message: "Question not found"
            })
        }

        // delete options of the question
        await Option.deleteMany({question: req.params.id});

        return res.status(200).json({
            message: "Question deleted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
