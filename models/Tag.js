const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    label: String
})

const Tag = mongoose.model("tags", tagSchema);

module.exports = Tag;