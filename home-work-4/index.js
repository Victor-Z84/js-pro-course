/*
ЗАДАЧА 1 - Поиск гласных

Написать функцию, принимающую строку в качестве аргумента и возвращающую массив гласных, которые содержаться в строке

Пример ввода:

const string = "AaBaaaai";

Пример вывода:
const string = [a, i];

Примечание. Необходимо использовать следующие концепции функционального программирования:
-Декларативный стиль кода
-Неизменность (Immutability)
-Карринг
-Частичное применение
-Композиция
*/

const pipe = (...fns) => (arg) => fns.reduce((acc, fn) => fn(acc), arg);

const lowerCase = (str) => str.toLowerCase(); // приведение строки к нижнему регистру
const split = (separator) => (str) => str.split(separator); // разбиваем строку на массив по заданному разделителю separator
const join = (separator) => (str) => str.join(separator); // создание строки из элементов, вставляя разделитель separator
const unique = (arr) => [...new Set(arr)]; // новый массив только с уникальными значениями
const filter = (fn) => (arr) => arr.filter(fn); // фильтрация, принимаем функцию (меняется реже), потом массив(меняется чаще)
const isVowel = (chart) => ["a", "e", "i", "o", "u", "y"].includes(chart);

const getVowels = pipe(
    lowerCase,
    split(""),
    unique,
    filter(isVowel), // композиция, оставляем только гласные
);

console.log(getVowels("AaBaaaai")); // ['a', 'i']
console.log(getVowels("Rtwpnkkk")); // []


/*
ЗАДАЧА 2 - Фибоначчи
Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

Нужно написать функцию, для расчета n-ого числа Фибоначчи.

Примечание. Необходимо использовать:

-BigInt (для расчета больших значений )
-Запоминание (memoization)
*/

const getFiboCalculator = (n) => {
    const cache = [0n, 1n, 1n]; // кэш с числами BigInt

    return n => {
        while(!cache[n]) { //пока не дойдем до заданного n, выполняем код ниже
            console.log("calculation..."); // демонстрация количества раз выполнения цикла для расчета
            const next = cache[cache.length - 1] + cache[cache.length - 2]; // расчет очередного числа из ряда Фибоначчи - сумма 2х предыдущих
            cache.push(next); // добавляем в массив (кэш) очередное число
            
        }
        return cache[n]; // возвращаем последнее число из массива (кэш)
    }
};

const getFibo = getFiboCalculator();


console.log(getFibo(100)); // "98 calculation..." и число: "354224848179261915075n"

console.log(getFibo(105)); // "5 calculation..." и число: "3928413764606871165730n"

console.log(getFibo(10)); // число: "55n", берется из кэш


/*
ЗАДАЧА 3 - Бесконечная функция

3.1. Бесконечная сумма
Написать функцию для подсчета суммы неограниченного количества чисел, использую каррирование:

Пример использования:

sum(1)(2)(4)(5)(); //12

*/

const sum = a => b => b === undefined ? a : sum(a + b);

console.log(sum(1)(2)(4)(5)()); //12


/*
3.2. Бесконечное произведение
Написать функцию для подсчета произведения неограниченного количества чисел, использую каррирование:

Пример использования:

mul(1)(2)(4)(5)();  //40

*/

const mul = a => b => b === undefined ? a : mul(a * b);

console.log(mul(1)(2)(4)(5)()); //40


/*
3.3. Фабрика функций
Написать функцию, которая преобразовывает бинарную функцию в функцию с любым количеством аргументов (такие же как в 3.1 и 3.2).

Пример использования:

const sum = getStrongFunc((a, b) => a + b);
sum(1)(2)(4)(5)(); //12

const mul = getStrongFunc((a, b) => a * b);
mul(1)(2)(4)(5)();  //40
*/


const getStrongFuncSum = func => a => b => b === undefined ? a : getStrongFuncSum(func)(func(a, b));

const sum2 = getStrongFuncSum ((a, b) => a + b);

console.log(sum2(1)(2)(4)(5)()); //12



const getStrongFuncMul = func => a => b => b === undefined ? a : getStrongFuncMul(func)(func(a, b));

const mul2 = getStrongFuncMul ((a, b) => a * b);

console.log(mul2(1)(2)(4)(5)()); //40