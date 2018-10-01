const http = require('https');

function getAndPrintHTML (options) {

  let buffer = "";

  http.get(options, function(res) {

    res.setEncoding('utf8');

    res.on("error", function(err) {
      console.log("Error:",err);
    });

    res.on('data', function(data) {
      buffer += data;
    });

    res.on('end', function() {
      console.log("End of stream");
      console.log(buffer,'\n');
    });

  });

}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

getAndPrintHTML(requestOptions);