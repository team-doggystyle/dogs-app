module.exports = function(sequelize, DataTypes) {
  var Dog = sequelize.define("dog", {
    name: {
      type: DataTypes.STRING
    },
    breed: {
      type: DataTypes.STRING
    },
    age_years: {
      type: DataTypes.INTEGER
    },
    age_months: {
      type: DataTypes.INTEGER
    }
  });
  // Dog.associate = function(models) {
  //   models.User.hasMany(models.Photo);
  // };
  return Dog;
};
