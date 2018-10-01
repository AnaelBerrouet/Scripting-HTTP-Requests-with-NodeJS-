const getHTML = require('../get-html-module');

let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

let cypher = {a : '4', e : '3', l : '1', o : '0', s : '5', t : '7'};
let cypher2 = {'ck' : 'x', 'er' : '0r', 'you' : 'j00'};


function print1337 (html) {

  let leetHTML = [];

  let temp = [];

  html = html.split('ck');
  html.forEach( function(element) {
    temp.push(element);
    temp.push('x');
  });

  html = temp.join('').split('er');
  html.forEach( function(element) {
    temp.push(element);
    temp.push('0r');
  });

  html = temp.join('').split('you');
  html.forEach( function(element) {
    temp.push(element);
    temp.push('j00');
  });

  html = html.join('').split('');

  html.forEach(function(letter, index) {

    if(!(letter in cypher)){
      leetHTML.push(letter);
    } else {
      leetHTML.push(cypher[letter]);
    }
  });
  console.log(leetHTML.join(''));
}

getHTML(requestOptions, print1337);