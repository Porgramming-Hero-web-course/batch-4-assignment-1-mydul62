
type Rectangle={
  shape:'rectangle';
  height:number;
  width:number;
}
type Circle={
  shape:"circle";
  radius:number
}

type Shape = Rectangle | Circle;

function calculateShapeArea(shape:Shape):number{
const  PI:number=3.1416;
   if(shape.shape==='rectangle'){
    return shape.width*shape.height
    }else{
    
    return PI*shape.radius*shape.radius    }
}


const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea)
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
console.log(rectangleArea)