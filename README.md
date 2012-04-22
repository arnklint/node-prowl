# Prowl Node.js API

Be happy! Send push notifications to iDevices (iPad, iPhone etc) that
has the [Prowl iPhone app](http://www.prowlapp.com/) installed. Simple,
easy and clean.

As of now this API supports push and only push.

## Installation

	npm install prowl

or put it in your package.json as usual and hit npm install. It depends
on xml2js and request.

## Usage

The API requires your API-key, which could be found or created on the
"API Keys" tab on the [Prowl website](http://www.prowlapp.com/).

Initialize it with your key and start pushing!

	var prowl = new Prowl('MY-API-KEY');
	prowl.push('YO, this is awesomez!', 'My app', function( err, remaining ){
		if( err ) throw err;
		console.log( 'I have ' + remaining + ' calls to the api during current hour. BOOM!' );
	});

## Contribute

I´d be happy if you wanted to contribute with pull requests or tips.
I´ll add you to the contributors list here and in the package.json file.

## Testing

While contributing, make sure to write a test and make it pass if you
extend the library. Tests are written in the test directory, preferably
in all.js, since its quite small right now. It uses should.js and mocha
for tests.

Test by installing mocha and should.js (dev dependencies) and then just
hit:

PROWL_KEY=[my key here] make

And voila, it autotests for you.
