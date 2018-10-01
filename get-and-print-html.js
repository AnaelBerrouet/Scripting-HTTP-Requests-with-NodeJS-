const http = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  let buffer = "";

  http.get(requestOptions, function(res) {

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


getAndPrintHTML();