const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        rating: {type: Number, required: true},
        comment: {type: String, required: true}
    },
    { timestamps: true }
)
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: {type: String},
    email: { type: String, required: true },
    userId: { type: String, required: true },
    password: { type: String, required: true },
    deleted: {type: Boolean, default: false},
    deletedAt: Date,
    metadata: { 
        isFeatured: {type: Boolean, default: false}
    },
    reviews: [reviewSchema]
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
