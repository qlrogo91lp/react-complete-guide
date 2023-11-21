let age: number;
age = 12;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

// type alias
type Person = {
    name: string;
    age: number;
};
let person: Person;

// let person: {
//     name: string;
//     age: number;
// };
person = {
    name: "Max",
    age: 32,
};

// let people: {
//     name: string;
//     age: number;
// }[]
let people: Person[];

// Type inference
// Union type
let cource: string | number = 'React - The Complete Guide';
cource = 12345;

// Functions & types
function add(a: number, b: number) {
    return a + b;
}

function print(value: any) {
    console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updateArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');