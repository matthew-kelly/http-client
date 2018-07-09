var https = require('https');

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {
    var body = '';

    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      body += chunk;
    });
    response.on('end', function() {
      console.log(body);
    });
  });
}

getAndPrintHTML();