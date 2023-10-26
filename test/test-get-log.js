const t = require( 'tap' )
const currentRepo = require( 'simple-git' )( '.' )
const getLog = require( '../lib/get-log' )

t.test( 'Get Log test', function ( t ) {

  t.plan( 1 )

  return getLog( currentRepo )
    .then( function ( logs ) {
      t.equal( logs.total, logs.all.length )
      t.end()
    } )
    .catch( t.threw )


} )

