const currentRepo = require( 'simple-git' )( '.' )
const mori = require( 'mori' )
const getLog = require( './lib/get-log' )
const getFiles = require( './lib/get-files' )
const customLog = require( './lib/custom-log' )

getLog( currentRepo )
  .then( function ( data ) {
    var commits = mori.set( data.all )
    return getFiles( currentRepo, commits )
  } )
  .then( function ( commits ) {
    return customLog( commits, 'gource' )
  } )
  .then( function ( lines ) {
    var flat = mori.intoArray( mori.flatten( lines ) )
    console.log( flat.join( '\n' ) )
  } )
  .catch( function ( error ) {
    throw new Error( error )
  } )

