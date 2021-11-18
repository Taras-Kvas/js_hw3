// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// let text = ['one', 'two', 'apple'];
// let num = [9, 3, 6, 201, 999];
// let all = [false, 'two', 33, true];
// console.log(text);
// console.log(num);
// console.log(all);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль


// let array = [];
// array [0] = 'Apple';
// array [1] = 'Watermelon';
// array [2] = 'Pineapple';
// array [3] = 'Strawberry';
// console.log (array);
// document.write(array);

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let x = 0; x <=10; x++) {
//     document.write('<div>Тарас</div>');
// }

// for (let x = 0; x<=10; x++) {
//     document.write (`<div>Тарас${x}</div>`);
//
// }

// let x = 0;
// while (x<=10) {
//     document.write ('<h1>Тарас</h1>')
//     x++
// }

// let x = 0;
// while (x <= 10) {
//     document.write (`<h1>Тарас${x}</h1>`)
//     x++
// }


// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
//     За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
//     За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
//     За допомогою if та typeof вивести тільки рядкові елементи


// 1

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,];
// for (i = 0; i < num.length; i++) {
//     document.write(num[i]);
// }


// 2

// let string = ['one', 'two', 'three', 'taras', 'maryan', 'roma', 'andriy', 'razer', 'kraken', '22'];
// for (let i = 0; i < string.length; i++) {
//     console.log (string[i]);
// }

// 3

// let all = ['taras', true, false, '202020', 22, 14, true, 'razer', false, 'kraken'];
// for (let i = 0; i < all.length; i++) {
//     console.log (all[i]);
// }


// 4

// let all = ['taras', true, false, '202020', 22, 14, true, 'razer', false, 'kraken'];
// for (let i = 0; i <all.length ; i++) {
//     if (typeof all[i] == 'boolean') {
//         document.write(all[i]);
//     }
// }

// 5

// let all = ['taras', true, false, '202020', 22, 14, true, 'razer', false, 'kraken'];
// for (let i = 0; i <all.length ; i++) {
//     if (typeof all[i] == 'number') {
//         document.write(all[i]);
//     }
// }

// 6

// let all = ['taras', true, false, '202020', 22, 14, true, 'razer', false, 'kraken'];
// for (let i = 0; i <all.length ; i++) {
//     if (typeof all[i] == 'string') {
//         document.write(all[i]);
//     }
// }

// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//     Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// let array = [];
// array [0] = true;
// array [1] = false;
// array [2] = 333;
// array [3] = '223';
// array [4] = true;
// array [5] = 2313123123;
// array [6] = 'asdadadsad';
// array [7] = false;
// array [8] = true;
// array [9] = 33333;
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// for (let i = 0; i < 10; i++) {
//     console.log ('sss' + i + 'sss');
//     document.write ('sss' + i + 'sss');
// }

// for (let i = 0; i < 100; i++) {
//     console.log ('sss' + i + 'sss');
//     document.write ('sss' + i + 'sss');
// }

// for (let i = 0; i < 100; i+=2) {
//     console.log ('sss' + i + 'sss');
//     document.write ('sss' + i + 'sss');
// }

// for (let i = 0; i < 100; i++) {
//     if(i % 2 === 0){
//         console.log('ssss' : ' + i + 'ss ');
//         document.write('ssss' + i + ' ss');
//     }
// }

// for (let i = 0; i < 100; i++) {
//     if(i % 2 === 1){
//         console.log('ssss' : ' + i + 'ss ');
//         document.write('ssss' + i + ' ss');
//     }
// }