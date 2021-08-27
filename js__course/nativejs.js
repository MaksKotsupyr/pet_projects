// ////////// Prototype + this(вказує на елемент зліва від крапки)
// const person = {
//     name: 'Max',
//     age: 21, 
//     sayHello: hello,
//     sayHelloWindow: hello.bind(this),  // щоб викликати функцію з потрібним контекстом 
//     logInfo: function(job, phone) {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}`) //person.name
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.log(`Phone is ${phone}`)
//         console.groupEnd()
//     }
// }
// const lena = {
//     name: 'Elena',
//     age: 23
// }
// person.logInfo.bind(lena) //bind повертає нову функцію, але не викликає її 
//                             //у обєкта person викликаємо функцію logInfo та викликаємо метод bind для 
//                             //обєкту lena, тим самим ми змінили контекст на обєкт який передали 
// person.logInfo.bind(lena, 'Frontend', '+380677372857')()

// person.logInfo.call(lena, 'Frontend', '+380677372857')// метод call - задає певний контекст функції, приймає параметри 
//                                                       // параметри через кому, самостійно викликає функцію 

// person.logInfo.apply(lena, ['Frontend', '+380677372857']) // приймає обєкт який буде контекстом і далі ми передаємо тільки 2 значення
//                                                           // які повинні бути всередині масиву [] і зразу викличе функцію 

// function hello() {
//     console.log('Hello', this)
// }


// const array = [1, 2, 3, 4, 5]
// Array.prototype.multBy = function(n) {
//     return this.map(function(i) {
//         return i * n
//     })
// }
// console.log(array.multBy(20))

// //////////Замикання 
// function createIncrementor(n) {
//     return function(num) {
//         return n + num 
//     }
// }
// const addOne = createIncrementor(1) // значення n замикається в функції і поверається функція у змінну, яка стає по факту функцією, 
//                                     // тобто викликаючи функцію до значення буде додаватись одиниця
// const addTen = createIncrementor(10)
// console.log(addOne(10)) //11
// console.log(addTen(40)) //50


// function urlGenerator(domain) {
//     return function(url) {
//         return `https://${url}.${domain}`
//     }
// }
// const comUrl = urlGenerator('com')
// console.log(comUrl('google'))

////////LocalStorage
const myNumber = 42
localStorage.setItem('number', myNumber.toString())
console.log(localStorage.getItem('number'))
localStorage.removeItem('number')
localStorage.clear()

const obj = {
    name: 'Max',
    age: 21
}
localStorage.setItem('person', JSON.stringify(obj))

const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
person.name = 'Maksym'
console.log(person)