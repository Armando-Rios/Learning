let factorial = 100
let fact  = 1;
for(let i= 1; i <= factorial; i++){
    fact = fact *(i);
    console.log(`El factorial de ${i} es: ${fact}`);
    if (i === 10){
        break
    }
}