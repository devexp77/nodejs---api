'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('option_groups_drink_options', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      option_group_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      drink_option_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    .then(() => queryInterface.addConstraint('option_groups_drink_options', ['option_group_id'], {
          type: 'FOREIGN KEY',
          name: 'DRINK_OPTIONS_OPTION_GROUP_FOREIGN_KEY',
          references: {
            table: 'option_groups',
            field: 'id',
          },
          onDelete: 'CASCADE',
        },
    ))
    .then(() => queryInterface.addConstraint('option_groups_drink_options', ['drink_option_id'], {
          type: 'FOREIGN KEY',
          name: 'DRINK_OPTION_FOREIGN_KEY',
          references: {
            table: 'drink_options',
            field: 'id',
          },
          onDelete: 'CASCADE',
        }
    ));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('option_groups_drink_options');
  }
};
