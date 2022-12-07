const express = require('express');
const app = express();
require('dotenv').config();

const {getToken, getTweets} = require("./twitter");
app.use(express.static("./projects"));

app.get('/', (req, res) => {
    res.redirect('/ticker/');
});

app.get('/links.json', (req, res) => {
    getToken()
        .then(token => {
            return Promise.all([
                getTweets(token, 'nytimes'),
                getTweets(token, 'washingtonpost'),
                getTweets(token, 'kyivpost')
            ]);
        })
        .then(tweets => {
            const filteredTweets = filterTweets(tweets);    
            res.json(filteredTweets);
        })
        .catch(error => { 
            console.log(error);
            res.sendStatus(500);
        });
});


// app.get('/links.json', (req, res) => {
//     getToken()
//         .then(token => {
//             return getTweets(token);
//         })
//         .then(tweets => {
//             const filteredTweets = filterTweets(tweets);    
//             res.json(filteredTweets);
//         })
//         .catch(error => { 
//             res.sendStatus(500);
//         }); 
// });

function filterTweets(tweets) {
    const flattenedTweets = tweets.flat();
    const filteredTweets = flattenedTweets.filter(tweet => {
        console.log('filteredTweets; ', tweet.entities.urls.length);
        return tweet.entities.urls.length === 1; 
        
    });
    // flattenedTweets.sort((a, b) => {
    //     if (a.created_at < b.created_at) {
    //         return 1;
    //     } else {
    //         return -1;
    //     }
    // });
    filteredTweets.sort((a, b) => (a.created_at < b.created_at ? 1 : -1)
    );
    console.log(filteredTweets.map(tweet => {
        return tweet.created_at;
    }));

    const newTweets = filteredTweets.map(tweet => {
        console.log(filteredTweets);
        return {name: tweet.user.name, text: tweet.full_text.replaceAll('\n','').replace('. ', '.').split('https')[0], url: tweet.entities.urls[0].url };
    });
    return newTweets;
}

app.listen(8080, () => {
    console.log('Server running on localhost:8080...');
});