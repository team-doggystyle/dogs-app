module.exports = function(sequelize, DataTypes) {
  var Dog = sequelize.define("dog", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    age_years: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    age_months: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
  // Dog.associate = function(models) {
  //   models.User.hasMany(models.Photo);
  // };
  return Dog;
};
