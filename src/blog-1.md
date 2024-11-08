## 1. Union Types ( | )
   Union types allow a variable to be one of multiple specified types.When a function parameter or variable can hold multiple types, union types provide a clear way to handle this.
   
example:
    function sum(a: string | number ,b:number | string) {
    console.log("Your ID is: " + id);
    }
    sum(100,100); => result is 200
    sum(100,"mahim"); => result is 100mahim
    sum(true,100); => this is invalid

#Significance:
Union types allowing values of different types while maintaining type safety.Improved Code Readability. reduce runtime errors and easy to catch error.

## 2. Intersection Types ( & )
   Intersection types combine two or more types into a single type, which must satisfy all the included types simultaneously.
   
   example:
    interface Address {
    street: string;
    city: string;
    }
    interface Person {
    name: string;
    role: number;
    }
    type Student = Person & Address;

      const student: Student = {
      name: "mahim",
      role: 40,
      street: "1212",
      city: "Dhaka"
      }; 
  
  here two interface are combined in one type.
  
#Significance:
   Intersection  combine two or more types into a single type.Improved Code Readability. reduce runtime errors and easy to catch error.When we need a composite type that merges properties from multiple types or interfaces then we use intersection(&).
