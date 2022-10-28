import { serve } from "https://deno.land/std@0.140.0/http/server.ts";


function Handler(_req){
    return new Response("Hello World! 23", {
        headers: { "content-type": "text/plain" },
      });
}
serve(Handler);