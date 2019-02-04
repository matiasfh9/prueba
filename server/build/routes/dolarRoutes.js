"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dolarController_1 = require("../controllers/dolarController");
class DolarRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', dolarController_1.dolarController.index);
    }
}
const dolarRoutes = new DolarRoutes();
exports.default = dolarRoutes.router;
