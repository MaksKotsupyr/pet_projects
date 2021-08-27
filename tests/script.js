// var b;
// console.log(b) //underfined 

// console.log(typeof {}); //object
// console.log(typeof undefined) //undefined
// console.log(typeof null) //object
// console.log(typeof function(){}) //function

// var a = {foo: 6};
// var b = {foo: 6};
// console.log(a==b, a===b) // false, false

// let arr1 = ['a','bb','ccc','dddd'];
// let arr2 = arr1.map(item => item.length);
// console.log(arr2) //['1','2','3','4']

// var arr = []
// arr[10000] = 1
// console.log(arr.length); //10001

// var ar = [2, 15, 20, 40, 9]; 
// console.log(Math.max.apply(null, ar)); // 40

// var a = {
// 	val: 10
// };
// function update (arg) {
// 	arg[0].val = 15;
// }
// update([a]);
// console.log(a.val); // 15 

// var a = [];
// a[1] = 5;
// a[5] = 55;
// console.log(a.length); // 6

// console.log(NaN===NaN, NaN==NaN); //false, false 
// console.log(typeof null) // object 
// console.log((function(){})()) // underfined 

// var foo = {name: 'kitten'}
// var prop = 'name'
// console.log(foo.name) // 1 ok
// console.log(foo['name']) // 2 ok 
// console.log(foo[prop]) // 3 ok

// const c = 100;
// console.log({c}); // {c:100}

// (function () 
//  { a(); return;
// 	function a() {
// 		console.log('a');
//  	};
//  })(); // a

// var trees = ["xyz","xxxx","test","ryan","apple"];
// delete trees[3];
// console.log(trees.length); // ["xyz", "xxxx", "test", empty, "apple"] => length=5

// var y = 1, x = y = typeof x;
// console.log(x); //underfined

// function getFunc() {
//     var a = 7;
//     return function(b) {
//         alert(a+b);
//     }
// }
// var f = getFunc();
// console.log(f(5)); // alert 12, console underfined

// const aaa = Array(8).join("js"+1) 
// console.log(aaa) //js1js1js1js1js1js1js1

// const answer = ((arg) => {
// 	if(arg == 42) {
//     	return arg
//     }
// })('42')
// console.log(typeof answer); //string

// const bbb = Array(8).join("js"-1) +" RULES" 
// console.log(bbb) //NaNNaNNaNNaNNaNNaNNaN RULES

// console.log(typeof typeof 1) // string

// var x = {foo : 1};
// var output = ((x) => {
//    delete x.foo;
//    return x.foo;
// })(x);
// console.log(output); // underfined

// (function() {
// 	'use strict';
// 	var person = {
// 		name: 'John'
// 	};
// 	person.salary = '10000$';
// 	person['country'] = 'USA';
// 	Object.defineProperty(person, 'phoneNo', {
// 		value: '+380123456789',
// 		enumerable: true
// 	})
// 	console.log(Object.keys(person)); //["name", "salary", "country", "phoneNo"]
// })();

// var employeeId = '1234abe';
// (function(){
// 	console.log(employeeId);
// 	var employeeId = '122345';
// })(); // underfined 

// console.log(employeeId);
// var employeeId = '19000';// underfined

// "use strict";
// console.log(employeeId); //Uncaught ReferenceError: employeeId is not defined

// (function() {
// 	var objA = Object.create({
// 		foo: 'foo'
// 	});
// 	var objB = objA;
// 	objB.foo = 'bar';
// 	console.log(objA.foo);
// 	console.log(objB.foo);
// }()); // bar, bar

// (function() {
// 	var array = new Array('100');
// 	console.log(array);
// 	console.log(array.length);
// }()); //['100'], 1

// (function(){
// 	var numbers = [2,3,4,8,9,11,13,12,16];
// 	var even = numbers.filter(function(element, index){
// 		return element % 2 === 0; 
// 	});
// 	console.log(even);
// 	var containsDivisibleby3 = numbers.some(function(element, index){
// 		return element % 3 === 0;
// 	});
// 	console.log(containsDivisibleby3);	
// })(); //[2, 4, 8, 12, 16], true

// function getNumber(){
// 	return;
// }
// var numb = getNumber();
// console.log(numb); //underfined

// function mul(x){
// 	return function(y){
// 		return [x*y, function(z){
// 			return x*y + z;
// 		}];
// 	}
// }
// console.log(mul(2)(3)[0]); // 6
// console.log(mul(2)(3)[1](4)) // 10

// function mul(x) {
// 	return function(y) {
// 		return {
// 			result: x * y,
// 			sum: function(z) {
// 				return x * y + z;
// 			}
// 		};
// 	};
// }
// console.log(mul(2)(3).result); // 6
// console.log(mul(2)(3).sum(4)); // 10 

// function mul(x) {
// 	return function(y) {
// 		return function(z) {
// 			return function(w) {
// 				return function(p) {
// 					return x * y * z * w * p;
// 				};
// 			};
// 		};
// 	};
// }
// console.log(mul(2)(3)(4)(5)(6)); //720

// function a() {
// 	return 2;
// }
// console.log(typeof a); //function

// (function(){
//     return typeof arguments; //object
// })();

// console.log(String('str') === 'str') // true

// console.log(parseFloat('12.3.4')) // 12.3

// function foo(a) {
//     console.log(arguments.length);
//  }
//  foo(1, 2, 3); // 3

// var arr = [];
// arr[0]  = 'a';
// arr[1]  = 'b';
// arr.element = 'c';
// console.log(arr.length); //2 
