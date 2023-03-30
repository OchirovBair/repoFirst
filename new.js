var randomWords = ['рыба', 'муравей', 'слон', 'лев', 'птица', 'кошка', 'собака'];
var word = randomWords[Math.floor(Math.random() * randomWords.length)];
var array = [];
for (var i = 0; i < word.length; i++) {
    array[i] = '_'; 
}
var remainigLetters = word.length;
var j = 0;
while (remainigLetters > j) {
    console.log(array.join(' '));
    console.log('Угадай букву или нажми \"Отмена\", чтобы выйти из игры.');
}