const axios = require('axios');
const uri = "http://api.quotable.io/random";

module.exports = getData = () => {
    return axios.get(uri).then(response => {
        let content = response.data.content;
        // Remove all punctuation
        content = content.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
                         .replace(/'s/g, '')
                         .replace(/'ve/g, '')
                         .toLowerCase();
        return content.split(' ');
    });
}