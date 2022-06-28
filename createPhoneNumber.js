// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(numbers){
    let resultStr = ''
    
    for ( let i = 0; i < numbers.length; i++) {
      console.log(i, numbers[i])
        if (i === 0) resultStr += '('
        if (i === 3) resultStr += ') '
      if (i === 6) resultStr += '-'
      resultStr += String(numbers[i])
    }
    
    return resultStr
  }