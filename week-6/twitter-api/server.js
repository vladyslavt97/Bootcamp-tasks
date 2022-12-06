const express = require('express');
// const https = require('https');
const app = express();
require('dotenv').config();

const {getToken, getTweets} = require("./twitter");


console.log(getToken);
// 1. get a Bearer Token by making a POST request with encoded Key and Secret
// 2. get the Tweets by making a GET request with Bearer Token
// 3. filter & format/simplify tweets
// 4. respond to the client with the filtered/formatted tweets
app.get('/links.json', (req, res) => {
    getToken((error, token) => {
        console.log('token in getToken: ', token);

        // TASK: Check for error
        if(error){//      - send back empty JSON if there is an error
            res.sendStatus(500);
        }
        getTweets(token, (error, tweets) => {
            // console.log('tweets: ', tweets);
            if (error){// TASK: Check for error
                res.sendStatus(500);
            //      - send back empty JSON if there is an error
            }
            const filteredTweets = filterTweets(tweets);
            console.log('filteredTweets: ', filteredTweets);

            res.json(filteredTweets);// TASK: send response back with filteredTweets as JSON (use res.json());
        });
    });
});

// TASK: implement filterTweets function
//  - use the array method filter and map
//  - tipp: log the tweets and see how to access different information that we are interested in
//          example: tweets.entities.urls[0].url
//  - tipp: first filter and then change the structure with map
//      - we want to have something like { "text": "asdfasd", "url": "https://wp.com"}
function filterTweets(tweets) {
    // console.log('text: ', tweets[0].text);
    // console.log('id: ', tweets);
    const filteredTweets = tweets.filter(tweet => {
        console.log('filteredTweets; ', tweet.entities.urls.length);
        return tweet.entities.urls.length === 1; // TASK: replace true with the correct boolean expression: check if we have just one url
        
    });

    const newTweets = filteredTweets.map(tweet => {
    // TASK for later: move urls from text
    
        return { text: tweet.full_text.replaceAll('\n','').replace('. ', '.').split('https')[0], url: tweet.entities.urls[0].url };
    });
    return newTweets;
}

app.listen(8080, () => {
    console.log('Server running on localhost:8080...');
});