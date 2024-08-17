const rectObj = {
    name: 'Rectangle',
    width: 10,
    height: 10
};

Object.seal(rectObj);

let descriptor = Object.getOwnPropertyDescriptor(rectObj);

rectObj.color = 'red';
delete rectObj.name;

rectObj.width = 20;

console.log(rectObj);

const circleObj = {
    name: 'Circle',
    radius: 10
};

Object.freeze(circleObj);

descriptor = Object.getOwnPropertyDescriptor(circleObj, 'name');

circleObj.color = 'red';
delete circleObj.name;
circleObj.radius = 20;

console.log(descriptor);

