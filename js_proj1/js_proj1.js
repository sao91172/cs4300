function double (input) {
    return input * 2;
}//double

function triple (input) {
    return input * 3;
}//triple

const square = input => input * input;

const increment = input => input + 1;

function map(arr,instructions) {
    const array = [];
    for(let i = 0; i < arr.length;i++) {
        array.push(instructions(arr[i]));
    }
    return array;
}//map


function forEach( arr, instructions) {
    //populate the array
    for (let i = 0; i < arr.length; i++) {
        arr[i] = instructions(arr[i]);
    }
}//forEach


console.log(map([1, 2, 3], double)); // should output [ 2,4,6 ] (2 pts.)
console.log(map([5,10,5], triple)); // should output [ 15, 30, 15 ] (2 pts.) 
console.log(map([1,2], square)); // should output [ 1,4 ] (2 pts.)


myarray = [2,3,4];
forEach(myarray, increment);
console.log(myarray); // should output [3, 4, 5] (3 pts.)

myarray = [10,20];
forEach(myarray, square);
console.log(myarray); // should output [100, 400] (3 pts.)

