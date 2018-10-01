function getHTML (options, callback) {
  const http = require('https');

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
      callback(buffer);
    });

  });

}

module.exports = getHTML;