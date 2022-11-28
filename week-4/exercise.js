const url = require('url');
const querystring = require('querystring');

const argumentsOf = process.argv;
const lastArg = argumentsOf[argumentsOf.length - 1];
console.log(lastArg);
//with help of url.parse() and querystring.parse();

const spicedUrl = new URL("https://spiced.academy/program/full-stack-web-development/");
const someUrl = new URL("http://127.0.0.1:8080/test?a=100&b=200");
//spiced
console.log("protocol ", spicedUrl.protocol);
console.log("host ", spicedUrl.host);
console.log("hostname ", spicedUrl.hostname);
console.log("port ", spicedUrl.port);
console.log("query ", spicedUrl.query);
console.log("pathname ", spicedUrl.pathname);
///
console.log("new");
//another
console.log("protocol ", someUrl.protocol);
console.log("host ", someUrl.host);
console.log("hostname ", someUrl.hostname);
console.log("port ", someUrl.port);
console.log("query ", someUrl.query);
console.log("pathname ", someUrl.pathname);