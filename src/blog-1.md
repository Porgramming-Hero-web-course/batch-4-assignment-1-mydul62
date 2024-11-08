

# TypeScript Union and Intersection Types

## Union Types (`|`)

Union types allow a variable to accept multiple specified types, making it useful for function parameters or variables that can hold different types while still ensuring type safety.

### Example:
```typescript
function combineValues(a: string | number, b: number | string) {
    console.log("Result:", a + b);
}

combineValues(100, 100);        // Output: 200
combineValues(100, "mahim");     // Output: 100mahim
// combineValues(true, 100);    // Error: Argument of type 'true' is not assignable to parameter of type 'string | number'.
```

### Significance
- **Type Flexibility**: Allows values of multiple types while maintaining type safety.
- **Improved Code Readability**: Clearly indicates where multiple types are allowed.
- **Reduced Runtime Errors**: Enforces strict type checking at compile time, catching errors early.

---

## Intersection Types (`&`)

Intersection types combine two or more types into a single composite type. This is useful when creating objects that need to satisfy multiple type requirements simultaneously.

### Example:
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
    name: "Mahim",
    role: 40,
    street: "1212",
    city: "Dhaka"
};
```

### Significance
- **Composite Types**: Merges properties from multiple types, ensuring all required properties are present.
- **Improved Code Readability**: Clearly defines complex types by combining simpler ones.
- **Reduced Runtime Errors**: Enforces type compatibility and catches errors at compile time.

