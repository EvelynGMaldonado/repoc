const axios = require('axios');
const githubInfo = {
    async genLink(responses) {
        try {
            let response = await axios
            .get('https://api.github.com/${responses.github}');
            return response.data;
        } catch (error) {
            console.log(error) 
        }
    }
};
module.exports = githubInfo;