"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const uri = 'mongodb+srv://Budi:coodesh@cluster0.iafrc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const connectToDatabase = () => mongoose_1.default.connect(uri);
exports.default = connectToDatabase;
