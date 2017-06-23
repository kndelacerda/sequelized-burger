'use strict';

module.exports = function(sequelize, DataTypes) {

    var Customers = sequelize.define('Customers', {
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }
    }, {
        underscored: true,
        classMethods: {
            associate: function(models) {}
        }
    });

    return Customers;

};