"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const url = 'https://api.cambio.today/v1/quotes/USD/ARS/json?quantity=1&key=1694|Pz5vw8j33fGURMrXDtmimR*pnsbLBvwz';

class DolarController {

    index(req, res) {
    
        var request = require('request');        
        res.header("Access-Control-Allow-Headers", "x-requested-with, x-requested-by");

        request(url, function (error, response, body) {
            res.json(body);
        });

    }
    
}
exports.dolarController = new DolarController();
