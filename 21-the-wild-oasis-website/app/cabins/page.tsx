import Counter from "../components/Counter";

export interface User {
  id: number;
  name: string;
}

export default async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await res.json();

  return (
    <div>
      <h1>Cabins page</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Counter users={data} />
    </div>
  );
}
