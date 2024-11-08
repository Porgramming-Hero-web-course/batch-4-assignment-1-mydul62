class Car{
  constructor(public brand: string, public model: string, public year: number){};
  getCarAge(): string{
    const currentYear: number = 2024;
   const age= currentYear - this.year;
   return  `${age} (assuming current year is ${currentYear})`;;
  }

}
 
const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());
