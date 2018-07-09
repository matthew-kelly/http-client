var https = require('https');

function getAndPrintHTML(options) {
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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);