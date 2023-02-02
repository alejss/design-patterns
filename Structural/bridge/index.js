const usersList = [
  {
    userName: 'Alejandro',
    age: 24,
    address: '8 Calle',
    phoneNumber: 929292,
    status: true,
  },
  {
    userName: 'Rodrigo',
    age: 23,
    address: '9 Calle',
    phoneNumber: 383838,
    status: false,
  },
  {
    userName: 'Felipe',
    age: 19,
    address: '10 Calle',
    phoneNumber: 23323222,
    status: false,
  },
  {
    userName: 'Andrea',
    age: 30,
    address: '8 Calle',
    phoneNumber: 9393939,
    status: false,
  },
];

class IViewModel {
  constructor(implementor) {
    this.implementor = implementor;
  }

  movieList() {
    return this.implementor.movieList();
  }

  qualityOptions() {
    return this.implementor.qualityOptions();
  }

  options() {
    return this.implementor.options();
  }
}

class BasicViewModel {
  movieList() {
    return ['Avatar 1', 'Cars 1', 'The Office'];
  }

  qualityOptions() {
    return ['HD'];
  }

  options() {
    return ['Share with TV'];
  }
}

class GoldViewModel {
  movieList() {
    return ['Avatar 1', 'Cars 1', 'The Office', 'The las of us 2'];
  }

  qualityOptions() {
    return ['HD', '2K', '4K'];
  }

  options() {
    return ['Share with TV', 'Shared Movie'];
  }
}

const viewMaps = { basic: BasicViewModel, gold: GoldViewModel };

const userOne = { subscriptionType: 'basic' };
const userTwo = { subscriptionType: 'gold' };

const userOneView = new IViewModel(new viewMaps[userOne.subscriptionType]());
console.log(userOneView.movieList());

const userTwoView = new IViewModel(new viewMaps[userTwo.subscriptionType]());
console.log(userTwoView.movieList());
