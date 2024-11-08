{
  type Person = {
    name: string;
    age: number;
    email: string;
  };
  
  
  const person:Person = {
    name: "Alice",
    age: 25,
    email: "alice@example.com"
  };
  
  function validateKeys<T extends object, K extends keyof T>(obj: T, keys: K[]): boolean {
    return keys.every((key) => key in obj);
  }
  
console.log( validateKeys(person, ["name", "age"])); 
  

}