'use strict';

module.exports = {

	up: function(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('Customers', [{
			name: "Luke Skywalker",
			created_at: Sequelize.fn('NOW'),
			updated_at: Sequelize.fn('NOW')
		}, {
			name: "Anakin Skywalker",
			created_at: Sequelize.fn('NOW'),
			updated_at: Sequelize.fn('NOW')
		}, {
			name: "C-3PO",
			created_at: Sequelize.fn('NOW'),
			updated_at: Sequelize.fn('NOW')
		}, {
			name: "Princess Leia",
			created_at: Sequelize.fn('NOW'),
			updated_at: Sequelize.fn('NOW')
		}, {
			name: "Master Yoda",
			created_at: Sequelize.fn('NOW'),
			updated_at: Sequelize.fn('NOW')
		}]);
	},

	down: function(queryInterface) {
		return queryInterface.bulkDelete('Customers', null, {});
	}
};
