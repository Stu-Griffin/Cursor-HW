const notDoneYet = "Еще не сделал";
//first func
const putNumber = "152453";
function theBigestNumber(number) {
  const a = number.split("").sort().reverse();
  const b = Number(a[0]);
  return b;
}

//second func
let number = 32;
let degree = 3;
if(!Number.isInteger(number) || !Number.isInteger(degree)) { //проверка на цельность числа
  while(!Number.isInteger(number)) {
    number = +prompt("enter number");
  }
  while(!Number.isInteger(degree)) {
    degree = +prompt("enter degree");
  }
}
function toDegree(number,degree) {
    let result = number;
    if(degree === 0) {
      result = 1;
    } else if(degree > 0) {
      for(let i = 1; i < degree; i++) {
        result *= number;
      }
    } else {
      for(let i = 1; i < -1*degree; i++) { //то же самое что и высше в ,else if(degree > 0), только множим на -1 
        result *= number;
      }
      result = 1 / result; // + делим 1 на число, поскольку минусовая степень
    } 
    return result;
}

//third func
const name = "mAx";
function fixName(x) {
  const upperFirst = x[0].toUpperCase(); //M
  const strLength = x.length;
  const otherLetters = x.slice(1,strLength).toLowerCase();//ax
  const newName = upperFirst + otherLetters;
  return newName;
}

//fourth func
const yourSalary = 1000;
const taxe = 19.5;
function yourSalaryAfterTaxes(salary) {
  const percentOfTaxes = (salary / 100) * taxe;
  return salary - percentOfTaxes;
}

//fiveth func
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//sixth func
const word1 = "Cocacola";
const letter1 = "c";
function countLetterInTheWord(word1, letter1) {
  word1 = word1.toLowerCase();
  letter1 = letter1.toLowerCase();
  let countLetters = 0;
  for(let i = 0; i < word1.length; i++) {
    if(letter1 === word1[i]) {
      countLetters++;
    }
  }
  return countLetters;
}

//seventh func
const sum = "100$";
const dollarToUah = 27;
function converter(sum, dollarCurent) {
  const b = sum.split("").reverse()[0];
  if(b == "$") {
    return(parseInt(sum) * dollarCurent +"UAH");
  } else if(b == "H") {
    return(parseInt(sum) / dollarCurent +"$"); 
  } else {
    throw("please put UAH or $");
  }
}

//eighth func
const passwordLength = 8;
function randomPassword(length = passwordLength) {
  if(length !== Math.round(length)) {
    throw "I need integer number";
  } else {
    let password = "";
    for(let i = 0; i < length; i++) {
      password += Math.round(Math.random()*(9-0));
    }
    return password;
  }
}

//nineth func
const word = "Gutenberg";
const letter = "e";
function removeLetter(letter, word) {
    //return word.replace(letter,''); получилось убрать только одну "е"
    for(let i = 0; i < word.length; i++) {
        word = word.replace(letter,'');
    }  
    return word;
}

//tenth func
// const palidrom = "Я несу гусеня";
// function isPalidrom(palidrom) {
//   const a = palidrom.toLowerCase().split("");
//   for(let i=0; i<palidrom.length; i++) {
//     if(palidrom[i]===" ") {
//       delete palidrom[i];
//     }
//   }
//   return a.reverse() === a; //if(a.reverse() === a) { return true;} else {return false;}
// }

//eleventh func
const firstWord = "Бісквіт був дуже ніжним";
function deleteDuplicateLetter(firstWord)  {
  const a = firstWord.toLowerCase();
  let newSentence = "";
  for(let i = 0; i < a.length; i++) {
    if(countLetterInTheWord(a, a[i]) === 1) {
      newSentence = newSentence + a[i]
    }
  } 
  return newSentence;
}

//on screen
const a = [theBigestNumber(putNumber), toDegree(number,degree), fixName(name), yourSalaryAfterTaxes(yourSalary), randomNumber(10, 100), countLetterInTheWord(word1,letter1), converter(sum, dollarToUah), randomPassword(length = passwordLength), removeLetter(letter, word), deleteDuplicateLetter(firstWord)];
export default a