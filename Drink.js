'use strict';
module.exports = (sequelize, DataTypes) => {
  const Drink = sequelize.define('Drink', {
    name: DataTypes.STRING,
    drinkDescription: DataTypes.TEXT,
    image: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
  }, {
    tableName: 'drinks',
  }, {});
  Drink.associate = function(models) {
    Drink.belongsToMany(models.OptionGroup, {
      through: 'DrinkOptionGroup',
      as: 'optionGroups',
      foreignKey: 'drink_id',
      otherKey: 'option_group_id',
      onDelete: 'cascade'
    });
  };
  return Drink;
};
