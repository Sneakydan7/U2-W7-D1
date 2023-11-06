class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static isOlderThan(userA, userB) {
    if (userA.age < userB.age) {
      return (
        userA.firstName +
        " " +
        userA.lastName +
        " " +
        "is younger than" +
        " " +
        userB.firstName +
        " " +
        userB.lastName
      );
    } else if (userA.age === userB.age) {
      return (
        userA.firstName +
        " " +
        userA.lastName +
        " " +
        "is the same age of" +
        " " +
        userB.firstName +
        " " +
        userB.lastName
      );
    } else {
      return (
        userA.firstName +
        " " +
        userA.lastName +
        " " +
        "is older than" +
        " " +
        userB.firstName +
        " " +
        userB.lastName
      );
    }
  }
}
const myUsers = [
  new User("Daniele", "Cagnoni", 27, "Roma"),
  new User("Luigi", "Longo", 27, "Roma"),
  new User("Marco", "Carta", 48, "Arezzo"),
  new User("Mirco", "Epico", 19, "Roma"),
];

console.log(User.isOlderThan(myUsers[0], myUsers[2]));

let form = document.getElementById("petForm");
let formSubmit = document.getElementById("submit");

let petBox = document.getElementById("pet");
let ownerBox = document.getElementById("owner");
let speciesBox = document.getElementById("species");
let breedBox = document.getElementById("breed");
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static isSameOwner(ownerA, ownerB) {
    if (ownerA.ownerName === ownerB.ownerName) {
      return true;
    }
  }
}

form.onsubmit = function (event) {
  new Pet(petBox.value, ownerBox.value, speciesBox.value, breedBox.value);

  let listItem = document.createElement("li");

  listItem.innerText =
    "name:" +
    " " +
    petBox.value +
    " " +
    "owner:" +
    " " +
    ownerBox.value +
    " " +
    "species:" +
    " " +
    speciesBox.value +
    " " +
    "breed:" +
    " " +
    breedBox.value +
    " ";
  let list = document.getElementById("petList");
  list.appendChild(listItem);
  event.preventDefault();

  form.reset();
};
