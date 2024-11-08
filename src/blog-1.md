
## 1. Union Types (`|`)
Union types allow a variable to be one of multiple specified types. When a function parameter or variable can hold multiple types, union types provide a clear way to handle this.

**Example:**
function sum(a: string | number, b: number | string) {
  console.log("Result is: " + (a + b));
}

sum(100, 100);          => Result is: 200
sum(100, "mahim");      => Result is: 100mahim
sum(true, 100);         => Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'

**Significance:**

- **Type Flexibility**: Union types allow values of different types while maintaining type safety.
- **Improved Code Readability**: Clearly indicates that a variable or parameter can hold multiple types.
- **Reduced Runtime Errors**: TypeScript enforces type checks, reducing the chances of type-related runtime errors.



## 2. Intersection Types (`&`)

Intersection types combine two or more types into a single type, which must satisfy all the included types simultaneously.

**Example:**

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

**Significance:**

- **Type Composition**: Intersection types combine multiple types into one, creating composite types that require all properties to be present.
- **Improved Code Readability**: Clearly defines composite structures that make code easier to understand.
- **Reduced Runtime Errors**: Ensures that all combined properties are present, catching potential errors at compile time.
- **Use Case**: Useful when we need a composite type that merges properties from multiple types or interfaces.


