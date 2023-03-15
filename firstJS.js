var array1 = [1, 2, 3];
var array2 = [1, 2, 3];
var array3 = [3, 4, 5];
var array4 = [1, 2, 3, 4];
var z;
var arraySame = (x, y)=> {
    if (x.length !== y.length) {
        return false;
    }
    for (var i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            return false;
        }
        return true;
    }
}
console.log(arraySame(array1, array2));
console.log(arraySame(array1, array3));
