import {config} from "dotenv/mod.ts"
import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const env = await config();

const client = new Client({
    user: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE,
    hostname: env.DATABASE_HOSTNAME,
    port: env.DATABASE_PORT,
})
await client.connect();

export default client;