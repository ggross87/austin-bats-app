module.exports = function(sequelize, DataTypes) {

var product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: 'int'
  },
  Url: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true
    }
  },
  description: {
    type: DataTypes.STRING,
  }
});
return Product;
};
