import {Router} from 'express';

import {cotizacionController} from '../controllers/cotizacionrController';

class CotizacionRoutes{

    public router:Router = Router();

    constructor(){
        this.config();    
    }


    config():void {
        this.router.get('/', cotizacionController.index);
    }

}



const cotizacionRoutes = new CotizacionRoutes();
export default cotizacionRoutes.router;