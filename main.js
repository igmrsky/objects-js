//  Объект - ст-ра данных, которая позволяет хранить в себе различные значения
// Записываются в фигурных скобках
// const user = {
//     name: 'Alex',
//     age: 23,
//     isAdmin: false
// }

// console.log(user.name, user.age, user.isAdmin)

// const users = {
//     alex: {
//         age: 23,
//         isAdmin: false
//     },
//     john: {
//         age: 20,
//         isAdmin: true,
//         sayHello(name) {
//             console.log(`Hello ${name}!`)
//         }
//     }
// }

// console.log(users.john)
// users.john.sayHello('Tom')


const users = [
    {
        name: 'Alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'John',
        age: 30,
        isAdmin: true
    }
]

users.push({
    name: 'Ivan',
    age: 21,
    isAdmin: true
})

for(let i = 0; i < users.length; i++) {
    console.log(users[i])
}

const foo = 'hello world'
console.log(foo.toUpperCase())

// ======================================================================================================

// 1)

const myDesc = {
    name: 'Igor',
    age: 21,
    job: 'Tutor',
    isCoder: true
}

console.log(myDesc)

// ====================================================================

// 2) 

const hello = {
    hi: function(name){
        return `Hello ${name}!`
    }
}

const result = hello.hi('Yuri')
console.log(result)

// =============================================================================

// 3)

const users1 = [
    {
        name: 'Alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'John',
        age: 30,
        isAdmin: true
    },
    {
        name: 'Ivan',
        age: 21,
        isAdmin: true
    },
    {
        name: 'Vova',
        age: 18,
        isAdmin: false
    }
]

let notAdmin = 0

for(let i = 0; i < users1.length; i++) {
    if(!users1[i].isAdmin) {
        notAdmin++
    }
}

console.log(`Количество простых пользователей: ${notAdmin}`)




