const https = require('https');

const { TWITTER_API_KEY, TWITTER_API_SECRET } = process.env;
const combinedString = `${TWITTER_API_KEY}:${TWITTER_API_SECRET}`;
// console.log(combinedString);

// TASK: use base64 encoding combinedString:
const encodedString = Buffer.from(combinedString).toString('base64'); // use Buffer.from().toString();
// console.log('encodedString', encodedString);


module.exports.getToken = (callback) => {
    const req = https.request({
        method: 'POST',
        host: 'api.twitter.com',
        path: '/oauth2/token',
        headers: {
            'Authorization': `Basic ${encodedString}`,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8.'
        }
    });

    req.on('response', (res) => {
        // res is response from twitter API
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            console.log('Response for getting Token: ', data);
            const dataJson = JSON.parse(data);
            callback(null, dataJson.access_token);
        });
        res.on('error', (err) => {
            callback(err, null);
        });
    });

    // Set body and end request
    req.end('grant_type=client_credentials');
};

// TASK: implement logic for actual GET-Request for getting Tweets. See getToken() function for analogy
module.exports.getTweets = (token, callback) => {
    console.log('token in getTweets', token);
    const req = https.request({
        method: 'GET',
        host: 'api.twitter.com',
        path: `/1.1/statuses/user_timeline.json?count=15&screen_name=KyivPost&tweet_mode=extended`,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    req.on('response', (res) => {
        // res is response from twitter API
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            const dataJson = JSON.parse(data);
            // console.log('Response for getting Tweets: ', dataJson);
            callback(null, dataJson);
        });
        res.on('error', (err) => {
            callback(err, null);
        });
    });

    // Set body and end request
    req.end();
};