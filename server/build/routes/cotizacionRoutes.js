"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cotizacionrController_1 = require("../controllers/cotizacionrController");
class CotizacionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cotizacionrController_1.cotizacionController.index);
    }
}
const cotizacionRoutes = new CotizacionRoutes();
exports.default = cotizacionRoutes.router;
