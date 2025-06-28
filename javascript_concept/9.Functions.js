// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2;
    // return result;

    return num1 + num2;
}

// addTwoNumbers(3, 'a'); // 3a
// addTwoNumbers(3, null); // 3

const result1 = addTwoNumbers(3, 5);
// console.log("Result: ", result);


function loginUserMessage(username) {
    // if(username === undefined) {
    //     console.log("Please enter a username");
    //     return;
    // }
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

const result2 = loginUserMessage("Sahil");
// console.log(result2);


function calculatePrice(...num1) {
    return num1;
}

console.log(calculatePrice(200, 300, 100, 400, 500)); // [ 200, 300, 100, 400, 500 ]


// const anyObject = {
//     username: "Sahil",
//     price: 999,
// }


// function fun1(anyObject) {
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
// }

// fun1(anyObject);











