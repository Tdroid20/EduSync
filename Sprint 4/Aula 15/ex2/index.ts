class Car {
    color: string;
    brand: string;
    plate: string;
    
    constructor(Color: string, Brand: string, Plate: string) {
        this.color = Color;
        this.brand = Brand;
        this.plate = Plate;
    }
}

let carsList: Array<Car> = [{
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
}]

const list = () => {
    for (let i = 0; i < 3; i++) {
        console.log(carsList[i].plate)
    }
}
