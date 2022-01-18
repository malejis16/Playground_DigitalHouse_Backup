function division(a,b){
    if (a==0 || b==0){
        return "No se puede dividir por cero";
    }
    return a/b ;
}
let b = division(16,2);
console.log(b);