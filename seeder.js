'use strict'

module.exports = {

  seed: function (db) {

    let dogs = [{
        name: "Bella",
        breed: "Huskey",
        adopted: false,
        photo: "/assets/img/logo1.jpg"
      },
      {
        name: "Lucy",
        breed: "Jack Russell",
        adopted: true,
        photo: "/assets/img/logo1.jpg"
      },
      {
        name: "Daisy",
        breed: "Australian Shepherd",
        adopted: true,
        photo: "/assets/img/logo1.jpg"
      },
      {
        name: "Bailey",
        breed: "German Shepherd",
        adopted: false,
        photo: "/assets/img/logo1.jpg"
      },
      {
        name: "Luna",
        breed: "Pit bull",
        adopted: true,
        photo: "/assets/img/logo1.jpg"
      },

    ]

    let dogCreationPromises = dogs.map(function (dog) {
      console.log("Testing", db.Dog)
      return db.Dog.create({
        name: dog.name,
        breed: dog.breed,
        adopted: dog.adopted,
        photo: dog.photo
      })

    })
    return Promise.all(dogCreationPromises)
  }
}