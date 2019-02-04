import {Request, Response} from 'express';

class RealController {

    public index (req:Request, res:Response) {                    
       var request = require('request');              
       var url = 'https://api.cambio.today/v1/quotes/BRL/ARS/json?quantity=1&key=1694|Pz5vw8j33fGURMrXDtmimR*pnsbLBvwz';
        res.header("Access-Control-Allow-Headers", "x-requested-with, x-requested-by");                        
        request(url, function (error:any, response:any, body:any) {                    
            res.json(body);            
        });
    }
}


export const realController = new RealController();