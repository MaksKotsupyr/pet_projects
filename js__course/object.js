const person = {
    name: 'Maks',
    age: 21,
    isProgrammer: true, 
    languages: ['ukr', 'en', 'ru'],
    // 'complex key': 'Complex Value',
    // ['key_' + (1 + 3)]: 'Computed Key', //key_4
    greet() {
        console.log('greet from person')
    }
}
delete person['key_4'] // видаляє ключ з обєкту
// console.log(person)

const {name, age: personAge = 10, languages} = person
// console.log(name, personAge, languages)

for(let key in person) {
    if(person.hasOwnProperty(key)) {
        console.log('key', key)
        console.log('value', person[key])
    }
}// біжить не тільки по ключах обєкту, але може і заходити в його прототипи (це небезпечно), через це додаємо перевірку на власні ключі

Object.keys(person).forEach((key) => {
    console.log('key', key)
    console.log('value', person[key])
}) 