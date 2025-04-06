require('dotenv').config();
const express = require('express');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();

// Инициализация Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database.sqlite'),
  logging: console.log // Включаем логирование для отладки
});

// Определение модели Request
const Request = sequelize.define('Request', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: 'requests' // Явно указываем имя таблицы
});

// Синхронизация с БД
sequelize.sync()
  .then(() => console.log('Проверка структуры БД завершена'))
  .catch(err => console.error('Ошибка синхронизации:', err));

// Настройки Express
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Загрузка продукции
const loadProducts = () => {
  try {
    return require('./data/products.json').products;
  } catch (err) {
    console.error('Ошибка загрузки продукции:', err);
    return [];
  }
};

// Маршруты
app.get('/', (req, res) => {
  res.render('index', { 
    products: loadProducts(),
    success: req.query.success,
    error: req.query.error
  });
});

app.post('/submit-form', async (req, res) => {
  try {
    await Request.create({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      message: req.body.message
    });
    console.log('✅ Заявка сохранена');
    res.redirect('/#contacts?success=1');
  } catch (error) {
    console.error('❌ Ошибка сохранения:', error);
    res.redirect('/#contacts?error=1');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});