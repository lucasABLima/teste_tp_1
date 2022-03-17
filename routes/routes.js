module.exports = function (server) {

    //route - sum
    server.route({
        method: 'GET',

        path: '/calculator/sum/{num1}+{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: num1 + num2
            };

            return data;
        }
    });

    //route - subtraction
    server.route({
        method: 'GET',

        path: '/calculator/sub/{num1}-{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: num1 - num2
            };

            return data;
        }
    });

    //route - multiplication
    server.route({
        method: 'GET',

        path: '/calculator/multi/{num1}*{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: num1 * num2
            };

            return data;
        }
    });

    //route - division
    server.route({
        method: 'GET',

        path: '/calculator/div/{num1}/{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: num1 / num2
            };

            return data;
        }
    });
}