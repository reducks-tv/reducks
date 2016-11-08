const t = require( 'tap' )
const mori = require( 'mori' )
const currentRepo = require( 'simple-git' )( '.' )
const getFiles = require( '../lib/get-files' )

var testLog = {
  author_email: 'hi@rog.gr',
  author_name: 'Roger Steve Ruiz',
  date: '2014-10-28 23:31:16 -0400',
  hash: 'bfc331dfcaf5f7b6bbe432e560f958f170ecb738',
  message: 'Initial commit',
}

t.test( 'Get Files test', function ( t ) {

  t.plan( 1 )

  return getFiles( currentRepo, mori.set( [ testLog ] ) )
    .then( function ( commits ) {
      t.ok( commits[ 0 ].files )
      t.end()
    } )
    .catch( t.threw )


} )
