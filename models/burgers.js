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
