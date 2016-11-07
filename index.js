const currentRepo = require( 'simple-git' )( '.' )
const mori = require( 'mori' )
const getLog = require( './lib/get-log' )
const getFiles = require( './lib/get-files' )

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

