'use strict';
module.exports = (sequelize, DataTypes) => {
  const OptionGroupsDrinkOptions = sequelize.define('OptionGroupDrinkOption', {
    option_group_id: DataTypes.INTEGER,
    drink_option_id: DataTypes.INTEGER
  }, {
    tableName: 'option_groups_drink_options'
  });
  OptionGroupsDrinkOptions.associate = function(models) {
    // associations can be defined here
  };
  return OptionGroupsDrinkOptions;
};
