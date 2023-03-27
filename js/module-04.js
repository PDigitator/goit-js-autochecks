//! 01
// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

//! 02
// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

//! 03
// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

//! 04
// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.
// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(
//         `There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//     } else {
//       return onSuccess(pizzaName);
//     }
//   },
// };

// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

//! 05
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach((element) => {
//     totalPrice += element;
//   });

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//! 06
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function (element) {
//     if (element > value) {
//       filteredNumbers.push(element);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 4));

//! 07
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

//! 08
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// // Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// };

// console.log(calculateTotalPrice(3, 400));

//! 09
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Change code above this line

// console.log(calculateTotalPrice(3, 400));

//! 10
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.

// // Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => (totalPrice += item));

//   return totalPrice;
// };
// // Change code above this line

// console.log(calculateTotalPrice([164, 48, 291]));

//! 11
// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// // Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3));

//! 12
// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// };

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

//! 13
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.
// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven(numbers, value) {
//   // Change code below this line
//   const changedArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       changedArray.push(numbers[i] + value);
//     } else {
//       changedArray.push(numbers[i]);
//     }
//   }

//   return changedArray;
//   // Change code above this line
// }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// // numbers.forEach((number) =>
// //     !(number % 2)
// //       ? changedArray.push(number + value)
// //       : changedArray.push(number)
// //   );

//! 14
// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths);

//! 15
// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map((book) => book.title);

// console.log(titles);

//! 16
// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap((book) => book.genres);

// console.log(genres);

//! 17
// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     skills: ["ipsum", "lorem"],
// //     gender: "male",
// //     age: 37,
// //   },
// // ];

// // Change code below this line
// const getUserNames = (users) => users.map((user) => user.name);
// // Change code above this line

// console.log(getUserNames);

//! 18
// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     skills: ["ipsum", "lorem"],
// //     gender: "male",
// //     age: 37,
// //   },
// // ];

// // Change code below this line
// const getUserEmails = (users) => users.map((user) => user.email);
// // Change code above this line

// console.log(getUserEmails(users));

//! 19
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter((number) => !(number % 2));
// const oddNumbers = numbers.filter((number) => number % 2);

// console.log(evenNumbers);
// console.log(oddNumbers);

//! 20
// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index
// );

// console.log(allGenres);
// console.log(uniqueGenres);

//! 21
// Используя метод filter() дополни код так, чтобы:
// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

//! 22
// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// // ];

// // Change code below this line
// const getUsersWithEyeColor = (users, color) =>
//   users.filter(({ eyeColor }) => eyeColor === color);
// // Change code above this line

// console.log(getUsersWithEyeColor(users, "blue"));

//! 23
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //     age: 37,
// //   },
// // ];

// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter(({ age }) => age >= minAge && age < maxAge);
// // Change code above this line

// console.log(getUsersWithAge(users, 30, 40));

//! 24
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //     age: 37,
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //     age: 34,
// //   },
// // ];

// // Change code below this line
// const getUsersWithFriend = (users, friendName) =>
//   users.filter(({ friends }) => friends.includes(friendName));

// console.log(getUsersWithFriend(users, "Sharron Pace"));

//! 25 - уточнить решение
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //     age: 37,
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //     age: 34,
// //   },
// // ];

// // Change code below this line
// const getFriends = (users) =>
//   users
//     .flatMap((user) => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index);
// // Change code above this line

// console.log(getFriends(users));

//! 26
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //     age: 37,
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //     age: 34,
// //   },
// // ];

// // Change code below this line
// const getActiveUsers = (users) => users.filter(({ isActive }) => isActive);
// // Change code above this line

// console.log(getActiveUsers(users));

//! 27
// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //     age: 37,
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //     age: 34,
// //   },
// // ];

// // Change code below this line
// const getInactiveUsers = (users) => users.filter(({ isActive }) => !isActive);
// // Change code above this line

// console.log(getInactiveUsers(users));

//! 28
// Используя метод find() дополни код так, чтобы:
// В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find(({ title }) => title === BOOK_TITLE);
// const bookByAuthor = books.find(({ author }) => author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

//! 29
// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //     age: 37,
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //     age: 34,
// //   },
// // ];

// // Change code below this line
// const getUserWithEmail = (users, email) =>
//   users.find((user) => user.email === email);
// // Change code above this line

// console.log(getUserWithEmail(users, "sharlenebush@tubesys.com"));

//! 30
// Используя метод every() дополни код так, чтобы:
// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => !(value % 2));
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2);

// const eachElementInSecondIsEven = secondArray.every((value) => !(value % 2));
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2);

// const eachElementInThirdIsEven = thirdArray.every((value) => !(value % 2));
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2);

