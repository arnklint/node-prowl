var request = require('request'),
	querystring = require('querystring'),
	helpers = require('./helpers'),
	xml2js = require('xml2js'),
	parser = new xml2js.Parser();

/**
 * Prowl - send PUSH notification to you iDevice (iPhone, iPad)
 */
function Prowl( apiKey ){
	this.apiKey = apiKey || undefined;

	this.endpoint = "https://api.prowlapp.com/publicapi/";
}


/**
 * push - send push notification
 *
 *   Example
 *
 *   var prowl = new Prowl('MY-API-KEY');
 *   prowl.push('YO, this is awesomez!', 'My app', function( err, remaining ){
 *	   if( err ) throw err;
 *     console.log( 'I have ' + remaining + ' calls to the api during current hour' );
 *   });
 *
 * @param {String} event - the event name
 * @param {String} application - the name of your application or the application generating the event
 * @optional {Object} options
 *		* providerkey: optional provider key
 *		* priority: from -2 to 2, Emergency priority messages may bypass quiet hours according to the user's settings.
 *		* url: The URL which should be attached to the notification.
 * @param {Function} callback - calls back with to parameters; error message if any, and remaining api calls until you reach prowls limit
 *
 * @public
 */

var push = function( event, application, options, callback ){
	if( !application ) throw new Error("Second parameter \'application\' is missing");

	var me = this;
	if( typeof options == 'function' ){
		callback = options;
		options = {};
	}

	var defaults = {
		description: null,
		providerkey: null,
		priority: 0,
		url: null
	}

	var options = helpers.merge( defaults, options );

	var query = { event: event,
		application: application,
		description: options.description,
		apikey: me.apiKey,
		providerkey: options.providerkey,
		priority: options.priority,
		url: options.url
	}

	var url = me.endpoint + 'add?' + querystring.stringify( query );

	request({
		method: 'POST',
		uri: url
	}, function( err, res ){
		parser.parseString(res.body, function (err, result) {
			var error = null;
			if( err ) error = err;
			if( !result['success'] ) error = err;

			callback( error, result['success']['@']['remaining']*1 );
		});
	})
}

Prowl.prototype = {
	push: push
}

module.exports = Prowl;
