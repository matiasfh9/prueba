import {Router} from 'express';

import {dolarController} from '../controllers/dolarController';

class DolarRoutes{

    public router:Router = Router();

    constructor(){
        this.config();    
    }


    config():void {
        this.router.get('/', dolarController.index);
    }

}



const dolarRoutes = new DolarRoutes();
export default dolarRoutes.router;