const stringArr = ["Newton", "Clinton", "Mousumi"];
const numberArr = [21, 30, 32];
const objArr = [
  {
    name: "Newton",
    age: "21",
  },
  { name: "Clinton", age: 30 },
  { name: "Mousumi", age: 32 },
];
console.log(objArr.length);
console.log(objArr.push({ name: "Unknown", age: "Unknown" }));
console.log(objArr.length);
let arrConstructor = new Array();
console.log(arrConstructor.length);
arrConstructor[0] = "Newton";
arrConstructor[1] = "Clinton";
console.log(arrConstructor.length);

const name = "Newton";
console.log(Array.from(name)); // separate every String into arr

let ofArray = Array.of("Bro", "Ram", "Laxman");

console.log(ofArray);

let sparseArr = [12, , , 14];
sparseArr[1] = 13;
console.log(sparseArr);

let newArr = [...stringArr, ...ofArray]; //spread syntax
console.log(newArr);

let dynamicArray = [12, "Bepari", { name: "Newton" }];
console.log(dynamicArray);

console.log(dynamicArray[0]);
console.log(dynamicArray[2]);

let fruits = ["mango", "banana", "apple"];
let fruit1 = fruits[0];
let fruit2 = fruits[1];
let fruit3 = fruits[2];
console.log(fruit1, fruit2, fruit3);

let [fruit11, fruit22, fruit33] = fruits; //array destructuring
console.log(fruit11, fruit22, fruit33);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
for (let fruit of fruits) {
  console.log(fruit);
}

fruits.forEach((fruit) => {
  console.log(fruit);
});

let fruits1 = ["mango", "Orange", "pineapple"];
let newFruitItem = fruits1.pop();
console.log(newFruitItem);
console.log(fruits1);

let newFruitItem1 = fruits1.shift();
console.log(newFruitItem1);
console.log(fruits1);
fruits1.unshift("papaya");
console.log(fruits1);
let nums = [2, 4, 6];
let newNums = nums.map((item) => item * 2);
console.log(nums);
console.log(newNums);

let twoDimensionalArr = [
  [1, 2,  3, 4],
  ["1", "2", "3", "4"],
];

console.log(twoDimensionalArr[1])
console.log(twoDimensionalArr)

let threeDimensionalArr =[
  [
    [1,2,3,4],
    [1,2,3,4]
  ],
  [
    ["1","2","3","4"],
    ["1","2","3","4"]
  ]
]
console.log(threeDimensionalArr[1][0]) // two access three dimensional array
console.log(threeDimensionalArr[0][0]) // two access three dimensional array