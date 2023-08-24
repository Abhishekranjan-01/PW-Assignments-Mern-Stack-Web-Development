const url = 'https://www.linkedin.com/in/abhishek-ranjan-791b6b22a/';


const pattern = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}\/?$/;

const regExOne = new RegExp(pattern,'gi');

console.log(regExOne.test(url,pattern));
