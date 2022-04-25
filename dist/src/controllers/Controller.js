"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ControllerErrors;
(function (ControllerErrors) {
    ControllerErrors["internal"] = "Internal Server Error";
    ControllerErrors["notFound"] = "Object not found";
    ControllerErrors["requiredId"] = "Id is required";
    ControllerErrors["badRequest"] = "Bad request";
})(ControllerErrors || (ControllerErrors = {}));
class Controller {
    constructor(service) {
        this.service = service;
        this.errors = ControllerErrors;
        this.read = async (_req, res) => {
            try {
                const objs = await this.service.read();
                return res.status(200).json(objs);
            }
            catch (err) {
                const { message } = err;
                return res.status(500).json({ error: message });
            }
        };
    }
}
exports.default = Controller;
