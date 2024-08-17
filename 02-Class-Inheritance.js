// Parent class
class Shape
{
    constructor(name)
    {
        this.name = name;
    }

    logName()
    {
        console.log('Shape name: ' + this.name);
    }
}

//sub class
class Rectangle extends Shape
{
    constructor(name, width, height)
    {
        super(name);
        this.width = width;
        this.height = height;
    }
}

class Circle extends Shape
{
    constructor(name, radius)
    {
        super(name);
        this.radius = radius;
    }

    logName()
    {
        console.log('Circle name: ' + this.name);
    }
}

const rect = new Rectangle("Rect 1", 10, 10);
console.log(rect);
rect.logName();

const cir = new Circle("Circle 1", 10);
console.log(cir);
cir.logName();

console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);