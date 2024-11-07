class Car{
  constructor(public brand: string, public model: string, public year: number){};
  getCarAge(): number{
    const currentYear: number = 2024;
   const age= currentYear - this.year;
   return age;
  }

}
 
const car = new Car("Honda", "Civic", 2019);
console.log(car.getCarAge())
