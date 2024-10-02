// routes/tweetRoutes.js
const express = require('express');
const { createTweet, likeTweet, commentOnTweet } = require('../controllers/tweetController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/tweets', auth, createTweet);
router.put('/tweets/:id/like', auth, likeTweet);
router.post('/tweets/:id/comment', auth, commentOnTweet);

module.exports = router;
