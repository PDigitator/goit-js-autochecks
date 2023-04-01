// ! ДОДАТКОВІ ЗАДАЧІ ВІД МЕНТОРА

//! 6-01
// При завантаженні сторінки користувачу у prompt пропонується ввести число 'Hello, enter please the number'.
// Введене число додається до значення змінної total.
//Операція введення числа продовжується до тих пір, поки користувач не натисне кнопку Cancel у prompt.
//Після того, як користувач припинив серію введень і натиснув кнопку Cancel, показати alert з рядком "The total sum of the entered numbers is [total]."
//Робити перевірку, що користувач ввів саме число, а не довільний рядок не потрібно.

// let total = 0;
// let number;

// while ((number = prompt("Hello, enter please the number")) !== null) {
//   total += Number(number);
// //   console.log(total);
// }

// alert(`The total sum of the entered numbers is ${total}`);

//! 7-01
// Напишіть цикл, який пропонує ввести
//число більше 100 через prompt 'Hello, enter please the number greater then 100.' та виводить його у alert, якщо умова виконана
//Якщо користувач ввів інше число, то попросити ввести ще раз і так далі.
//Цикл повинен запитувати число, поки користувач не введе число більше 100.
// Якщо користувач натисне кнопку відміни у prompt, то у alert треба вивести 'Goodbye'.

// let number;

// while (
//   (number = prompt("Hello, enter please the number greater then 100.")) !== null
// ) {
//   if (Number(number) > 100) {
//     alert(`Your number is ${number}.`);
//   }
// }

// alert("Goodbye");

//! 8-01
// При завантаженні сторінки користувачу у prompt пропонується ввести число від 0 до 59 'Hello, enter please the number between  0 and 59'.
//Зроби перевірку на відповідність введеного числа вказаному діапазону (0-59). Якщо число не відповідає виведіть
//alert з повідомленням "The [number] is outside 0 and 59"
// Визначте в яку чверть години попаде це число (в першу, другу, третю чи четверту) та виведіть це повідомлення у консоль, наприклад, "Number [number] refers to 2 quarters".
// 0 - 15 1ша чверть
// 16 - 30 2га чверть
// 31 - 45 3тя чверть
// 46 - 59 4та чверть

// const userNumber = prompt("Hello, enter please the number between  0 and 59");
// const number = Number(userNumber);

// if (!userNumber) {
//   alert("You do not enter the number");
// } else if (number < 0 || number > 59) {
//   alert(`The ${number} is outside 0 and 59`);
// } else if (number >= 0 && number <= 15) {
//   alert(`Number ${number} refers to 1 quarters`);
// } else if (number >= 16 && number <= 30) {
//   alert(`Number ${number} refers to 2 quarters`);
// } else if (number >= 31 && number <= 45) {
//   alert(`Number ${number} refers to 3 quarters`);
// } else if (number >= 46 && number <= 59) {
//   alert(`Number ${number} refers to 4 quarters`);
// }

//! 9-01
// Дано рядок, що складається із символів, наприклад, 'a1abcde'.
// Перевір, що першим символом цього рядка є літера 'a'.
// Якщо так - виведи 'yes' у консоль, в противному випадку виведи 'no'.

// function isStringStart(string, startSymbol) {
//   const stringStart = string.startsWith(startSymbol) ? "yes" : "no";

//   return stringStart;
// }

// console.log(isStringStart("a1abcde", "a"));

//! 10-01
// Напишіть функцію, яка приймає два параметри довжину і елемент - заповнювач та повертає масив з вказаною довжиною і заповнює його переданим елементом
// наприклад, виклик функції fillArray(3, 'a') має повернути масив ['a', 'a', 'a']

// const filledArray = [];
// function fillArray(length, element) {
//   for (let i = 1; i <= length; i += 1) {
//     filledArray.push(element);
//   }

//   return filledArray;
// }

// console.log(fillArray(3, "cow"));

//! 11-01
// Написати функцію, яка буде видаляти з масива усі значення, які приводяться до false, undefined, null, false, '', 0, NaN

// function arrWithoutFalseElements(array, falseArray) {
//   for (let i = 0; i < array.length; i += 1) {
//     const commonElement = falseArray.includes(array[i]);

//     if (commonElement) {
//       array.splice(i, 1);
//       i -= 1;
//     }
//   }

//   return array;
// }

// console.log(
//   arrWithoutFalseElements(
//     [10, '', 20, false, 0, 37, null, 12, undefined, 54, false, '', 0, NaN, 40],
//     [false, undefined, null, false, '', 0, NaN]
//   )
// );

//! 8-02
// Напиши скрипт керування особистим кабінетом інтернет банку.
//Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією трансакцій
//Типів трансакцій усього два. Можна поповнити рахунок або списати з нього гроші.
//
// const TYPES_TRANSACTION = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// }
//Кожна трансакція має мати властивості: id, type, amount.

// {
//   const account = {
//     //поточний баланс рахунку
//     balance: 0,
//     //Історія трансакцій
//     transactions: [],
//     //Метод приймає суму та тип трансакції
//     //створює об'єкт трансакції за зразком {id, type, amount}
//     //додає його у масив трансакцій
//     //в залежності від типу трансакції викликає методи, які відповідають за збільшення/зменшення балансу
//     createTransaction(type, amount) {

//     },
//     //Метод приймає суму трансакції і відповідає за додавання суми до балансу.
//     deposit(amount) {

//     },
//     //Метод приймає суму трансакції і відповідає за віднімання суми до балансу.
//     //Якщо amount більше ніж поточний баланс, виводимо повідомлення в консоль про те, що недостатньо коштів на рахунку [You don't have enough funds in your account] і повертаємо null
//     withdraw(amount) {

//     },
//     //Метод повертає поточний баланс
//     getBalance() {

//     },
//     //Метод шукає та повертає об'єкт трансакції по id
//     getTransactionDetails(idForSearch) {

//     },
//     //Метод повертає загальну суму трансакції певного типу із всієї історії трансакцій
//     getTotalSumByType(type) {

//     },
//   }

//! 9-02
// Напишіть функцію isPlainObject, яка перевіряє чи є параметр простим об'єктом, а не масивом або null.
// Якщо так, то повертає true, в противному випадку false

//! 10-02
// Напишіть функцію isEmpty, яка перевіряє чи порожній обєкт. Якщо так, то повертає true, в противному випадку false

//! 11-02
// Напишіть дві функції
// letMeSeeYourName(callback) - має запитувати ім'я користувача через prompt і викликати callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не пустий
