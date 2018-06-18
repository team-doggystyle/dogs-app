module.exports = function (sequelize, DataTypes) {
    var Application = sequelize.define("Application", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        phone: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        newsletter: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        }
    });
    return Application;
};