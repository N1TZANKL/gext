"use server";

export async function getMessage() {
  return fetch("http://localhost:8080/test").then((res) => res.text());
}

export async function triggerAction() {
  return fetch("http://localhost:8080/test", { method: "post" }).then((res) =>
    res.text()
  );
}
