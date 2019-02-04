"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CotizacionController {
    index(req, res) {
        res.json({ cotiza: 'Dolar', nuevo: "38.2" });
    }
}
exports.cotizacionController = new CotizacionController();
