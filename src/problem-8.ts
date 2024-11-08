{
  type Person = {
    name: string;
    age: number;
    email: string;
  };
  type PersonKeys = keyof Person;
  
  const person = {
    name: "Alice",
    age: 25,
    email: "alice@example.com"
  };
  
  function validateKeys<T extends object, K extends keyof T>(personObj: T, keys: K[]): boolean {
    return keys.every((key) => key in personObj);
  }
  
console.log( validateKeys(person, ["name", "age"])); 
  

}