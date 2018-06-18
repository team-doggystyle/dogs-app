'use strict'

module.exports = {

  seed: function (db) {

    let dogs = [{
        name: "Abby",
        breed: "Boxer / German Shepherd Dog",
        adopted: true,
        photo: "/assets/img/successAdoptions/abby_boxer.jpg"
      },
      {
        name: "Alaska",
        breed: "Terrier",
        adopted: true,
        photo: "/assets/img/successAdoptions/alaska_terrier.jpg"
      },
      {
        name: "Albert",
        breed: "Plott Hound / American Staffordshire Terrier / Mixed",
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
        breed: "Maltese / Poodle (Miniature) / Mixed",
        adopted: true,
        photo: "/assets/img/successAdoptions/baby_maltese.jpg"
      },
      {
        name: "Bailey",
        breed: "Terrier / Mixed",
        adopted: true,
        photo: "/assets/img/successAdoptions/bailey_terrier.jpg"
      },
      {
        name: "Bailey",
        breed: "Labrador Retriever / Shepherd / Mixed",
        adopted: true,
        photo: "/assets/img/successAdoptions/bailey_retriever.jpg"
      },
      {
        name: "Ballerina",
        breed: "Poodle",
        adopted: true,
        photo: "/assets/img/successAdoptions/ballerina_poodle.jpg"
      },
      {
        name: "Daisy",
        breed: "Basset Hound",
        adopted: true,
        photo: "/assets/img/successAdoptions/daisy_hound.jpg"
      },
      {
        name: "Daniel",
        breed: "Tibetan Terrier / Poodle (Miniature) / Mixed",
        adopted: true,
        photo: "/assets/img/successAdoptions/daniel_tibetan_terrier.jpg"
      },
      {
        name: "Elsa",
        breed: "Chihuahua",
        adopted: true,
        photo: "/assets/img/successAdoptions/elsa_chihuahua.jpg"
      },
      {
        name: "Gemma",
        breed: "Husky",
        adopted: true,
        photo: "/assets/img/successAdoptions/gemma_husky.jpg"
      },
      {
        name: "Gilda",
        breed: "Bulldog / Boston Terrier / Mixed",
        adopted: true,
        photo: "/assets/img/successAdoptions/gilda_bulldog.jpg"
      },
      {
        name: "Harley",
        breed: "Cocker Spaniel / Mixed",
        adopted: true,
        photo: "/assets/img/successAdoptions/harley_cocker_spaniel.jpg"
      },
      {
        name: "Jake",
        breed: "Terrier / Chihuahua / Mixed",
        adopted: true,
        photo: "/assets/img/successAdoptions/jake_terrier.jpg"
      },
      {
        name: "Katie",
        breed: "Yorkshire Terrier Yorkie / Shih Tzu / Mixed",
        adopted: true,
        photo: "/assets/img/successAdoptions/katie_yorkie.jpg"
      },
      {
        name: "Keiko",
        breed: "Schnauzer / Terrier / Mixed",
        adopted: true,
        photo: "/assets/img/successAdoptions/keiko_schnauzer.jpg"
      },
      {
        name: "William",
        breed: "Pomeranian / Mixed",
        adopted: true,
        photo: "/assets/img/successAdoptions/william_pomeranian.jpg"
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