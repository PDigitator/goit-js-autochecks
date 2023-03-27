//! 01
// Запиши условие в инструкции if так, чтобы функция работала правильно.

// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }
// // console.log(checkAge(38));

//! 02
// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.
// Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:
// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
// }
// // console.log(checkPassword("jqueryismyjam"));

//! 03
// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.
// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// function checkStorage(available, ordered) {

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }

//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }

//   return "The order is accepted, our manager will contact you";

// }
// // console.log(checkStorage(200, 20));

//! 04
// Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".

// const fruits = ["apple", "plum", "pear", "orange"];

// // console.log(fruits);

//! 05
// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.
// Имя переменной	Значение переменной
// firstElement	первый элемент массива
// secondElement	второй элемент массива
// lastElement	последний элемент массива

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// // console.log(firstElement);
// // console.log(secondElement);
// // console.log(lastElement);

//! 06
// Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[fruits.length - 1] = "banana";

// // console.log(fruits);

//! 07
// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length;

// // console.log(fruitsArrayLength);

//! 08
// Объяви две переменные:
// Имя переменной	Ожидаемое значение
// lastElementIndex	Индекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	Значение последнего элемента массива

// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// // console.log(lastElementIndex);
// // console.log(lastElement);

//! 09
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// function getExtremeElements(array) {
//   const newArray = [];

//   newArray.push(array[0]);
//   newArray.push(array[array.length - 1]);

//   return newArray;
// }

// // console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

//! 10
// Дополни код функции splitMessage(message, delimiter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimiter - массив строк.

// function splitMessage(message, delimiter) {
//   let words;

//   words = message.split(delimiter);

//   return words;
// }

// // console.log(splitMessage("best_for_week", "_"));

//! 11
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// function calculateEngravingPrice(message, pricePerWord) {
//   let wordsArray;
//   let totalPrice;

//   wordsArray = message.split(" ");
//   totalPrice = wordsArray.length * pricePerWord;

//   return totalPrice;
// }

// // console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

//! 12
// Дополни код функции makeStringFromArray(array, delimiter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimiter - строку.

// function makeStringFromArray(array, delimiter) {
//   let string;

//   string = array.join(delimiter);

//   return string;
// }

// // console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

//! 13
// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// function slugify(title) {
//   let slug;

//   slug = title.toLowerCase().split(" ").join("-");

//   return slug;
// }

// console.log(slugify());

// // let slug = "";

// // if (title) {
// //   slug = title.toLowerCase().replaceAll(" ", "-");
// // }

// // return slug;

//! 14
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// // console.log(firstTwoEls);
// // console.log(nonExtremeEls);
// // console.log(lastThreeEls);

//! 15
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients); // Change this line

// // console.log(allClients);

//! 16
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);

//   if (newArray.length > maxLength) {
//     newArray = newArray.slice(0, maxLength);
//   }

//   return newArray;
// }

// // console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));

//! 17
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

//! 18
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
//   let sum = 0;

//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//   }

//   return sum;
// }

// // console.log(calculateTotal(24));

//! 19
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

//! 20
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   return total;
// }

// // console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//! 21
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   const words = string.split(" ");
//   let longestWord = words[0];

//   for (const word of words) {
//     if (longestWord.length < word.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// // console.log(findLongestWord("May the force be with you"));

//! 22
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   return numbers;
// }

// // console.log(createArrayOfNumbers(14, 17));

//! 23
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// function filterArray(numbers, value) {
//   const bigestNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       bigestNumbers.push(number);
//     }
//   }

//   return bigestNumbers;
// }

// // console.log(filterArray([12, 24, 8, 41, 76], 38));

//! 24
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// // console.log(checkFruit("apple"));

//! 25
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.
// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   const commonElementsArray = [];

//   for (const element of array1) {
//     const commonElement = array2.includes(element);

//     if (commonElement) {
//       commonElementsArray.push(element);
//     }
//   }
//   return commonElementsArray;
// }

// // console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

//! 26
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const price of order) {
//     total += price;
//   }

//   return total;
// }

// // console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//! 27
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }

// // console.log(filterArray([12, 24, 8, 41, 76], 20));

//! 28
// Дополни выражения остатка от деления так, чтобы код проходил тесты.
// Значение переменной a это число 0
// Значение переменной b это число 1
// Значение переменной c это число 3
// Значение переменной d это число 5
// Значение переменной e это число 2

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;

// // console.log(a);
// // console.log(b);
// // console.log(c);
// // console.log(d);
// // console.log(e);

//! 29
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//   const evenNumbersArray = [];

//   for (let i = start; i <= end; i += 1) {
//     if (!(i % 2)) {
//       evenNumbersArray.push(i);
//     }
//   }

//   return evenNumbersArray;
// }

// // console.log(getEvenNumbers(6, 12));

//! 30
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// // console.log(number);

//! 31
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number

// function findNumber(start, end, divisor) {
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// // console.log(findNumber(8, 17, 3));

//! 32
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// function includes(array, value) {
//   for (const item of array) {
//     if (item === value) {
//       return Boolean(1);
//     }
//   }
//   return Boolean(0);
// }

// // console.log(
// //   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// // );
