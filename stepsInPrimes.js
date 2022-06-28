// https://www.codewars.com/kata/5613d06cee1e7da6d5000055/train/javascript

function step(g, m, n) {
    const primeArr = []
    for (let i = m; i <= n; i++) {
      let isPrime = true
      for (let j = 2; j < i; j++) {
        if (i % j === 0) isPrime = false
      }
      if (isPrime) primeArr.push(i)
    }
  
  for (let i = 1; i < primeArr.length; i++) {
    if (primeArr[i] - primeArr[i-1] === g) return [primeArr[i-1], primeArr[i]]
  }
  return null
}