import {Router} from 'express';

import {realController} from '../controllers/realController';

class RealRoutes{

    public router:Router = Router();

    constructor(){
        this.config();    
    }

    config():void {
        this.router.get('/', realController.index);
    }

}



const realRoutes = new RealRoutes();
export default realRoutes.router;