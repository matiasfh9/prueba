import {Router} from 'express';

import {euroController} from '../controllers/euroController';

class EuroRoutes{

    public router:Router = Router();

    constructor(){
        this.config();    
    }


    config():void {
        this.router.get('/', euroController.index);
    }

}



const euroRoutes = new EuroRoutes();
export default euroRoutes.router;