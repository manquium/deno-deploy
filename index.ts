import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = "Hello world!";
});

router.get("/hello", async (ctx) => {
  ctx.response.type = "html";
  ctx.response.body = `<html>
                  <head>
                    <title>Hello from JSX</title>
                  </head>
                  <body>
                  <div>Hello please write a name in the url after /hello/..</div>
                  </body>
                </html>`;
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