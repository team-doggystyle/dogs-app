'use strict'

module.exports = {

  seed: function(db) {

    let dogs = ['Cheeseburger', 'Teriyaki Burger', 'Bacon Burger', 'Veggie Burger', 'Impossible Burger']

    let dogCreationPromises = dogs.map(function(dog) {
        console.log("Testing",db.Dog)
      return db.Dog.create({ name: dog,
      breed: dog
    })
      
    })
    return Promise.all( dogCreationPromises )
  }
}
