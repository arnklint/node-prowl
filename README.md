# node-prowl - Prowl for Node.js API

Be happy! Send push notifications to iDevices (iPad, iPhone etc) that
has the [Prowl iPhone app](http://www.prowlapp.com/) installed. Simple,
easy and clean.

As of now this API supports push and only push.

## Installation

	npm install node-prowl

or put it in your package.json as usual and hit npm install. It depends
on xml2js and request.

## Usage

The API requires your API-key, which could be found or created on the
"API Keys" tab on the [Prowl website](http://www.prowlapp.com/).

Initialize it with your key and start pushing!

```javascript
var Prowl = require('node-prowl');

var prowl = new Prowl('MY-API-KEY');
```

Now, use the prowl object whenever sending a push:

```javascript
prowl.push('YO, this is awesomez!', 'My app', function( err, remaining ){
	if( err ) throw err;
	console.log( 'I have ' + remaining + ' calls to the api during current hour. BOOM!' );
});
```

You can provide more [options](http://www.prowlapp.com/api.php#add) to the PUSH notification:

```javascript
prowl.push('YO, this is awesomez!', 'My app', {
	providerkey: 'my-provider-key',
	priority: 2,
	url: 'http://revrise.com'
}, function( err, remaining ){
	if( err ) throw err;
	console.log( 'I have ' + remaining + ' calls to the api during current hour. BOOM!' );
});
```

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

Happily written during a four hour hack in my
[apt](http://starksignal.se/wp-content/uploads/2012/01/office-chamonix.jpg) in Chamonix, France.

## Changelog

### 2020-01-20

* [dxdc](https://github.com/dxdc) contributes with updated tests and fixed response errors

### 2014-08-31

* [paton](https://github.com/paton) contributes with callback fix

### 2013-05-03

* [mrose17](https://github.com/mrose17) contributes with error handling fix

### 2013-02-15 - version 0.1.6

* [Jellyfrog](https://github.com/Jellyfrog) contributes with fixes
parameter bugs.
* Better error handling solving [Issue
1](https://github.com/arnklint/node-prowl/issues/1)
