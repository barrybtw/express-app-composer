import express from "express";
import sql from "./db";

const app = express();

app.get("/", async (req, res) => {
  const resp = await sql`SELECT version()`;
  res.send(resp);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
