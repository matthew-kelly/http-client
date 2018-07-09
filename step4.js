var https = require('https');

function getHTML(options, callback) {
  https.get(requestOptions, function(response) {
    var body = '';

    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      body += chunk;
    });
    response.on('end', function() {
      callback(body);
    });
  });
}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);