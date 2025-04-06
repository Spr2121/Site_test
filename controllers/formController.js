const { Message } = require('../models');

exports.submitForm = async (req, res) => {
  try {
    await Message.create(req.body);
    res.redirect('/contacts?success=1');
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка при отправке формы');
  }
};