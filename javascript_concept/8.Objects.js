// Object Literals
const jsUser = {
    name: "Sahil",
    age: 21,
    "full name": "Sahil Khan",
    location: "Delhi",
    email: "sahil@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser["name"]);


jsUser.greeting = function() {
    console.log("Hello JS user");
}
jsUser.greeting2 = function() {
    console.log(`Hello JS User, ${this.name}`);
}

// console.log(jsUser.greeting);
// console.log(jsUser.greeting());
// console.log(jsUser.greeting2());



// const tinderUser = new Object(); // Singleton Object
const tinderUser = {}; // Non-singleton Object

tinderUser.id = "123abc";
tinderUser.name = "Samay";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sahil",
            lastname: "Khan",
        }
    }
}

// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

const obj3 = {...obj1, ...obj2};
const obj4 = Object.assign(obj1, obj2);
// console.log(obj3);
// console.log(obj4);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id:2,
        email: "s@gmail.com"
    }
];

users[1].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Samay', false ] 





const course = {
    coursename: 'js in hindi',
    price: '999',
    courseInstructor: 'hitesh',
};

// De-structuring
const {courseInstructor: instructor} = course;

console.log(instructor);














