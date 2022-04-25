"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const spaceFlightNews_1 = __importDefault(require("./spaceFlightNews"));
const server_1 = __importDefault(require("./server"));
const mongoose_1 = __importDefault(require("mongoose"));
const seed = async () => {
    if (mongoose_1.default.connection.readyState !== 1) {
        server_1.default.startServer();
    }
    await (0, spaceFlightNews_1.default)();
};
seed();
