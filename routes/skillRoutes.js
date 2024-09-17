const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');

router.get('/skills', skillController.getAllSkills);
router.post('/skills', skillController.createSkill);
router.get('/skills/:id', skillController.getSkillById); 
router.put('/skills/:id', skillController.updateSkill);
router.delete('/skills/:id', skillController.deleteSkill);

module.exports = router;
