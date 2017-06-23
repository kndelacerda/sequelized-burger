'use strict';

module.exports = function(sequelize, DataTypes) {

    var Burgers = sequelize.define('Burgers', {
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        devoured: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        }
    }, {
        underscored: true,
        classMethods: {
            associate: function(models) {
                Burgers.belongsTo(models.Customers, { foreignKey: 'customer_id' });
            }
        }
    });

    return Burgers;
};


// var orm = require('../config/orm');


// var burger = {
//     table: 'burgers',

//     allBurgers: function(cb) {
//         orm.all(this.table, function(res) {
//             cb(res);
//         });
//     },

//     saveBurger: function(cols, vals, cb) {
//         orm.create(this.table, cols, vals, function(res) {
//             cb(res);
//         });
//     },

//     devourBurger: function(objColVals, condition, cb) {
//         orm.update(this.table, objColVals, condition, function(res) {
//             cb(res);
//         });
//     },

//     trashBurger: function(condition, cb) {
//         orm.delete(this.table, condition, function(res) {
//             cb(res);
//         });
//     }
// };

// module.exports = burger;