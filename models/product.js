module.exports = function(sequelize, DataTypes) {

var product = sequelize.define('Product', {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Name: {
    type: DataTypes.STRING,
  },
  Price: {
    type: 'int'
  },
  Url: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true
    }
  },
  Description: {
    type: DataTypes.TEXT,
  }
});
product.create({ Id: '1', Name: 'Shirts', Price: '15.99', Url: 'https://d1yg28hrivmbqm.cloudfront.net/files/3c4/3c4bf120f0983df15b1570b313800425_preview.png', Description: 'its a shirt, buy it you dummy'  }).then(function(product) {
  product.save();
});
return product;
};
