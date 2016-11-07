const currentRepo = require( 'simple-git' )( '.' )
const mori = require( 'mori' )
const getLog = require( './lib/get-log' )
const getFiles = require( './lib/get-files' )
const customLog = require( './lib/custom-log' )

getLog( currentRepo )
  .then( function ( data ) {
    return getFiles( currentRepo, mori.set( data.all ) )
  } )
  .then( function ( pendingFiles ) {
    return Promise.all( mori.intoArray( pendingFiles ) )
  } )
  .then( function ( commits ) {
    var buildLines = customLog( commits, 'code_swarm' )
    return Promise.all( mori.intoArray( buildLines ) )
  } )
  .then( function ( lines ) {
    lines = mori.flatten( lines )
    console.log( mori.intoArray( lines ).join( '\n' ) )
  } )
  .catch( function ( error ) {
    console.error( error )
  } )

