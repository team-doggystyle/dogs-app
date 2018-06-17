'use strict'

module.exports = {

  seed: function (db) {

    let dogs = [{
        name: "Abby",
        breed: "Boxer / German Shepherd Dog / Mixed (short coat)",
        adopted: true,
        photo: "/assets/img/successAdoptions/abby_boxer.jpg"
      },
      {
        name: "Alaska",
        breed: "Terrier (medium coat)",
        adopted: true,
        photo: "/assets/img/successAdoptions/alaska_terrier.jpg"
      },
      {
        name: "Albert",
        breed: "Plott Hound / American Staffordshire Terrier / Mixed (short coat)",
        adopted: true,
        photo: "/assets/img/successAdoptions/albert_terrier.jpg"
      },
      {
        name: "Amber",
        breed: "Labrador Retriever / Chinese Shar-Pei / Mixed",
        adopted: true,
        photo: "/assets/img/successAdoptions/amber_retriever.jpg"
      },
      {
        name: "Baby",
        breed: "Maltese / Poodle (Miniature) / Mixed (medium coat)",
        adopted: true,
        photo: "/assets/img/successAdoptions/baby_maltese.jpg"
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