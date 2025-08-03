const person = {
    name: 'Sadar Uddin',
    age : 25, 
    profession: 'Developer',
    salary: 25000,
    married: true,
    "fav places": ['Bandarban', 'Kuakata', 'Kolikata']
}
// console.log(person);
console.log(person.name);


//dot notation : dot symbol diyer object er property access kora
const income = person.salary;
console.log(income);

//bracket Notation
console.log(person['age'])
const boyosh = person['age'];
console.log(boyosh);

//error
//console.log(person."fav places")

console.log(person['fav places']);