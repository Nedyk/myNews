// Require mongoose
var mongoose = require("mongoose");
//Create a schema object constructor
var Schema = mongoose.Schema;

// Create the Comment schema
var commentSchema = new Schema({
  // name is a string that's required 
  title: {
    type: String,
    required: true
  },
  // body is a string that's required
  body: {
    type: String,
    required: true
  }
});

// Create the Comment model with the CommentSchema
var comment = mongoose.model("comment", commentSchema);

// Exports the Comment model
module.exports = comment;


