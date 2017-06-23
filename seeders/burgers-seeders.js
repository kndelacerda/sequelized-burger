'use strict';

module.exports = {

    up: function(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Burgers', [{
            name: "Cheeseburger",
            devoured: "0",
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }, {
            name: "Double Cheeseburger",
            devoured: "0",
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }, {
            name: "Triple Cheeseburger",
            devoured: "0",
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }, {
            name: "Quadruple Cheeseburger",
            devoured: "0",
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }, {
            name: "The Heart Clogger Burger",
            devoured: "0",
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }, {
            name: "Krabby Patty",
            devoured: "1",
            customer_id: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }, {
            name: "Whopper Jr.",
            devoured: "1",
            customer_id: 2,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }]);
    },

    down: function(queryInterface) {
        return queryInterface.bulkDelete('Burgers', null, {});
    }
};