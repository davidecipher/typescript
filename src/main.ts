// Basic types
let id: number = 5;
let company: string = 'Decipher Studios';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [43, 413, 46, 32];
let arr: any = [43, true, 'Galaga'];

// Tuple
let person: [number, boolean] = [13, false];

// Tuple Array 
let employee: [number, string] [];

employee = [
   [32, 'Jill'],
   [12, 'Mark']
];

// Unions
let pid: string | number;

pid = 34;

// Enum 
enum Direction1 {
   Up = 'Up', 
   Down = 'Down', 
   Left = 'Left',
   Right = 'Right',
}

// Objects

type User = {
   id: number,
   name: string
};

const user: User = {
   id: 1,
   name: 'John'
};

// Type Assertion 
let cid: any = 1;
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number  {
   return x + y;
};

function log(message: string | number): void {
   console.log(message);
};

// Interfaces
interface UserInterface {
   id: number, 
   name: string,
   age?: number
};

const user1: UserInterface = {
   id: 1,
   name: 'John'
};

interface MathFunc {
   (x: number, y: number): number
};

const add: MathFunc = (x: number, y: number): number => x + y;

interface PersonInterface {
   id: number,
   name: string
   register(): string
}

// Classes
class Person implements PersonInterface{
   id: number;
   name: string;

   constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
   }

   register() {
      return `${this.name}`;
   }
}

const mike = new Person(23, 'Michael Jordan');
const kobe = new Person(34, 'Kobe Bryant');

// Subclasses  
class Employee extends Person {
   position: string;

   constructor(id: number, name: string, position: string) {
      super(id, name)
      this.position = position;
   }

}

const emp = new Employee(3, 'Shawn', 'Developer');

// Generics
function getArray<T>(items: T[]): T[] {
   return new Array().concat(items);
}

let numArr = getArray<number>([1, 32, 324, 536]);
let strArr = getArray<string>(['mike', 'brad'])

