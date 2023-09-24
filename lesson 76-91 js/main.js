// // const firstName = 'John'
// // const lastName = 'Smith'

// // let age = '30'

// // console.log(firstName, lastName, age, 'year')

// // const a = 5
// // const b = 3
// // console.log( a+b)
// // console.log( a-b)
// // console.log( a*b)
// // console.log( a/b)
// // console.log( a % b)
// // console.log( a ** b)

// const instrument = 'Инструмент'
// const box = 'ящик'
// console.log(`${instrument} лежат в ${box}`)

// const firstNumber = 5
// const secondNumber = 10

// let result = null

// if (firstNumber >= secondNumber) {
// 	result = firstNumber + secondNumber
// } else {
// 	result = secondNumber - firstNumber
// }

// const age = 35
// // if (age >= 18) {
// //     console.log('Вы совершеннолетний')

// // } else {
// //     console.log('Вы не совершеннолетний')
// // }

// age >= 18 ? console.log('Вы совершеннолетний') : console.log('Вам нет 18')

// // for (let i = 2; i <= 12; i = i + 2) {
//     console.log(i)

// }

// for (let i = 10; i >= 1; i--) {
// 	console.log(i)
// }

// let i = 0
// while (i < 12) {
//     i = i + 2
//     console.log(i)
// }

// let q = 11
// while (q > 1) {
// 	q--
//     console.log(q)
// }

// let array = [2, 4, 5, 6, 3, 8]

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//         console.log(array[i])
// 		}

// }

// let array = [
// 	'красный',
// 	'оранжевый',
// 	'желтый',
// 	'зеленый',
// 	'голубой',
// 	'синий',
// 	'фиолетовый',
// ]
// for (let i = array.length - 1; i >= 0; i--) {

//         console.log(array[i])

// }

// function name(youName) {
// 	return 'Hello ' + youName
// }
// const result = name('Denis')
// console.log(result)

// let chisla = [2, 4, 5, 6, 11, 8, 555]

// function numbers(array) {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element > 10) {
//             console.log(array[i])

// 				}
//     }
//     return

// }
// console.log(numbers(chisla))

// function calc(a, b, string) {
// 	if (string === 'minus') {
// 		console.log(a - b)
// 	} else if (string === 'plus') {
// 		console.log(a + b)
// 	} else if (string === 'umnoz') {
// 		console.log(a * b)
// 	} else if (string === 'delenie') {
// 		console.log(a / b)
// 	} else {
// 		console.log('Ошибка')
// 	}
// 	return
// }

// console.log(calc(5, 5, 'minus'))

// const me = {
//     name: 'Denis',
//     age: 35,
//     freelanser: false,
//     sayHello(nam) {
//         console.log(`Hello ${nam}`)

//     }
// }
// me.sayHello('Tom')

// const users = [
//     {
//         name: 'Alex',
//         age: 20,
//         freelanser: true,
//     },
//     {
//         name: 'Denis',
//         age: 35,
//         freelanser: false,
//     },
//     {
//         name: 'Viktor',
//         age: 24,
//         freelanser: false,
//     },
// ]

// let notFreelansers = 0

// for (let i = 0; i < users.length; i++) {
// 	const element = users[i].freelanser
// 	if (element == false) {
// 		notFreelansers++
// 	}
// }
// console.log(notFreelansers)

// const object = document.querySelector('.blok')
// object.style.color = 'blue'

// let btnBlue = false

// const button = document.querySelector('.btn')

// button.addEventListener('click', () => {
// 	if (btnBlue) {
// 		button.style.backgroundColor = 'blue'
// 		btnBlue = false
// 	} else {
// 		button.style.backgroundColor = 'red'
// 		btnBlue = true
// 	}
// })


const button = document.querySelector('.btn')
const text = document.querySelector('.text')

button.addEventListener('click', () =>{
	text.classList.toggle('red')

})