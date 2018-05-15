// const person = {
//     name: 'Chris',
//     age: 28,
//     location: {
//         city: 'LA',
//         temp: 70
//     }
// };

// const {name, age} = person;
// const name = person.name;
// const age = person.age;


// console.log(`${name} is ${age}.`);

// const {city: ct = 'nowhere', temp: temperature = 'unknown'} = person.location;

// if (ct && temperature) {
//     console.log(`It's ${temperature} in ${ct}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = "self-published"} = book.publisher;
// console.log(publisherName);

const address = ['1299 S Juniper St.', 'LA', 'CA', '90210'];
const [street, city, state = 'Califoria', zipCode] = address;

console.log(street);
console.log(city);

const item = ['Coffee (iced)', '$2.00', '$2.60', '$2.75'];
const [hotCoffee, , mediumPrice] = item;

console.log(`A medium ${hotCoffee} costs ${mediumPrice}`);