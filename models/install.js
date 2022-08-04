'use strict';

module.exports = function(sequelize, DataTypes) {
    var Install = sequelize.define(
        'Install',
        {
            platform: { type: DataTypes.TEXT },
            country: { type: DataTypes.TEXT },
        },
        {
            createdAt: { type: DataTypes.TIMESTAMP },
            updatedAt: { type: DataTypes.TIMESTAMP },
            deletedAt: { type: DataTypes.TIMESTAMP },
            paranoid: true,
            underscored: true,
            tableName: 'install',
        },
    );

    return Install;
};