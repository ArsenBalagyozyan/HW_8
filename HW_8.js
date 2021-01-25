// task 1

class Employee {

  constructor(id, firstName, lastName, position, salary, workingHours) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._position = position;
    this._salary = salary;
    this._workingHours = workingHours;
  }

  get id() {
    return this._id;
  }

  get firstName() {
    return this._firstName;
  }
  
  get lastName() {
    return this._lastName;
  }
  
  get position() {
    return this._position;
  }
  
  get salary() {
    return this._salary;
  }

  get workingHours() {
    return this._workingHours;
  }

  set id(id) {
    if (typeof id !== 'number') {
      throw new Error('please, insert valid id');
    }
    this._id = id;
  }

  set firstName(firstName) {
    if (typeof firstName !== 'string') {
      throw new Error('please, insert valid first name');
    }
    this._firstName = firstName;
  }

  set lastName(lastName) {
    if (typeof lastName !== 'string') {
      throw new Error('please, insert valid last name');
    }
    this._lastName = lastName;
  }

  set position(position) {
    if (typeof position !== 'string') {
      throw new Error('please, insert valid position');
    }
    this._position = position;
  }

  set salary(salary) {
    if (typeof salary !== 'number') {
      throw new Error('please, insert valid salary');
    }
    this._salary = salary;
  }

  set workingHours(workingHours) {
    if (typeof workingHours !== 'number') {
      throw new Error('please insert valid working hours');
    }
    this._workingHours = workingHours;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAnnularSalary() {
    return 12 * this.salary;
  }

  raiseSalary(percent) {
    this.salary = this.salary + (this.salary * percent) / 100;
  }

}

let e1 = new Employee(5, "Arsen", "Balagyozyan", "developer", 200000, 8);

let fullName = e1.getFullName();
let annualSalary = e1.getAnnularSalary();

console.log('full name is', fullName);
console.log('his annual salary is', annualSalary);

e1.raiseSalary(12);
annualSalary = e1.getAnnularSalary();

console.log('his increased annual salary is', annualSalary);


// task 2

class Account {

  constructor(id, name, balance) {
    this._id = id;
    this._name = name;
    this._balance = balance;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get balance() {
    return this._balance;
  }

  set name(name) {
    this._name = name;
  }

  set balance(balance) {
    this._balance = balance;
  }

  static idenfityAccounts(accountFirst, accountSecond) {
    
    for (let i in accountFirst) {
    
      if (accountFirst.hasOwnProperty(i) && accountFirst[i] !== accountSecond[i]) {
        return false;
      }

    }

    return true;

  }

  credit(amount) {
    return (this.balance += amount);
  }

  debit(amount) {
    if (amount > this.balance) {
      throw new Error('Amount exceeded balance');
    }
    return (this.balance -= amount);
  }

  transferTo(anotherAccount, amount) {
    if (amount > this.balance) {
      throw new Error('Insufficient funds');
    }
    this.balance -= amount;
    anotherAccount.balance += amount;
  }

  toString() {
    return `ID: ${this.id}; Name: ${this.name}; Balance: ${this.balance};`;
  }

}

const account1 = new Account(1, 'Arsen', 1529);
const account2 = new Account(2, 'Alex', 1000);

console.log('credit', account1.credit(25));
console.log('debit', account1.debit(10));

account1.transferTo(account2, 150);

console.log('account 1 balance', account1.balance);
console.log('account 2 balance', account2.balance);

console.log('identify accounts, test 1', Account.idenfityAccounts(account1, account1));
console.log('identify accounts, test 2', Account.idenfityAccounts(account1, account2));

console.log(account1.toString());
console.log(account2.toString());


// task 3

class Person {

  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }
  
  get firstName() {
    return this._firstName;
  }
  
  get lastName() {
    return this._lastName;
  }
  
  get gender() {
    return this._gender;
  }
  
  get age() {
    return this._age;
  }

  set firstName(firstName) {
    this._firstname = firstName;
  }

  set lastName(lastName) {
    this._lastName = lastName;
  }

  set gender(gender) {
    this._gender = gender;
  }

  set age(age) {
    this._age = age;
  }

  toString() {
    return `firstName: ${this.firstName}; lastName: ${this.lastName}; gender: ${this.gender}; age: ${this.age}`; 
  } 
}

class Student extends Person {

  constructor(firstName, lastName, gender, age, program, year, fee) {
    super(firstName, lastName, gender, age);
    this._program = program;
    this._year = year;
    this._fee = fee;
  }

  get program() {
    return this._program;
  }

  get year() {
    return this._year;
  }

  get fee() {
    return this._fee;
  }

  set program(program) {
    this._program = program;
  }

  set year(year) {
    this._year = year;
  }

  set fee(fee) {
    this._fee = fee;
  }

  passExam(programName, grade) {
    let program = this.program;
    let found = false;
    let gradeSum = 0;
    for (let i in program) {
      if (program[i].programName === programName) {
        program[i].grade = grade;
        found = true;
      }
      gradeSum += program[i].grade;
    }
    if (found) {
      this.program = program;
    } else {
      gradeSum += grade;
      this.program = [...program, {programName, grade}];
    }
    if (gradeSum >= 50) {
      this.year++;
    }
  }

}

let s = new Student('Arsen', 'Balagyozyan', 'male', 31, [{programName: 'js', grade: 25}, {programName: 'python', grade: 17}], 1, 54000);

s.passExam('js1', 1);
console.log(s.year)
