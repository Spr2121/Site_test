const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Путь к данным о продукции
const productsDataPath = path.join(__dirname, '../data/products.json');

// Главная страница с загрузкой данных
router.get('/', (req, res) => {
  fs.readFile(productsDataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      return res.status(500).send('Ошибка сервера');
    }
    
    try {
      const products = JSON.parse(data).products;
      res.render('index', { products });
    } catch (parseError) {
      console.error('Ошибка парсинга JSON:', parseError);
      res.status(500).send('Ошибка формата данных');
    }
  });
});

module.exports = router;