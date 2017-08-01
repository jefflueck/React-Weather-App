// var names = ["Jeff", "Joe", "Jen"];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Jeff'));

// var person = {
//   name: 'Jeff',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

// Challange
// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(9,3));


var add = (a, b) => {
  return a + b;
}
console.log(add(4, 5));

var add2 = (a, b) => a + b;
console.log(add2(10, 20));
