


  module.exports = function(sequelize, DataTypes) {

  var Product = sequelize.define('Product', {
    id: {type: 'id', key: true, computed: true, nullable: false},
    title: {type: DataTypes.STRING},
    date: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    price: {type: 'int'},
    category: {type: DataTypes.STRING},
    teaserUrl: {type: DataTypes.STRING}
  });
  return Product;
};
