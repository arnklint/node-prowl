var Prowl = require('../lib/prowl'),
	p = new Prowl( process.env.PROWL_KEY ); // be sure to insert your own here

describe('Prowl Node.js API', function(){
	it('pushes when minimum valid information is added', function(done){
		p.push( 'i be in you iphonez', 'mah application', function( err, remaining ){
			remaining.should.be.a('number');	
			(err===null).should.eql(true); // ugly right
		});
		done();	
	});
});
