//fn.test.js contains three tests but none of them are passing. Modify fn.js to make them pass.
module.exports = function fn(str) {
    if (typeof str === 'string'){
        return str.split("").reverse().join("");
    } else if (Array.isArray(str)){
        return [str[0].split("").reverse().join(""), null];
    } else {
        return null;
    }
};