//2.14
//const circularShapes = require('./circular-shapes');
//특정 모듈만 가져옴
const { getCircumference } = require('./circular-shapes');

const r = 10;
const h = 20;
console.log(`Circumference = ${circularShapes.getCircumference(r)}`);
//console.log(`Circle Area = ${circularShapes.getCircleArea(r)}`);
//console.log(`Sphere Volume = ${circularShapes.getSphereVolume(r)}`);
//console.log(`Cylinder Surface Area = ${circularShapes.getCylinderSurfaceArea(r, h)}`);

//2.13
const path = require('path');
const myFile = '/home/ubuntu/kuniv/kweb/example.js';
const dirname = path.dirname(myFile);
const basename = path.basename(myFile);
const extname = path.extname(myFile);
console.log(`path.dirname = ${dirname}`);
console.log(`path.basename = ${basename}`);
console.log(`path.extname = ${extname}`);