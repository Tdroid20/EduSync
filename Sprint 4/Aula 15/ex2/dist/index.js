"use strict";
class Car {
    constructor(Color, Brand, Plate) {
        this.color = Color;
        this.brand = Brand;
        this.plate = Plate;
    }
}
let carsList = [{
        color: `red`,
        brand: `umaMarcaExistente`,
        plate: `lam-9790`
    }, {
        color: `green`,
        brand: `umaMarcaExistente`,
        plate: `rgb-2081`
    }, {
        color: `blue`,
        brand: `umaMarcaExistente`,
        plate: `brq-1083`
    }];
const list = () => {
    for (let i = 0; i < 3; i++) {
        console.log(carsList[i].plate);
    }
};
