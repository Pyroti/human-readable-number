const numbers = {
    1: "one",       2: "two",        3: "three",     4: "four",      5: "five",
    6: "six",       7: "seven",      8: "eight",     9: "nine",     10: "ten",
    11: "eleven",  12: "twelve",    13: "thirteen", 14: "fourteen", 15: "fifteen",
    16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty",
    30: "thirty",  40: "forty",     50: "fifty",    60: "sixty",    70: "seventy",
    80: "eighty",  90: "ninety",     0: "zero"
};

module.exports = function toReadable (number) {
    let hundredths = Math.floor(number/100);
    let dozens = (Math.floor(number/10)%10)*10;
    let units = number%10;
    let numer = number%100;

    if(number >= 0 && number < 10){
        return numbers[number];
    } else if(number >= 10 && number <=20){
        return numbers[number];
    } else if(units == 0 && number <100){
        return numbers[number];
    } else if(number > 20 && number < 100){
        return `${numbers[dozens]} ${numbers[units]}`;
    } else if(numer == 0){
        return `${numbers[Math.floor(number/100)]} hundred`
    } else if(number > 100 && number < 1000){

        if(numer > 10 && numer < 20){
            return `${numbers[hundredths]} hundred ${numbers[numer]}`;
        }
        if(dozens != 0 && units != 0){
            return `${numbers[hundredths]} hundred ${numbers[dozens]} ${numbers[units]}`;
        } else if(units !=0 && dozens == 0){
            return `${numbers[hundredths]} hundred ${numbers[units]}`;
        } else if(units == 0){
            return `${numbers[hundredths]} hundred ${numbers[dozens]}`;
      }
  }
}
