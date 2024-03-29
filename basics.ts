// Primitives: stsring, number, boolean, null, undefined
// Reference types: object, array, function

// Primitives
let age: number;

age = 30.5;

let userName: string = 'David';

let isInstructor: boolean = true;

// Reference types

let hobbies: string[] = ['Sports', 'Cooking', 'Reading', 'Coding'];

let person: {
    name: string,
    age: number,
    isEmployed: boolean
} = { 
    name: 'David',
    age: 30,    
    isEmployed: true    
};

let complex: {
    data: number[],
    names: string[]
}[] = [
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

let nameAs = 'David';
// nameAs = 12;

// Union types

let realAge: number | string;
realAge = 30;
realAge = 'Thirty';

// Type aliases

type Car = {
    brand: string,
    year: number
};

let car: Car[] = [ 
    {
        brand: 'Ford',
        year: 2020
    },
    {
        brand: 'Tesla',
        year: 2020
    }
];

// Functions & types

function add(a: number, b: number){
    return a + b;
}

add(1, 2);

function printOutput(value: any){
    console.log(value);
}

// Generic types

function insertAtBeginning<S>(array:S[], value: S){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -4);
const stringArray = insertAtBeginning(['Hello', 'World'], 'David');

class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // courses: string[];

    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]
        ){}

    enrollInCourse(course: string){
        this.courses.push(course);
    }

    listCourse(){
        return this.courses.slice();
    }
}

const student = new Student('David', 'Smith', 30, ['Math', 'English']);
student.enrollInCourse('English');
  

// Interfaces -> Object types defined by the developer
interface Person {
    firstName: string;
    lastName: string;
    age: number;

    greet: () => void;
}

let max: Person;

max = {
    firstName: 'David',
    lastName: 'Smith',
    age: 30,
    greet: () => {
        console.log('Hi');
    }   
};
// They can interact with classes

class Instructor implements Person {
    firstName: string;
    lastName: string;
    age: number;
    courses: string[];

    constructor(firstName: string, lastName: string, age: number, courses: string[]){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }

    greet(){
        console.log('Hello');
    }
}

