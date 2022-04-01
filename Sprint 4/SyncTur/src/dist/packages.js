"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
let pack = [];
const consult = () => {
    let $url = `https://62361b7feb166c26eb2f488a.mockapi.io/pacotes`;
    (0, node_fetch_1.default)($url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(data => {
        let resultConvert = data;
        let result = resultConvert;
        for (let i = 0; i < result.length; i++) {
            pack[i] = result[i];
            console.log(pack[i]);
        }
    });
};
consult();
