class Rectangle
{
    constructor(name, width, height)
    {
        this.name = name;
        this.width = width;
        this.height = height;
    }

    area()
    {
        return this.width * this.height;
    }

    perimeter()
    {
        return 2 * (this.width + this.height);
    }

    isSquare()
    {
        return this.width === this.height;
    }

    logArea()
    {
        console.log('Rectangle Area: ' + this.area());
    }
}

const square = new Rectangle("square", 10, 10);
console.log(square.area());
console.log(square);
console.log(square.isSquare());
console.log(square.perimeter());
square.logArea();