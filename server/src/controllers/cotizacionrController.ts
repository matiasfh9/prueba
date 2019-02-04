import {Request, Response} from 'express';

class CotizacionController {



    public index (req:Request, res:Response) {
        res.json({cotiza: 'Dolar', nuevo: "38.2"});
    } 



}

export const cotizacionController = new CotizacionController();