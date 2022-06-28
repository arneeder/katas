// https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript

// no focus on efficiency
function partsSums(ls) {
    const result = []
    const numLoops = ls.length
    
    for (let i = 0; i <= numLoops; i++) {
      result.push(ls.reduce((acc, cur) => acc += cur, 0))
      ls.shift()
    }
    return result
  }
  
  partsSums([0, 1, 3, 6, 10])


// more efficient
function partsSums(ls) {
    const result = [0]
    
    while (ls.length > 0) {
      result.unshift( ls.pop() + result[0] )
    }
    return result
  }
  
  partsSums([0, 1, 3, 6, 10])
