// Primitives: stsring, number, boolean, null, undefined
// Reference types: object, array, function
// Primitives
var age;
age = 30.5;
var userName = 'David';
var isInstructor = true;
// Reference types
var hobbies = ['Sports', 'Cooking', 'Reading', 'Coding'];
var person = {
    name: 'David',
    age: 30,
    isEmployed: true
};
var complex = [
    {
        data: [1, 2, 3],
        names: ['David', 'John']
    },
    {
        data: [4, 5, 6],
        names: ['David', 'John']
    }
];
// Type inference
var nameAs = 'David';
// nameAs = 12;
// Union types
var realAge;
realAge = 30;
realAge = 'Thirty';
var car = [
    {
        brand: 'Ford',
        year: 2020
    },
    {
        brand: 'Tesla',
        year: 2020
    }
];
