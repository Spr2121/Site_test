module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Message', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    subject: DataTypes.STRING,
    message: DataTypes.TEXT
  });
};