class Rectangle 
{
    constructor(name, height, width) 
    {
        this.name = name;
        this.height = height;
        this.width = width;
    }

    area() 
    {
        return this.height * this.width;
    }

    static getClassName() 
    {
        return 'Rectangle';
    }
}

const rect = new Rectangle("square", 10, 10);
console.log(rect.area());
Rectangle.getClassName();
