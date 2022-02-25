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