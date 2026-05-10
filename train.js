
// increaseBtn.onclick = function(){
//     countLabel.textContent = count;
// }


        //bigint
// let bigint = BigInt("2348623486234982648273610912373");
// console.log(typeof(bigint));

        //symbol
// const sym1 = Symbol(10);
// const sym2 = Symbol(10);
// console.log(sym1 === sym2);

        //null
// let age = null;
// console.log(age);

            //function
// function myNum(brother, sister){
//     return "my brother name " + brother + "my sister name " + sister;
// }
// console.log(myNum("thearith", "pheary"));

            //object, object literal, new keyword, object constructor
            //literal object
// const car = {
//     make: "BMW",
//     model: "A-class",
//     years: 2024,
//     //Method
//     displayInfo: function(){
//         console.log(`${this.make} ${this.model} ${this.years}`);
//     }
// };
// console.log(car.make);
// console.log(car.model);
// console.log(car.years);
// car.displayInfo();
//             //new keyword
// const date = new Date();
// console.log(date);

// function Car(make, model, years) {
//     this.make = make;
//     this.model = model;
//     this.years = years;
//     this.displayInfo = function() {
//         console.log(`${this.make} ${this.model} ${this.years}`)
//     }
// }
// const car1 = new Car("ford", "khlanhko", 2024);
// const car2 = new Car("lambogini", "B-class", 2020);
// console.log(car1);
// console.log(car2);

// car1.displayInfo();
// car2.displayInfo();

            //event event type = mouseover, mouseout, keydown, click
            // dblclick(double click) . . .;
// const button = document.getElementById("btn");
// const a = document.getElementById("a");
// button.addEventListener("mouseover", function() {
//     button.style.backgroundColor = "blue";
//     const p = document.getElementById("p");
//     p.textContent = "The text has been changed.";
//     p.style.color = "red";
// })
// button.addEventListener("mouseout", function() {
//     button.style.backgroundColor = "red";
// })
// a.addEventListener("mouseout", function() {
//     const p = document.getElementById("p");
//     p.textContent = "I love you puya";
//     p.style.color = "pink";
// })

// let text = "this is a string";
// let firstName = "heng";
// let lastName = "jake";
//         //template string
// let fullName =  `Hello, guy ${firstName} ${lastName}`;
// console.log(fullName);

                //Array concat
// const langs = ["phython", "javascript", "php", "html", "css"];
// const frame = ["vue.js", "react.js", "node.js"];
// const concat = langs.concat(frame);
// console.log(concat);
                //Array method forEach(), map(), filter(), reduce(), some()
        //forEach()
// const number = [1, 2, 3, 4];
// number.forEach(function(number) {
//         console.log(number);
// });
        //map()
// const number = [1, 2, 3, 3];
// const double = number.map(function(number) {
//         return number * 2;
// });
// console.log(double);
        //filter()
// const number = [1, 2, 3, 4, 5];
// const even = number.filter(function(number) {
//         return number % 2 === 0;
// });
// console.log(even);
        //reduce()
// const number = [1, 2, 3, 4, 5];
// const sum = number.reduce(function(total, number) {
//         console.log(total, number)
//         return total + number;
//         // 1 + 2 = 3
//         // 3 + 3 = 6
//         // 6 + 4 = 10
//         // 10 + 5 = 15
// },0);
// console.log(sum);
        //some()
// const number = [1, 2, 3, 4, 5];
// const hasEven = number.some(function(number) {
//         return number % 2 === 0;
// });
// console.log(hasEven);
        //every()
// const number = [1, 2, 3, 4, 5, 9];
// const hasEven = number.every(function(number) {
//         return number > 0;
// });
// console.log(hasEven);