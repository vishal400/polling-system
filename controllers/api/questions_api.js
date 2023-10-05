const Question = require("../../models/Question");
const Option = require("../../models/Option");

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
