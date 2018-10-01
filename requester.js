const http = require('https');


function getAndPrintHTMLChunks() {
// Utilize the https library to GET a given URL.
// This function should console.log each chunk of data as it is received, concatenated with a newline character ('\n') so you can visualize each chunk.

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  http.get(requestOptions, function(res) {

    res.setEncoding('utf8');

    res.on('error', function(err) {
      console.log(err);
    });

    res.on('data', function(data) {
      console.log(data,"\n");
    });

    res.on('end', function(){
      console.log("Stream ended");
    });
  });
}

getAndPrintHTMLChunks();