// console.log(eachElementInSecondIsOdd);

//! 31
// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// // ];

// // Change code below this line
// const isEveryUserActive = (users) => users.every(({ isActive }) => isActive);
// // Change code above this line

// console.log(isEveryUserActive(users));

//! 32
// Используя метод some() дополни код так, чтобы:
// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((value) => !(value % 2));
// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2);

// const anyElementInSecondIsEven = secondArray.some((value) => !(value % 2));
// const anyElementInSecondIsOdd = secondArray.some((value) => value % 2);

// const anyElementInThirdIsEven = thirdArray.some((value) => !(value % 2));
// const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2);

// console.log(anyElementInFirstIsEven);

//! 33
// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// // ];

// // Change code below this line
// const isAnyUserActive = (users) => users.some(({ isActive }) => isActive);
// // Change code above this line

// console.log(isAnyUserActive(users));

//! 34
// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((playTime, playerTime) => {
//   return playTime + playerTime;
// }, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(averagePlayTime);

//! 35
// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce(
//   (averagePlaytime, player) => {
//     return averagePlaytime + player.playtime / player.gamesPlayed;
//   },
//   0
// );

// console.log(totalAveragePlaytimePerGame);

//! 36
// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// // ];

// // Change code below this line
// const calculateTotalBalance = (users) =>
//   users.reduce((totalBalance, user) => {
//     return totalBalance + user.balance;
//   }, 0);

// // Change code above this line

// console.log(calculateTotalBalance(users));

//! 37
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// // ];

// // Change code below this line

// const getTotalFriendCount = (users) =>
//   users.reduce((allFriends, user) => {
//     return allFriends + user.friends.length;
//   }, 0);
// // Change code above this line

// console.log(getTotalFriendCount(users));

//! 38
// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const alphabeticalAuthors = [...authors].sort((a, b) => a.localeCompare(b));

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

//! 39
// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

//! 40
// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

//! 41
// Дополни код так, чтобы:
// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((bookA, bookB) =>
//   bookA.author.localeCompare(bookB.author)
// );

// const sortedByReversedAuthorName = [...books].sort((bookA, bookB) =>
//   bookB.author.localeCompare(bookA.author)
// );

// const sortedByAscendingRating = [...books].sort(
//   (bookA, bookB) => bookA.rating - bookB.rating
// );

// const sortedByDescentingRating = [...books].sort(
//   (bookA, bookB) => bookB.rating - bookA.rating
// );

// console.log(sortedByAuthorName);
// console.log(sortedByAscendingRating);

//! 42
// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// // ];

// // Change code below this line
// const sortByAscendingBalance = (users) =>
//   [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);
// // Change code above this line

// console.log(sortByAscendingBalance(users));

//! 43
// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// // ];

// // Change code below this line
// const sortByDescendingFriendCount = (users) =>
//   [...users].sort(
//     (firstUser, secondUser) =>
//       secondUser.friends.length - firstUser.friends.length
//   );
// // Change code above this line

// console.log(sortByDescendingFriendCount(users));

//! 44
// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// // ];

// // Change code below this line
// const sortByName = (users) =>
//   [...users].sort((firstUser, secondUser) =>
//     firstUser.name.localeCompare(secondUser.name)
//   );
// // Change code above this line

// console.log(sortByName(users));

//! 45
// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((bookA, bookB) => bookA.localeCompare(bookB));

// console.log(names);

//! 46
// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// // ];

// // Change code below this line
// const getNamesSortedByFriendCount = (users) =>
//   [...users]
//     .sort(
//       (firstUser, secondUser) =>
//         firstUser.friends.length - secondUser.friends.length
//     )
//     .map((user) => user.name);

// // Change code above this line

// console.log(getNamesSortedByFriendCount(users));

//! 47
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// // ];

// // Change code below this line
// const getSortedFriends = (users) =>
//   [...users]
//     .flatMap((user) => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((firstFriend, secondFriend) =>
//       firstFriend.localeCompare(secondFriend)
//     );
// // Change code above this line

// console.log(getSortedFriends(users));

//! 48
// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// // ];

// // Change code below this line
// const getTotalBalanceByGender = (users, gender) =>
//   [...users]
//     .filter((user) => user.gender === gender)
//     .reduce((totalBalance, user) => totalBalance + user.balance, 0);
// // Change code above this line

// console.log(getTotalBalanceByGender(users, "female"));
