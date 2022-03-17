//Hapi framework
const Hapi = require('hapi');

//Address and port
const host = 'localhost';
const port = 3000; 

//Create server
const server = Hapi.Server({
    host: host,
    port: port
});

//Start server
const init = async () => {
    await server.start();
    console.log("Server up! Port: " + port);
}//About
    server.route({
        method: 'GET',
        path: '/calculator/about',
        handler: function (request, h) {
    
            var data = {
                message: 'API calculator'
            };
    
            return data;
        }
    });//Start App
init();