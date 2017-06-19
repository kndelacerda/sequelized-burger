var orm = require('../config/orm');


var burger = {
    table: 'burgers',

    allBurgers: function(cb) {
        orm.all(this.table, function(res) {
            cb(res);
        });
    },

    saveBurger: function(cols, vals, cb) {
        orm.create(this.table, cols, vals, function(res) {
            cb(res);
        });
    },

    devourBurger: function(objColVals, condition, cb) {
        orm.update(this.table, objColVals, condition, function(res) {
            cb(res);
        });
    },

    trashBurger: function(condition, cb) {
        orm.delete(this.table, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;