const { model, Schema } = require("mongoose");

module.exports = model("posts", new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    text: { type: String, required: true },
    urlPath: { type: String, required: true }
}, {
    timestamps: true   
}));