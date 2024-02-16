/** Command-line tool to generate Markov text. */
const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");



function filegen(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            // handle error
            console.error(err);
            // kill the process
            process.exit(1);
        }
  
            let fm = new markov.MarkovMachine(data)

            fm.makeText()
});
}

async function urlgen(url){
    try {
        let response = await axios.get(url)

        let um = new markov.MarkovMachine(response.data)

        um.makeText()
            
        process.exit(1);
    } catch(err){
        console.error(err)
    }
        
}









if (process.argv[2] = 'file'){

    let path = process.argv[3]


    filegen(path)

} else if (process.argv[2] = 'url') {

    let path = process.argv[3]


    urlgen(path)

} else {


}

