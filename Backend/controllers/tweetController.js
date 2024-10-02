// controllers/tweetController.js
const Tweet = require('../models/Tweet');
const User = require('../models/User');

const createTweet = async (req, res) => {
  const { content, media, mediaType } = req.body;
  const userId = req.user.id;

  try {
    const tweet = new Tweet({ content, media, mediaType, user: userId });
    await tweet.save();
    res.status(201).json(tweet);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

const likeTweet = async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.params.id);
    if (!tweet) return res.status(404).json({ message: 'Tweet not found' });

    tweet.likes += 1;
    await tweet.save();

    res.json(tweet);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

const commentOnTweet = async (req, res) => {
  const { text } = req.body;
  const userId = req.user.id;

  try {
    const tweet = await Tweet.findById(req.params.id);
    if (!tweet) return res.status(404).json({ message: 'Tweet not found' });

    const comment = { user: userId, text };
    tweet.comments.push(comment);

    await tweet.save();
    res.json(tweet);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

module.exports = { createTweet, likeTweet, commentOnTweet };
