'use strict'

module.exports = {

  seed: function(db) {

    let dogs = [
      {
        name: "Bella",
        breed: "Huskey",
        adopted: true,
        // photo: "../img/"
      },
      {
        name: "Lucy",
        breed: "Jack Russell",
        adopted: true
      },
      {
        name: "Daisy",
        breed: "Australian Shepherd",
        adopted: true
      },
      {
        name: "Bailey",
        breed: "German Shepherd",
        adopted: true
      },
      {
        name: "Luna",
        breed: "Pit bull",
        adopted: true
      },
  
    ]
 
    let dogCreationPromises = dogs.map(function(dog) {
        console.log("Testing",db.Dog)
      return db.Dog.create({ 
      name: dog.name,
      breed: dog.breed,
      adopted: dog.adopted
      })
      
    })
    return Promise.all( dogCreationPromises )
  }
}
