const t = require( 'tap' )
const mori = require( 'mori' )
const customLog = require( '../lib/custom-log' )
const testCommit = {
  hash: 'bfc331dfcaf5f7b6bbe432e560f958f170ecb738',
  date: '2014-10-28 23:31:16 -0400',
  message: 'Initial commit',
  author_name: 'Roger Steve Ruiz',
  author_email: 'hi@rog.gr',
  files: [ 'A | readme.markdown' ],
}
t.test( 'Custom log produces Gource lines', function ( t ) {

  t.plan( 2 )

  return mori.first( customLog( [ testCommit ] ) )
    .then( function ( line ) {
      line = mori.first( line )
      t.ok( line )
      t.equal( 4, line.split( ' | ' ).length )
      t.end
    } )
    .catch( t.threw )

} )

t.test( 'Custom log produces Code_Swarm lines', function ( t ) {

  t.plan( 4 )

  return mori.first( customLog( [ testCommit ], 'code_swarm' ) )
    .then( function ( line ) {
      line = mori.first( line )
      t.ok( line )
      t.match( line, /author=".+"/ )
      t.match( line, /date=".+"/ )
      t.match( line, /filename=".+"/ )
      t.end
    } )
    .catch( t.threw )


} )
