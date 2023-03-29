var alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
var array = [];
for (var i = 0; i <= 6; i++) {
    array[i] = alphabet[Math.floor(Math.random()*alphabet.length)]
}
console.log(array.join(''));