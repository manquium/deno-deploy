import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();


app.use((ctx) => {
    ctx.response.body = "Hello World!";
  })


addEventListener("fetch",app.fetchEventHandler);