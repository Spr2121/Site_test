module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Content', {
    page: DataTypes.STRING,
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  });
};