class WeekDays {
  dayES = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
  ];

  dayEN = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  constructor(lang) {
    this.lang = lang;

    if (WeekDays.instance) {
      return WeekDays.instance;
    }
    WeekDays.instance = this;
  }

  getDays() {
    return this.lang === 'es' ? this.dayES : this.dayEN;
  }
}

const weekDays = new WeekDays('es');
const weekDaysTwo = new WeekDays('en');

console.log(weekDays.getDays()); // es
console.log(weekDaysTwo.getDays()); // es
