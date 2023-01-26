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

const person = PersonBuilder();

const personOne = person.setFirstName('Aarón').setLastName('Sánchez').build();
const personTwo = person.setFirstName('Alejandro').setAge(24).build();

console.log(personOne);
console.log(personTwo);
