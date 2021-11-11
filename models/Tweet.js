"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  Text: String,
  User: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  Likes: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Tweet", tweetSchema);
