console.log('Работал на красивый отчет)')

// 1. Создайте 2 переменные: 'one = 15' , 'two = 3' . Выведите их сумму , разность , произведение , частное .


let one = 15, two = 3;
console.log('1) Имеем: 15 и 3' );
console.log('   Сумма :' + (one + two));
console.log('   Разность: ' + (one - two));
console.log('   Умножение: ' + (one * two));
console.log('   Деление: ' + (one / two));


// 2. Создайте переменные 'name' и 'age' со значением вашего имени и возраста. 
//    Выведите на экран: My name is 'name'. I am 'age' years old.


let name = 'Sergey', age = 26;
console.log('2) My name is ' + name + '. I am ' + age + ' years old.');


// 3. Сравните 2 числа. Если первое больше второго, то из первого вычтите второе.
//    Если второе больше первого , то из второго вычтите первое. Результат разности выведите.


let first = 35 , second = 30;
if (first > second)
    console.log('3) Разность первого числа ' + first + ' и второго числа' + second + ' равна: ' + (first - second));
else console.log('3) Разность второго числа ' + second + ' и первого числа ' + first + ' равна: ' + (second - first));


// 4. Напишите ветвление которое сравнивает на чётность 2 числа и выводит нечётное.
//    Одно число всегда чётное, а другое нечётное.


let x = 14 , y = 15;
if (x % 2 == 0)
    console.log('4) Нечетное число из имеющихся x='+ x + ' и y=' + y + ': ' + y + '.');
else console.log('4) Нечетное число из имеющихся x='+ x + ' и y=' + y + ': ' + x + '.');


// 5. Три разных числа. Все числа разные(не повторяются).
//    Найти, какое из них является средним (больше одного, но меньше другого).


let a = 6, b = 10, c = 8;
if (a > b && b > c) {
    console.log('5) Первый способ: (a=' + a + ', b=' + b + ', c=' + c + '): ' + b + '.');
} else {
    if (c > a && a > b)
        console.log('5) Первый способ: (a=' + a + ', b=' + b + ', c=' + c + '): ' + a + '.');
    else console.log('5) Первый способ: (a=' + a + ', b=' + b + ', c=' + c + '): ' + c + '.');
}

if (a > b && a > c)
    if (b > c)
        console.log('   Второй способ: (a=' + a + ', b=' + b + ', c=' + c + '): ' + b + '.');
    else console.log('   Второй способ: (a=' + a + ', b=' + b + ', c=' + c + '): ' + c + '.');
if (b > a && b > c)
    if (a > c) 
        console.log('   Второй способ: (a=' + a + ', b=' + b + ', c=' + c + '): ' + a + '.');
    else console.log('   Второй способ: (a=' + a + ', b=' + b + ', c=' + c + '): ' + c + '.');
if (c > a && c > b)
    if (a > b)
        console.log('   Второй способ: (a=' + a + ', b=' + b + ', c=' + c + '): ' + a + '.');
else console.log('   Второй способ: (a=' + a + ', b=' + b + ', c=' + c + '): ' + b + '.');

if (a > b) {
    if (b > c)console.log('   Третий способ: (a=' + a + ', b=' + b + ', c=' + c + '): ' + b + '.');
    else {
        if (a > c)
            console.log('   Третий способ: (a=' + a + ', b=' + b + ', c=' + c + '): ' + c + '.');
        else console.log('   Третий способ: (a=' + a + ', b=' + b + ', c=' + c + '): ' + a + '.');
    }
} else {
    if (c > a)
        if (b > c)
            console.log('   Третий способ: (a=' + a + ', b=' + b + ', c=' + c + '): ' + c + '.');
        else console.log('   Третий способ: (a=' + a + ', b=' + b + ', c=' + c + '): ' + b + '.');
    else console.log('   Третий способ: (a=' + a + ', b=' + b + ', c=' + c + '): ' + a + '.');
}


