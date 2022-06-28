// https://www.codewars.com/kata/5ea39ab1d8425e0029fcd035/train/javascript

function pingPong(sounds) {
    const points = {
      ping: 0,
      pong: 0
    }
    
    const soundsGame = sounds.split('-')
    
    const games = []
    let startIndex = 0
    for (let i = 1; i < soundsGame.length; i++) {
      if ((soundsGame[i] !== 'ping' && soundsGame[i] !== 'pong') && (soundsGame[i-1] === 'ping' || soundsGame[i-1] === 'pong') ) {
        games.push(soundsGame.slice(startIndex, i))
        startIndex = i
      }
    }
    console.log(games)
    
    for (let game of games) {
      
        soundsFiltered = game.filter( sound => sound === 'ping' || sound === 'pong')
    
      if (soundsFiltered[0] !== soundsFiltered[soundsFiltered.length - 1]) {
        points[soundsFiltered[0]]++
      } else if (soundsFiltered[0] === 'ping') {
        soundsFiltered.pong++
      }
      else {
        soundsFiltered.ping++
      }
      
    }
    console.log()
    
      if (points.ping > points.pong) {
        return 'ping'
      } else if (points.pong > points.ping) {
        return 'pong'
      } else {
        return soundsFiltered[0] === 'ping' ? 'pong' : 'ping'
      }
  
  }
  
  pingPong('ping-pong-ping-pong-ping-pong-ping-pong-dong-tang-bing-tink-donk-donk-donk')