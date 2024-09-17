// Suggested code may be subject to a license. Learn more: ~LicenseLog:2076020576.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3630353533.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2777937932.

const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/projects', projectController.getAllProjects);
router.post('/projects', projectController.createProject);
// ... add other routes for projects (getById, update, delete) 

module.exports = router;
