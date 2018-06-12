module.exports = function (sequelize, DataTypes) {
    var Application = sequelize.define("application", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        newsletter: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        }
    });
    return Application;
};