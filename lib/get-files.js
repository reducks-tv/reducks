const mori = require( 'mori' )

function isNotEmptyString ( s ) {
  return s !== ''
}
function mapFiles ( s ) {
  var rmatch= /.+([A-Z])\t(.+$)/
  var match = rmatch.exec( s )
  if ( null === match ) { return '' }
  return `${ match[ 1 ] } | ${ match[ 2 ] }`
}

module.exports =  function getFiles( repo, logs ) {
  return Promise.all( mori.intoArray( mori.map( function ( log ) {
    return new Promise( function (resolve, reject ) {
      repo.show( [
        '--raw',
        '--pretty=format:',
        log.hash,
      ], function ( error, files ) {
        if ( error ) {
          reject( error )
          return
        }
        log.files = mori.filter( isNotEmptyString, mori.map( mapFiles, mori.set( files.split( '\n' ) ) ) )
        resolve( log )
      } )
    } )
  }, logs ) ) )
}
