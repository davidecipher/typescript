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