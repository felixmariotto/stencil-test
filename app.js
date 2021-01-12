const express = require('express');
const path = require('path');

const PORT = 8080;

const app = express()

	.use( express.static( 'assets' ) )

	.get( '/', (req, res) => {
		res.sendFile( path.resolve( __dirname, 'index.html' ) );
	})

	.get( '/example', (req, res) => {
		res.sendFile( path.resolve( __dirname, 'example.html' ) );
	})

	.listen( PORT, (err) => {
		console.log('app listening on port ' + PORT);
		if ( err ) console.log( err )
	})