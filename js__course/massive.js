//   Function declaration - виклик функції можливий перед її оголошенням 
function name(list_parametrs) {
    //instruction 
    return //вказує на значення, яке буде повернене
}

// Function expression - виклик функції, тільки після оголошення, також
// така функція може бути анонімною. Є зручною, коли функція передається 
// аргументом для іншої функції. 
let Name = function(parametrs) { return }


function sumAll(...all) { //оператор rest - створює масив всіх значень, які передаються
    let res = 0
    for(let num of all) {
        res += num
    }
    return res
}

// Стрілкова функція 
const arr = (parametrs) => {
    //instruction 
    console.log(parametrs)
}


//MASSIVE
const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes' ]
const fib = [1, 1, 2, 3, 5, 8, 13]
const people = [
    {name: 'Maks', budget: 4200},
    {name: 'Lada', budget: 3500},
    {name: 'Lev', budget: 1700}
]
//Цикли з масивами
for(let i=0; i<people.length; i++){
    // console,log(people[i])
}
for(let person of people){
    // console.log(person)
}
people.forEach((person, index, peopleArray) => {
    console.log(person)
})

//Method 
cars.push('Renault') //додає елемент вкінець масиву 
cars.unshift('Volga') //додає елемент на початок масиву 
cars.shift() // видаляє перший елемент і його повертає
cars.pop() //видаляє останній елемент і повертає його 
cars.reverse() // перевертає масив, від останнього до першого 
cars.indexOf('BMW') // повертає індекс того елементу, який ми шукаємо
cars.includes('Mazda') // шукаємо певний елемент в масиві, який повертає булеве значення
const upperCaseCars = cars.map(car => { // приймає функцію і створює новий масив 
    return car.toUpperCase() // оскільки car є рядком, застосовуємо метод toUpperCase та отримуємо масив елементів які написані великими літерами
})
const pow2 = num => num ** 2
const pow2Fib = fib.map(pow2)
const filteredNumbers = pow2Fib.filter(num => { // приймає call back функцію і повертає посортований масив 
    return num > 20
})
console.log(filteredNumbers)

const text = 'Hello, we study JavaScript'
const reverseText = text.split('') //розбиває строку на масив елементів по знаку 
.reverse() // змінює порядок елементів 
.join('') // зєднує в строку через якийсь символ 


allItems.filter(item => item.name.indexOf('phone') !== -1) // фільтрування масиву для виводу шуканих елементів 

//ЦИКЛИ
const index = people.findIndex( function(person) { // функція викликається на кожній ітерації і насправді findIndex є функцією
    return person.budget === 3500
})
// console.log(people[index])

const person = people.find( function(person) { // функція викликається на кожній ітерації і насправді findIndex є функцією
    return person.budget === 3500 // якщо такого значення немає, повертає underfind
})
// console.log(person)

let findedPerson
for( const person of people) {
    if(person.budget === 3500){
        findedPerson = person
    }
}
// console.log(findedPerson)


const allBudget = people
    .filter(person => person.budget > 2000) // повертає новий фідсортований масив за нашою умовою в якому ми викликаємо метод reduce 
        .reduce((acc, person) => { // перше приймає функцію і деяке початкове значення (0). Функція приймає 2 параметри - акумулятор(значення яке оновлюється на кожній ітерації) та елеменет по якому робимо ітерацію
            acc += person.budget
            return acc 
        }, 0) // чейнінг - виклик підряд декількох методів 