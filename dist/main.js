"use strict";
// Basic types
let id = 5;
let company = 'Decipher Studios';
let isPublished = true;
let x = 'Hello';
let ids = [43, 413, 46, 32];
let arr = [43, true, 'Galaga'];
// Tuple
let person = [13, false];
// Tuple Array 
let employee;
employee = [
    [32, 'Jill'],
    [12, 'Mark']
];
// Unions
let pid;
pid = 34;
// Enum 
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion 
let cid = 1;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
;
function log(message) {
    console.log(message);
}
;
;
const user1 = {
    id: 1,
    name: 'John'
};
;
const add = (x, y) => x + y;
