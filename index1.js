function alphabet(text) {
    text =text.toLowerCase();

    let countA=0;
    let countC=0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] == "a") {
        countA +=1;
      }
      else if (text[i]=="c") {
        countC +=1;
      }
      sum =countA + countC;
      return sum;
    }
}
console.log(alphabet("Accautants"));