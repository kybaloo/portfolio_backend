// Suggested code may be subject to a license. Learn more: ~LicenseLog:2698368914.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2065982260.

const express = require('express');
const router = express.Router();
const blogPostController = require('../controllers/blogPostController');

router.get('/blogposts', blogPostController.getAllBlogPosts);
router.post('/blogposts', blogPostController.createBlogPost);
// ... add other routes for blog posts (getById, update, delete) 

module.exports = router;
