/* 
Задача 1 - Поиск гласных
Написать функцию, принимающую строку в качестве аргумента и возвращающую массив гласных, которые содержатся в строке

Пример ввода: const string = "AaBaaaai";

Пример вывода: const string = [a, i];

*/

// 1й способ

function findVowels(string) {
    // перевод к нижнему регистру, метод match - поиск по строке с использованием регулярного выражения
    // возвращает массив с результатом, флаг g - глобальный поиск всех соответсвий
    const matched = string.toLowerCase().match(/[aeiouy]/g); 
    // создаем массив из множества Set всех найденных уникальных результатов поиска
    const vowels = [...new Set(matched)];
    return vowels;
}

console.log(findVowels('AaBaaaai')); // ['a', 'i']
console.log(findVowels('Rtwpnkkk')); // []


// 2й способ

const VOWELS = ["a", "e", "i", "o", "u", "y"];

const isVowels = (chart) => VOWELS.includes(chart);

const getVowels = (string) => {
    let arr = string.toLowerCase().split("");
    arr = arr.filter(isVowels);
    const set = new Set(arr);
    arr = [...set];
    return arr;
}

console.log(getVowels('AaBaaaai')); // ['a', 'i']
console.log(getVowels('Rtwpnkkk')); // []



/*
Задача 2 - Хранение времени получения сообщений
Реализовать методы:

addMessage(message) – добавляет сообщение с текущим временем
getTimeOfMessage(message) – возвращает время получения сообщения
Пример использования методов:

const messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];


addMessage(messages[0]);
setTimeout(() => addMessage(messages[1]), 1000);
setTimeout(() => addMessage(messages[2]), 2000);

setTimeout(() => {
    messages.splice(1, 1);
    messages.forEach(message => console.log(getTimeOfMessage(message)));
}, 2100);

*/


const getMessagesStore = () => {
    const messagesStore = new WeakMap();

    const addMessage = (message) => {
        const time = new Date();
        messagesStore.set(message, time);
    }
    const getTimeOfMessage = (message) => {
        return messagesStore.get(message);
    }

    return {
        addMessage, getTimeOfMessage
    }
}

const {addMessage, getTimeOfMessage} = getMessagesStore();

const messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
  ];
  
  
addMessage(messages[0]);
setTimeout(() => addMessage(messages[1]), 1000);
setTimeout(() => addMessage(messages[2]), 2000);

setTimeout(() => {
    messages.splice(1, 1);
    messages.forEach(message => console.log(getTimeOfMessage(message)));
}, 2100);



/*
Задача 3 - Анаграммы
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Нужно написать функцию, которая принимает массив строк в качестве аргумента, объединяет элементы являющиеся анаграммами 
и возвращает массив из объединенных анаграмм и оставшихся слов.

Пример входных данных:

["tom", "xyz", "mot", "xel", "zXy", "yxz"]


Пример выходных данных:

[["tom", "mot"], ["xyz", "zXy", "yxz"], ["xel"]]

*/

let arr = ["tom", "xyz", "mot", "xel", "zXy", "yxz"];

const mergeAnagrams = (arr) => {
    const obj = {};

    arr.forEach(item => {
        const key = item.toLowerCase().split('').sort().join('');
        if (!(key in obj)) {
            obj[key] = [item];
        } else {
            obj[key].push(item);
        }
    });

    return Object.values(obj);
}

console.log(mergeAnagrams(arr));
