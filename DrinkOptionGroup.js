'use strict';
module.exports = (sequelize, DataTypes) => {
  const DrinkOptionGroup = sequelize.define('DrinkOptionGroup', {
    drink_id: DataTypes.UUID,
    option_group_id: DataTypes.UUID
  }, {
    tableName: 'drinks_option_groups'
  });
  DrinkOptionGroup.associate = function(models) {
    // associations can be defined here
  };
  return DrinkOptionGroup;
};
