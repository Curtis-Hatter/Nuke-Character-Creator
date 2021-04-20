const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/users"
);

const userSeed = [
    {
      user: {
      id: 1,
      username: "curtisH",
      password: "qwertyuiop",
      characters: [
        {
          name: "klepto",
          level: 1,
          race: "elf",
          class: "rogue",
          subClass: null,
          abilities: [{}],
          feats: [],
          spells: [],
        }]
      },
      _id: "607e5584a4b772bfdf325c13"
    }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });