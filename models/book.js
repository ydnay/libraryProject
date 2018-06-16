const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const bookSchema = new Schema({
  title: String,
  description: String,
  author: [ { type : ObjectId, ref: 'Author' } ],
  rating: Number,
  reviews: [ 
    {
      user: String,
      comments: String
    } 
  ]
}, {
  timestamps: {
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;