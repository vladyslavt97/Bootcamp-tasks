const express = require('express');
const app = express();
require('dotenv').config();

const {getToken, getTweets} = require("./twitter");
app.use(express.static("./projects"));

app.get('/', (req, res) => {
    res.redirect('/links.json');
});

app.get('/links.json', (req, res) => {
    getToken((error, token) => {
        console.log('token in getToken: ', token);
        if(error){
            res.sendStatus(500);
        }
        getTweets(token, (error, tweets) => {
            if (error){
                res.sendStatus(500);

            }
            const filteredTweets = filterTweets(tweets);
            console.log('filteredTweets: ', filteredTweets);

            res.json(filteredTweets);
        });
    });
});

function filterTweets(tweets) {
    const filteredTweets = tweets.filter(tweet => {
        console.log('filteredTweets; ', tweet.entities.urls.length);
        return tweet.entities.urls.length === 1; //only if there is an url
        
    });

    const newTweets = filteredTweets.map(tweet => {
        //if (has only text){
        //return { text: tweet.full_text.replaceAll('\n','').replace('. ', '.').split('https')[0] };
        //}
        return { text: tweet.full_text.replaceAll('\n','').replace('. ', '.').split('https')[0], url: tweet.entities.urls[0].url };
    });
    return newTweets;
}

app.listen(8080, () => {
    console.log('Server running on localhost:8080...');
});