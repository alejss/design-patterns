class Person {
  constructor(firstName, lastName, age, country, address, email, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.address = address;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }

  saveUser() {
    const person = {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      country: this.country,
      address: this.address,
      email: this.email,
      phoneNumber: this.phoneNumber,
    };

    return 'Save user: ', person;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class PersonBuilder {
  constructor() {
    this.reset();
  }

  setFirstName(firstName) {
    this.firstName = firstName;
    return this;
  }

  setLastName(lastName) {
    this.lastName = lastName;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  setCountry(country) {
    this.country = country;
    return this;
  }

  setAddress(address) {
    this.address = address;
    return this;
  }

  setEmail(email) {
    this.email = email;
    return this;
  }

  setPhoneNumber(phoneNumber) {
    this.phoneNumber = phoneNumber;
    return this;
  }

  reset() {
    this.firstName = '';
    this.lastName = '';
    this.age = '';
    this.country = '';
    this.address = '';
    this.email = '';
    this.phoneNumber = '';
  }

  build() {
    const person = new Person(
      this.firstName,
      this.lastName,
      this.age,
      this.country,
      this.address,
      this.email,
      this.phoneNumber
    );

    this.reset();
    return person;
  }
}

const person = new PersonBuilder();

const personOne = person
  .setFirstName('Aaron')
  .setLastName('Sánchez')
  .setAge(23)
  .setCountry('Guatemala')
  .build();

console.log(personOne.saveUser());

const personTwo = person
  .setAddress('Ciudad de Guatemala')
  .setPhoneNumber('209223209223')
  .setEmail('test@gmail.com')
  .setFirstName('Alejandro')
  .build();

console.log(personTwo.saveUser());

console.log(personOne.getFullName());
console.log(personTwo.getFullName());
