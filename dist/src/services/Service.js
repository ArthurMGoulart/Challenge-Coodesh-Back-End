"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Service {
    constructor(model) {
        this.model = model;
    }
    async create(obj) {
        return this.model.create(obj);
    }
    async read() {
        return this.model.read();
    }
    async readById(id) {
        return this.model.readById(id);
    }
    async readOne(id) {
        return this.model.readOne(id);
    }
    async update(id, obj) {
        return this.model.update(id, obj);
    }
    async delete(id) {
        return this.model.delete(id);
    }
}
exports.default = Service;
