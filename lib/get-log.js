module.exports = function getLog ( repo ) {
  return new Promise( function ( resolve, reject ) {
    repo.log( {
      '--reverse': null,
      '--encoding': 'UTF-8',
      '--no-renames': null,
      '--no-merges': null,
    }, function ( error, data ) {
      if ( error ) {
        reject( error )
        return
      }
      resolve( data )
    } )
  } )
}
