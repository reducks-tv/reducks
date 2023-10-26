const mori = require( 'mori' )

function writeLine ( commit, file, type ) {
  if ( 'gource' === type ) {
    return `${ new Date( commit.date ).getTime() } | ${ commit.author_name } | ${ file }`
  }
  if ( 'code_swarm' === type ) {
    return `<event date="${ new Date( commit.date ).getTime() }" author="${ commit.author_name }" filename="${ file.split( ' | ' )[ 1 ] }" />`
  }
}

module.exports = function( commits, type ) {
  type = type || 'gource'
  return Promise.all( mori.intoArray( mori.map( function ( commit ) {
    return new Promise( function (resolve/*, reject*/ ) {
      var lines = mori.map( function ( file ) {
        return writeLine( commit, file, type )
      }, commit.files )
      resolve( lines )
    } )
  }, commits ) ) )
}
