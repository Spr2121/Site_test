const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/login', (req, res) => res.render('admin/login'));
router.post('/login', adminController.login);

module.exports = router; // Экспорт router, а не объекта