// 6. Написать программу, которая вычисляет и печатает объемы цилиндров высотой h=20 
//    и радиусами оснований от 3 до 12. (V = p * R**2 * h)


let h = 20;
const PI = 3.14;
let r = 3;
console.log('6) Объем цилиндра с радиусом основания:')
while (r < 13) {
    console.log('   r=' + r + ': ' + (PI * h * r**2).toFixed(1));
    r++;
}


// 7. Написать программу, которая вычисляет и печатает сумму квадратов нечетных чисел от 1 до 19.   


let number = 0;
for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) continue;
    number += i**2;
};
console.log('7) Сумма квадратов нечетных чисел от 1 до 19 равна ' + number + '.');


// 8. Написать программу, которая вычисляет и печатает сумму квадратов четных чисел от 2 до 20.


let numb = 0;
for (let i = 0; i < 21; i++) {
    if (i % 2 != 0) continue;
    numb = numb + i**2;
};
console.log('8) Сумма квадратов четных чисел от 0 до 20 равна ' + numb + '.');


// 9. Посчитать сумму элементов массива.


let numbers = [1, 22, -34, 18, 77, -105, 46, 41.1, -58];

let summNumbers = 0;
for (let i = 0; i < numbers.length; i++) {
    summNumbers += numbers[i];
};
console.log('9) Сумма элементов массива numbers: ' + summNumbers.toFixed(1) + '.');


// 10. Найти максимальный элемент в предыдущем массиве.


let maxNumber;
for (let i = 0; i < numbers.length; i++) {
    if (maxNumber > numbers[i]) continue;
    else maxNumber = numbers[i];
};
console.log('10) Наибольшее число массива numbers: ' + maxNumber + '.');


// 11. Инвертировать и вывести на экран все элементы массива по знаку. Выведите сумму отрицателных элементов.
//     Выведите среднее арифметическое массива до и после инверсии.

let summ = 0;
let numbersInv = [];
let average = 0;
let averageInv = 0;
for (let i = 0; i < numbers.length; i++) {
    numbersInv[i] = numbers[i] * (-1);                            //инверсия
    if (numbersInv[i] < 0)                                        //сумма отрицательных элементов после инверсии.
        summ += numbersInv[i];                              
    average += (numbers[i] / numbers.length);            //среднее арифмерическое до инверсии.
    averageInv += (numbersInv[i] / numbers.length);   //среднее арифмерическое после инверсии.
}
console.log('11) Инвертированный по знаку массив:' + numbersInv);
console.log('    Сумма отрицательных элементов инверсированного массива numbers: ' + summ + '.');
console.log('    Среднее арифметическое массива до инверсии: ' + average.toFixed(3) + '.');
console.log('    Среднее арифметическое массива после инверсии: ' + averageInv.toFixed(3) + '.');


// 12. Отсортируйте и выведите массив по возрастанию.


console.log('12) Исходный массив: ' + numbers + '.');
numbers.sort((a, b) => a - b);   //тут уже черную магию применил я)
console.log('    Сортировка по возрастанию: ' + numbers + '.');


// 13. Переставить элементы заданного массива в обратном порядке, то есть произвести реверс массива.


console.log('13) Исходный массив: ' + numbers + '.');
numbers.reverse();   //еще немного)
console.log('    Реверс массива: ' + numbers + '.');


// 14*. Создать и вывести талицу умножения от 1 до 5. Используйте двухмерные массивы.


let firstArrays = [1, 2, 3, 4, 5];
let secondArrays = [1, 2, 3, 4, 5];
let result = [
    [],
    [],
    [],
    [],
    []
];
for (let i = 0; i < firstArrays.length; i++) {           //Даже не спрашивайте как у меня это получилось
    for (let j = 0; j < secondArrays.length; j++)
        result[i][j] = firstArrays[i] * secondArrays[j];
}
console.log('14) Таблица умножения:')
console.log(result);

//Работал на красивый отчет)