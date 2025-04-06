module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Request', {
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
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    timestamps: true,
    tableName: 'requests'
  });
};