"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const spaceFlightNews_1 = __importDefault(require("./spaceFlightNews"));
const setCron = () => {
    node_cron_1.default.schedule('0 9 * * *', spaceFlightNews_1.default, {
        scheduled: true,
        timezone: "America/Sao_Paulo"
    });
};
exports.default = setCron;
