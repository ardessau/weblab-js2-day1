console.log ('hello world');

// Method 1
var o = { };
o.name = "Audrey";
o.address = "123 Main Street"
o.age = 19;
o.age += 5;

// Method 2
var o2 = {
    name: "Audrey",
    address: "123 Main Street",
    age: 19 +5
};

o2.age += 5;


o2.name = "Ms. " + o2.name + " Dessauer"
console.log(o);
console.log(o2);
