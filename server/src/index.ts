import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import cotizacionRoutes from './routes/cotizacionRoutes';
import dolarRoutes from './routes/dolarRoutes';
import euroRoutes from './routes/euroRoutes';
import realRoutes from './routes/realRoutes';


import morgan from 'morgan';
import cors from 'cors';


class Server {

    public app : Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }


    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
        

    }


    routes():void{

        this.app.use(indexRoutes); 
        this.app.use('/api/cotizacion',cotizacionRoutes);                  
        this.app.use('/cotizacion/dolar', dolarRoutes);
        this.app.use('/cotizacion/euro', euroRoutes);
        this.app.use('/cotizacion/real', realRoutes);
    }
    

    star():void{
        this.app.listen(this.app.get('port'), () =>{
            
            console.log('Server on port 3000', this.app.get('port'));
        });
    }

}

const server = new Server();
server.star();
