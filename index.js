class Wroker {
    #name;
    #surname;
    #rate; // ставка за день
    #days; // количество отработанных дней

  constructor (name, surname, rate, days)
  {
    this.#name = name;
    this.#surname = surname;
    this.#rate = rate; // ставка за день
    this.#days = days; // количество отработанных дней
  }

  get name()
  {
    return console.log(`Имя рабоника ${this.#name}`);
  }
  get surname()
  {
    return console.log(`Фамилия рабоника ${this.#surname}`);
  }
  get rate()
  {
    return console.log(`Ставка рабоника за день ${this.#rate}`);
  }
  get days()
  {
    return console.log(`Количество отработанных дней сотрудником ${this.#days}`);
  }
  
  getSalary()
  {
    let salary;
    salary = this.#rate * this.#days;
    console.log(`${this.#name} ${this.#surname}` + ' получает зарплату в размере ' + salary + ' рублей')
  }
    
  };

  let name1 = 'Александра';
  let surname1 = 'Бердичевская';
  let rate1 = 500;
  let days1 = 20;

  let name2 = 'Дарья';
  let surname2 = 'Перемитина';
  let rate2 = 300;
  let days2 = 10;
  let Wroker1 = new Wroker(name1, surname1, rate1, days1);
  Wroker1.getSalary();

  let Wroker2 = new Wroker(name2, surname2, rate2, days2);
  Wroker2.getSalary();
