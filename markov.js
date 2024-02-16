/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
    
  }




  

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chainmap = new Map();

    for (let i = 0; i < this.words.length; i++ ){

      let word = this.words[i]
      let nextWord = this.words[i+1]

      if (!chainmap.has(word)) {
        chainmap.set(word, []);
      }

      if (nextWord == undefined){
        chainmap.get(word).push(null)
      } else {
          chainmap.get(word).push(nextWord);
      }
      
      }
    this.chainmap = chainmap
    

    //console.log(Array.from(this.chainmap.keys()))
    }
    
  


  /** return random text from chains */

  makeText(numWords = 100) {
    function choice(choices){
      
      let c = (choices[Math.floor(choices.length * Math.random())])

      return c
    }

    let out = []

    let key = choice(Array.from(this.chainmap.keys()))

    while (out.length < numWords && key != null){
      out.push(key);
      key = choice(this.chainmap.get(key))

    }
    let output = out.join(' ')
    console.log(output)
    return output
  
  }
}

//let mm = new MarkovMachine("the cat in the hat");
//mm.makeText()


module.exports = {
  MarkovMachine,
};