/*function add(number1, number2) {
    return number1 + number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
console.log(add(multiply(36325, 9824), 777));
*/
var array1 = [1, 2, 3];
var array2 = [1, 3, 2];
var array3 = [1, 2, 3, 4];
var array4 = [1, 2, 3];
var array5 = [1, 2, 3, 4];
function arraySame(array1, array2) {
    if (array1.length !== array2.length) {
        return console.log('Массивы разной длины!');
    }
    var j = 0;
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return console.log('Массивы разные!');
        } 
    }
    return console.log('Массивы одинаковые!');
}
arraySame(array1, array2);
