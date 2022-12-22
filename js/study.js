function text(name) {
    name= name.toLowerCase();
    var countA =0;
    var countC =0;
    for (let i = 0; i < name.length; i++) {
        if (name[i] == 'c') {
            countC += 1;
        }else if (name[i] == 'a') {
            countA = countA + 1;
        } 
    }
    sum = countA + countC;
    return sum;
}
console.log(text("accountant"));