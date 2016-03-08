console.log ('hello world');

function sayHello(word) {
    console.log("Hello " + word);
}

sayHello("Audrey");

// Method 1
var o = { };
o.name = "Audrey";
o.address = "123 Main Street"
o.age = 19;
o.age += 5;
o.sayHello = function() {
    console.log("Hello pbject method");
}
o.sayHello();

o2.sayHello2 =  sayHello;

// Method 2
var o2 = {
    name: "Audrey",
    address: "123 Main Street",
    age: 19 +5,

    sayHello: function() {
        console.log("Hello, object method!!");
    },
    fruit: ["Apples", "Oranges", "Kiwi"]
};

o2.sayHello();

o2.age += 5;

o2.name = "Ms. " + o2.name + " Dessauer";

var myArray = ["Apples", "Oranges", "Kiwi"];

myArray.forEach(function(element, index){
  console.log(element , index);
})


console.log(myArray[0]);
console.log(o2.fruit[0]);

console.log(o);

console.log(o2);
