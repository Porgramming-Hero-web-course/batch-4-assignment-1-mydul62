
interface IRectangle{
  shape:'rectangle';
  height:number;
  width:number;
}
interface ICircle{
  shape:"circle";
  radius:number
}

type Shape = IRectangle | ICircle;

function calculateShapeArea(shape:Shape):number{
const  PI:number=3.1416;
   if(shape.shape==='rectangle'){
    return shape.width*shape.height
    }else{
    
    return PI*shape.radius*shape.radius    }
}


const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
