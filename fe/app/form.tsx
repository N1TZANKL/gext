"use client";

import { useFormState, useFormStatus } from "react-dom";
import { triggerAction } from "./page.utils";

export default function Form() {
  const [resMessage, formAction] = useFormState(triggerAction, "");
  const { pending } = useFormStatus();

  return (
    <form action={formAction}>
      <button type="submit" disabled={pending}>
        {pending ? "pending..." : "Click me to trigger action"}
      </button>
      {resMessage && <h2>Server responded: {resMessage}</h2>}
    </form>
  );
}
