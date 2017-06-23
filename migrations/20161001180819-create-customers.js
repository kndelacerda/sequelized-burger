'use strict';

var Customers = require('../models')['Customers'];

module.exports = {

	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('Customers', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				unique: true,
				type: Sequelize.INTEGER
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		}).then(function() {
			Customers.bulkCreate([{
				name: "Luke Skywalker"
			}, {
				name: "Master Yoda"
			}, {
				name: "Anakin Skywalker"
			}, {
				name: "Han Solo"
			}, {
				name: "Darth Maul"
			}]);
		});
	},

	down: function(queryInterface) {
		return queryInterface.dropTable('Customers');
	}

};
