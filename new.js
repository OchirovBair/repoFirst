var string = 'javascript is awesome';
var string1 = '';
for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a') {
        string1 = string1 + '4';
    } else if ( string[i] === 'e') {
        string1 = string1 + '3';
    } else if ( string[i] === 'i') {
        string1 = string1 + '1';
    } else if ( string[i] === 'o') {
        string1 = string1 + '0';
    } else {
        string1 = string1 + string[i];
    }
}
console.log(string1);