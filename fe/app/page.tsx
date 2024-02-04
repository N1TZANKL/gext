import { getMessage } from "./page.utils";
import Form from "./form";

export default async function Home() {
  const message = await getMessage();

  return (
    <div style={{ fontFamily: "system-ui" }}>
      <h1>Golang + NextJS app</h1>
      <h2> message: {message}</h2>
      <Form />
    </div>
  );
}

// export default function Home() {
//   return (
//     <div style={{ fontFamily: "system-ui" }}>
//       <h1>test without hydration errors (ugh)</h1>
//     </div>
//   );
// }
