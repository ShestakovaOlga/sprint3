class Polygon {
    constructor(numberOfSides, base, height) {
        this.numberOfSides = numberOfSides;
        this.base = base;
        this.height = height;
    }

    perimeter() {
        return this.numberOfSides * this.base;
    }
    area() {
        return this.base * this.height;
    }
}

class Square extends Polygon {
    constructor(side) {
        super(4, side, side)
    }
}
class Triangle extends Polygon {
    constructor(base, height) {
        super(3, base, height)
    }
    area() {
        return super.area() / 2
    }
}

const triangle = new Triangle(2, 2)
const square = new Square(2)
console.log(square.area());
console.log(triangle.area());

