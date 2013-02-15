var Prowl = require('../lib/prowl'),
	p = new Prowl( process.env.PROWL_KEY ); // be sure to insert your own here

describe('Prowl Node.js API', function(){
	it('pushes when minimum valid information is added', function(done){
		p.push( 'i be in you iphonez', 'mah application', function( err, remaining ){
			remaining.should.be.a('number');	
      console.log( err, typeof err, remaining );
			(err===null).should.eql(true);
		});
		done();	
	});

  it('detects errors properly when pushing', function( done ){
    p.push('tezt your iphonez', 'app', function( error, remaining ){
      remaining.should.be.a('number');
      error.should.be.a('object');
      error.message.should.be.a('string');
      error.code.should.be.a('string');
      done();
    });
  });
});
