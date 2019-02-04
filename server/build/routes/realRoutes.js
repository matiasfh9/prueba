"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const realController_1 = require("../controllers/realController");
class RealRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', realController_1.realController.index);
    }
}
const realRoutes = new RealRoutes();
exports.default = realRoutes.router;
