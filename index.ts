import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {page} from "./page.tsx";


const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = "Hello world!";
});

router.get("/hello", (ctx) => {
  ctx.response.body = page({});
});

router.get("/hello/:name", (ctx) => {
    ctx.response.body = `Hello ${ctx.params.name?ctx.params.name:"Peter"}!`;
});


  

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener(
  "listen",
  (e) => console.log("Listening on http://localhost:8080"),
);
await app.listen({ port: 8080 });