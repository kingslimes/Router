const { client } = require('./lib/router');

client.get('*', function( req, res ) {
    res.status(404).render('404')
});