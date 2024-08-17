Math.PI = 4;
console.log(Math.PI);

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);

const rectObj = {
    name: 'Rectangle',
    width: 10,
    height: 10
};

descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name');
console.log(descriptor);

Object.defineProperty(rectObj, 'name', {
    writable: false,
    configurable: false,
    enumerable: false
});

descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name');
console.log(descriptor);

rectObj.name = 'Rectangle 1';
delete rectObj.name;
console.log(rectObj.name);

console.log(Object.getOwnPropertyDescriptor(rectObj));