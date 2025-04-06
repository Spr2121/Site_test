const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Message, Content } = require('../models');

exports.login = async (req, res) => {
  const { password } = req.body;
  if (password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ role: 'admin' }, process.env.SECRET_KEY);
    req.session.token = token;
    res.redirect('/admin/dashboard');
  } else {
    res.redirect('/admin/login?error=1');
  }
};

exports.dashboard = async (req, res) => {
  const messages = await Message.findAll();
  res.render('admin/dashboard', { messages });
};