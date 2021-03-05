const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sneakerSchema = new Schema ({
    name: String,
    ref: String,
    size: Number,
    description: String,
    price: Number,
    category: {
        type: String,
        emum: [ "men", "women", "kids"]
    },
    id_tags: [{ type: Schema.Types.ObjectId, ref: "tags" }]
});

const Sneaker = mongoose.model('sneakers', sneakerSchema);

module.exports = Sneaker;