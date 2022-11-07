const person = {
    firstName: 'Vlad',
    lastName: 'Tsurkanenko',
    age: 25,
    hobbies: ['programming', 'biking'],
    '2Property': 'random value',
    adress: {
        street: 'Friedrichstr.',
        number: 122,
        city: 'Berlin'
    }
};

console.log('Hi! My address is ' + person.adress.street + " "
+ person.adress.number + ", " + person.adress.city);
