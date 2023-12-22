import postgres from "postgres";

const sql = postgres({
  host: "pg_db",
  port: 5432,
  database: "postgres",
  username: "postgres",
  password: "postgres",
});

async function getPgVersion() {
  const resp = await sql`SELECT version()`;
  console.log(resp);
}

getPgVersion();

export default sql;
