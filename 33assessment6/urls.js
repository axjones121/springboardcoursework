
const axios = require('axios')
const fs = require('fs')


fs.readFile('urls.txt', 'utf8', (err, data) => {
    if(err){
        console.log('ERROR:', err);
        process.exit(1)
    }
    
    array = data.split(',')




    async function getUrls(){
        
    try {
        let result = array.map(a => axios.get(a) );
        console.log(`${result.data}`);
    } catch(e) {
        console.log("Not Found");
    }
    
    }

    getUrls()

    
})