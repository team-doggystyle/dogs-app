module.exports = function(sequelize, DataTypes) {
  var Dog = sequelize.define("Dog", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age_years: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    age_months: {
      type: DataTypes.INTEGER
    }
  });
  // Dog.associate = function(models) {
  //   models.User.hasMany(models.Photo);
  // };
  console.log("What is a dog: ",Dog)
  return Dog;
};
