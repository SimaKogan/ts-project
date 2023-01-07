let number1: number = 10;
let str1: string = "aby";
let minCharNumb = 97;
let maxCharNumber = 122;

function shiftCipher(str: string, shift: number = 1): string {
  let letterArr = Array.from(str);
  let charArr = letterArr.map.call(str, (e) => e.charCodeAt(0));
//   console.log(charArr);
  let shiftedCharArr = charArr.map((el) => {
    let res = el + shift;
    if (res > maxCharNumber) {

        do {
            let over = res - maxCharNumber;
            var goal = minCharNumb + over - 1;
          } while (res < maxCharNumber && res > minCharNumb);

    //   let over = res - maxCharNumber;
    //   let goal = minCharNumb + over - 1;
      return goal;
    }
    return res;
  });
//   console.log(shiftedCharArr);
  let shiftedLetters = [];
  for (let i = 0; i < shiftedCharArr.length; i++) {
    shiftedLetters.push(String.fromCharCode(shiftedCharArr[i]));
  }
  let endstring:string = shiftedLetters.join("");
//   console.log(shiftedLetters);
  return endstring;
}

function shiftDeCipher(str:string , shift:number = 1):string {
    let letterArr = Array.from(str);
    let charArr = letterArr.map.call(str, (e) => e.charCodeAt(0));
  //   console.log(charArr);
    let shiftedCharArr = charArr.map((el) => {
      let res = el - shift;
      if (res < minCharNumb) {


        let over = minCharNumb - res;
        let goal = maxCharNumber - over + 1;
        return goal;
      }
      return res;
    });
  //   console.log(shiftedCharArr);
    let shiftedLetters = [];
    for (let i = 0; i < shiftedCharArr.length; i++) {
      shiftedLetters.push(String.fromCharCode(shiftedCharArr[i]));
    }
    let endstring:string = shiftedLetters.join("");
  //   console.log(shiftedLetters);
    return endstring;
}
 console.log(shiftCipher("abz", 1000));
 console.log(shiftCipher(str1, number1));
 console.log(shiftCipher("kakdela", 5));
 console.log(shiftCipher("abz",27));


 console.log(shiftDeCipher("kli", number1));
 console.log(shiftDeCipher("pfpijqf", 5));
 console.log(shiftDeCipher("efgh", 4));
 console.log(shiftDeCipher("bcdefgh"));