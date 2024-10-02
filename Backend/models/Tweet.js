// models/Tweet.js
const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
  content: { type: String, required: true },
  media: { type: String }, // URL for image or video
  mediaType: { type: String }, // 'image' or 'video'
  likes: { type: Number, default: 0 },
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      text: { type: String, required: true },
      createdAt: { type: Date, default: Date.now }
    }
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tweet', TweetSchema);
