const Question = require("../../models/Question");
const Option = require("../../models/Option");

// create options
module.exports.createOptions = async function (req, res) {
    try {
        const id = req.params.id;
        const options = req.body.options;
        const baseUrl = `${req.protocol}://${req.get("host")}`;
        const link_to_vote = `${baseUrl}/api`;
        console.log(req.params);

        const question = await Question.findById(id);
        if (!question) {
            return res.status(404).json({
                message: "Question not found",
            });
        }

        // create options
        for (const option of options) {
            const temp = await Option.findOne({ text: option, question: id });
            if (temp) {
                continue;
            }
            const opt = await Option.create({ text: option, question: id });
            opt.link_to_vote = `${link_to_vote}/options/${opt.id}/add_vote`;
            await opt.save();
            question.options.push(opt._id);
        }

        await question.save();
        // successfully created options

        return res.status(200).json({
            message: "Options added successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

// delete
module.exports.delete = async function (req, res) {
    try {
        console.log(req.params.id);
        const option = await Option.findByIdAndDelete(req.params.id);
        if (!option) {
            return res.status(404).json({
                message: "Option not found",
            });
        }

        // remove option from question
        const question = await Question.findByIdAndUpdate(option.question, {
            $pull: { options: option._id },
        });

        return res.status(200).json({
            message: "Option deleted successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
