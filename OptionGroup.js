'use strict';
module.exports = (sequelize, DataTypes) => {
  const OptionGroup = sequelize.define('OptionGroup', {
    name: DataTypes.STRING,
    selectionType: {
      type: DataTypes.ENUM,
      values: ['single', 'multiple']
    },
    isRequired: DataTypes.BOOLEAN
  }, {
    tableName: 'option_groups'
  });
  OptionGroup.associate = function(models) {
    OptionGroup.belongsToMany(models.Drink, {
      through: 'DrinkOptionGroup',
      as: 'drinks',
      foreignKey: 'option_group_id',
      otherKey: 'drink_id',
    });
    OptionGroup.belongsToMany(models.DrinkOption, {
      through: 'OptionGroupDrinkOption',
      as: 'options',
      foreignKey: 'option_group_id',
      otherKey: 'drink_option_id',
      onDelete: 'cascade'
    });
  };
  return OptionGroup;
};
