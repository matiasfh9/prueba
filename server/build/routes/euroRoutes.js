"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const euroController_1 = require("../controllers/euroController");
class EuroRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', euroController_1.euroController.index);
    }
}
const euroRoutes = new EuroRoutes();
exports.default = euroRoutes.router;
