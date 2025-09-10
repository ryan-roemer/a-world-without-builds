// 💡 TypeScript types!
interface User {
  name: string;
  age: number;
}

export const users: User[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

// node|deno|bun examples/typescript/users.ts
if ((import.meta as any).main) {
  console.log("Users loaded:", users);
}
