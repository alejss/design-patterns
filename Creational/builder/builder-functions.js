function PersonBuilder() {
  let person = {};
  return {
    setFirstName: function (firstName) {
      person.firstName = firstName;
      return this;
    },
    setLastName: function (lastName) {
      person.lastName = lastName;
      return this;
    },
    setAge: function (age) {
      person.age = age;
      return this;
    },
    build: function () {
      const personBuild = { ...person };
      person = {};
      return personBuild;
    },
  };
}

function PersonDirector(personBuilder) {
  return {
    createSimplePerson: function (firstName, lastName) {
      return personBuilder
        .setFirstName(firstName)
        .setLastName(lastName)
        .build();
    },
    createFullUser: function (firstName, lastName, age) {
      return personBuilder
        .setFirstName(firstName)
        .setLastName(lastName)
        .setAge(age)
        .build();
    },
  };
}

const person = PersonBuilder();

// Create User Objets

const personOne = person.setFirstName('Aarón').setLastName('Sánchez').build();
const personTwo = person.setFirstName('Alejandro').setAge(24).build();

// Create user By Director
const director = PersonDirector(person);
const personThree = director.createSimplePerson('Enrique', 'Mesa');
const personFour = director.createFullUser('Lisa', 'Morales', 25);
