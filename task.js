'use strict'
// 1) Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. 
// Запишите ее в переменную result.

let a = [1, 2, 3, 4, 5];
let result = 0;
for (let i = 0; i < a.length; i++) {
  result += a[i];
}
console.log(result);
