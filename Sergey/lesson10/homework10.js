// 1. Создайте функцию которая принимает на вход 2 числа и выводит их сумму , разность , произведение , частное.


function operations(a, b){
    console.log('1) Имеем числа: ' + a + ', ' + b);
    console.log('   Сумма: ' + (a + b));
    console.log('   Разность: ' + (a - b));
    console.log('   Произведение: ' + (a * b));
    console.log('   Частное: ' + (a / b).toFixed(3));
};
operations(2, -3);


// 2. Модифицируйте предыдущую функцию так , чтобы она выводила сумму , разность , произведение или частное, 
// в зависимости от третьего параметра.


function operations_v2(a, b, c){
    console.log(`2) Имеем числа: ${a}, ${b}`)
    if (c === 'Сумма')
        console.log(`   Выбрана сумма: ${a + b}`);
    else if (c === 'Разность')
        console.log(`   Выбрана разность: ${a - b}`);
    else if (c === 'Произведение')
        console.log(`   Выбрано умножение: ${a * b}`);
    else if (c === 'Частное')
        console.log(`   Выбрано деление: ${(a / b).toFixed(3)}`);
    else console.log('Действие не выбрано');
};
operations_v2(2, -3, 'Частное');


// 3. Создайте функцию на вход которой подаётся имя и возраст и 
//    выведет на экран: My name is 'name'. I am 'age' years old.


function name_age(name, age){
    console.log(`3) My name is ${name}. I am ${age} years old.`)
};
name_age('Sergey', '26');


// 4. Создайте функцию которая сравнивает 2 числа. Если числа не равны, то она выводит их разницу.


function compare(a, b){
    if (a != b)
        console.log(`4) Числа ${a} и ${b} не равны. Их разность: ${a - b}`);
    else
        console.log(`4) Числа ${a} и ${b} равны`);
};
compare(4, -8);


// 5. Напишите функцию которая определяет чётность числа.


function one_two(a){
    if (a % 2 == 0)
        console.log(`5) Число ${a} четное.`);
    else
        console.log(`5) Число ${a} нечетное.`);
}
one_two(3);


// 6. Функция принимает три числа. Если хоть одно число повторяется то выводим ошибку.
//    Найти, какое из них является средним (больше одного, но меньше другого).


function middle(a, b, c){
    if (a == b || a == c || b == c)
        console.log('6) Eror. Numbers should not be repeated. Try again');
    else if ((a > b && b > c) || (c > b && b > a))
        console.log(`6) Число ${b} является средним среди ${a}, ${b}, ${c}.`);
    else if ((c > a && a > b) || (b > a && a > c))
        console.log(`6) Число ${a} является средним среди ${a}, ${b}, ${c}.`);
    else
        console.log(`6) Число ${c} является средним среди ${a}, ${b}, ${c}.`);
};
middle(3, 5, 4);


// 7. Написать функцию, которая принимает радиус основания и высоту(по умолчанию h = 20) и возвращает объемы цилиндров   
//    V = p * R**2 * h


function cylinder_volume(r, h = 20){
    console.log(`7) Объем цилиндра при радиусе ${r} и высоте ${h} равен ${(3.14 * h * r**2).toFixed(2)}.`);
};
cylinder_volume(5);


// 8. Написать функцию, которая вычисляет и возвращает сумму квадратов нечетных чисел от одного значения до другого.  
//    Проверить на коррктонсть введёные данные. 


function summ2(a, b){
    let c = 0;
    if (b - a == 1 || a == b || ((b - a) == 2 && a % 2 != 0))
        console.log(`8) Date entered incorrectly.`);
    else
        for (let i = a + 1; i < b; i++) {
            if (i % 2 == 0) continue;
            else c += i**2;
        };
    if (c != 0) console.log(`8) Сумма квадраов нечетных чисел от ${a} до ${b} равна: ${c}.`);
};
summ2(5, 10);


// 9. Написать функцию для подсчёта факториалов. (5! = 5 * 4 * 3 * 2 * 1)


function n(a){
    let n = a;
    for (let i = 1; i < a; i++)
        n *= i;
    console.log(`9) ${a}! = ${n}.`);
};
n(5);


// 10. Написать функциюю , которая определяет количество разрядов числа


function ranks(a){
    let b = a.toFixed(0);
    b = String(b);
    let arrey = [b].map(item => item.length);
    console.log(`10) Количество разрядов числа ${a}: ${arrey}.`);
}
ranks(30440.5);