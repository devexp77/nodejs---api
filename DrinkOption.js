'use strict';
module.exports = (sequelize, DataTypes) => {
  const DrinkOption = sequelize.define('DrinkOption', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {
    tableName: 'drink_options'
  });
  DrinkOption.associate = function(models) {
    DrinkOption.belongsToMany(models.OptionGroup, {
      through: 'OptionGroupDrinkOption',
      as: 'optionGroups',
      foreignKey: 'drink_option_id',
      otherKey: 'option_group_id',
    });
  };
  return DrinkOption;
};
