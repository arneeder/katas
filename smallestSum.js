// https://www.codewars.com/kata/52f677797c461daaf7000740/train/javascript

// function solution(numbers) {
//   const listLength = numbers.length
//   numbers.sort( (a, b) => b - a)
//   while (numbers[0] > numbers[listLength - 1]) {
//   	for (let i = 0; i < listLength - 1; i++) {
//       if (numbers[i] === numbers[listLength - 1]) break
//       const initialValue = numbers[i]
//       for (let j = i + 1; j < listLength; j++) {
//         if (numbers[i] <= numbers[j]) break
//         numbers[i] = numbers[i] - numbers[j]
//       }
//     }
//   numbers.sort( (a, b) => b - a)
//   }
//   return numbers.reduce((acc, cur) => acc + cur, 0)
// }



function solution(numbers) {
  
    const numbersObj = {}
    let numbersCalc = numbers.sort((a, b) => b - a)
    let maxVal = numbers[0]
    let secMaxVal = numbers[1]
    let newVal = 0
    
    for (let num of numbers) {
      numbersObj[num] ? numbersObj[num] ++ : numbersObj[num] = 1
    }
      
    while(Object.keys(numbersObj).length > 1) {
    
      if(numbersObj[maxVal] > 1) {
        console.log(numbersObj[maxVal])
        numbersObj[maxVal]--
      } else {
        delete numbersObj[maxVal]
      }
  
      newVal = maxVal - secMaxVal
      numbersObj[newVal] ? numbersObj[newVal]++ : numbersObj[newVal] = 1
        numbersCalc = Object.keys(numbersObj).sort((a, b) => b - a)
        maxVal = numbersCalc[0]
      secMaxVal = numbersCalc[1]
      }
    
    return maxVal * numbersObj[maxVal]
  }