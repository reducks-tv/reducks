const mori = require( 'mori' )

function isNotEmptyString ( s ) {
  return s !== ''
}
function replaceTabs ( s ) {
  return s.replace( /\t/g, '  ' )
}

module.exports =  function getFiles( repo, logs ) {
  return mori.map( function ( log ) {
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
        log.files = mori.filter( isNotEmptyString, mori.map( replaceTabs, mori.set( files.split( '\n' ) ) ) )
        resolve( log )
      } )
    } )
  }, logs )
}
