const currentRepo = require( 'simple-git' )( '.' )
const mori = require( 'mori' )

function isNotEmptyString ( s ) {
  return s !== ''
}
function replaceTabs ( s ) {
  return s.replace( /\t/g, '  ' )
}

function getLog ( repo ) {
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

function getFiles( repo, logs ) {
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

getLog( currentRepo )
  .then( function ( data ) {
    return getFiles( currentRepo, mori.set( data.all ) )
  } )
  .then( function ( pendingFiles ) {
    return Promise.all( mori.intoArray( pendingFiles ) )
  } )
  .then( function ( commits ) {
    console.log( commits )
  } )
  .catch( function ( error ) {
    console.error( error )
  } )

