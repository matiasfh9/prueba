"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const cotizacionRoutes_1 = __importDefault(require("./routes/cotizacionRoutes"));
const dolarRoutes_1 = __importDefault(require("./routes/dolarRoutes"));
const euroRoutes_1 = __importDefault(require("./routes/euroRoutes"));
const realRoutes_1 = __importDefault(require("./routes/realRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/cotizacion', cotizacionRoutes_1.default);
        this.app.use('/cotizacion/dolar', dolarRoutes_1.default);
        this.app.use('/cotizacion/euro', euroRoutes_1.default);
        this.app.use('/cotizacion/real', realRoutes_1.default);
    }
    star() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port 3000', this.app.get('port'));
        });
    }
}
const server = new Server();
server.star();
