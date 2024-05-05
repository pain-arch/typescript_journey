//strings 
let myMessage: string = 'Hello World';

myMessage = 'Hello World Again';

//not acceptable
//myMessage = 12;// Error: Type '12' is not assignable to type 'string'.
//myMessage = true;// Error: Type 'true' is not assignable to type 'string'.


//numbers
let myNumber: number = 100;

myNumber = 200;

//not acceptable
//myNumber = '100';// Error: Type '"100"' is not assignable to type 'number'.
//myNumber = true;// Error: Type 'true' is not assignable to type 'number'.

//booleans
let myBoolean: boolean = true;

myBoolean = false;

//not acceptable
//myBoolean = 'true';// Error: Type '"true"' is not assignable to type 'boolean'.
//myBoolean = 1;// Error: Type '1' is not assignable to type 'boolean'.


console.log(myMessage);
console.log(myNumber);
console.log(myBoolean);



