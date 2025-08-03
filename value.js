const person = {
    name: 'Sadar Uddin',
    age : 25, 
    profession: 'Developer',
    salary: 25000,
    married: true,
    "fav places": ['Bandarban', 'Kuakata', 'Kolikata']
}
person.salary = 30000;
person['age'] = 26;
person['fav places'] = ['Maldives', 'Hatiya', 'Bangladesh'];

const keyName = 'profession';

const propName = 'profession';
person[propName] = 'devOps'
console.log(person);

//variable er naamer moddhe spaces or bidghute kono kkisu thakle bracket notation use korte hobe .. dot notation kaj korbe nahhhh..