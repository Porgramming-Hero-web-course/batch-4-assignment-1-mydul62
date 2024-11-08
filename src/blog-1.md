

# TypeScript Union and Intersection Types

## 1. Union Types (`|`)

Union types allow a variable to be one of multiple specified types. When a function parameter or variable can hold multiple types, union types provide a clear way to handle this.

**Example:**
```typescript
function sum(a: string | number, b: number | string) {
    console.log("Your ID is: " + a + b);
}

sum(100, 100);         // Output: 200
sum(100, "mahim");     // Output: 100mahim
// sum(true, 100);     // This is invalid
```

**Significance:**
- Union types allow values of different types while maintaining type safety.
- Improved code readability.
- Reduces runtime errors and makes it easy to catch errors.

---

## 2. Intersection Types (`&`)

Intersection types combine two or more types into a single type, which must satisfy all the included types simultaneously.

**Example:**
```typescript
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
```

In this example, two interfaces are combined into one type.

**Significance:**
- Intersection types combine two or more types into a single type.
- Improved code readability.
- Reduces runtime errors and makes it easy to catch errors.
- Use intersection (`&`) when a composite type that merges properties from multiple types or interfaces is needed.

