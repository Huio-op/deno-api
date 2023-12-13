import {Application, Router} from "https://deno.land/x/oak@v12.6.1/mod.ts"
import db from "./postgres/db.js"
const app = new Application();
const router = new Router();

router
.get("/", ({response}) => {
    response.body = "Welcome to a Deno API";
})
.get("/users", async ({response}) => {
    const users = await db.queryArray("SELECT * FROM user_account");
    response.body = users.rows;
})
.get("/users/:id", async ({response, params}) => {
    const {id} = params;
    const user = await db.queryArray(`SELECT * FROM user_account WHERE id = ${id}`);
    response.body = user.rows;
})

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({port: 8080})