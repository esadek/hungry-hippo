import * as log from "https://deno.land/std@0.206.0/log/mod.ts";

Deno.serve(async (req: Request): Promise<Response> => {
  if (req.method !== "POST") {
    log.error("405 Method Not Allowed");
    return new Response("Only POST requests accepted", { status: 405 });
  }
  try {
    const payload = await req.json();
    const output = JSON.stringify(payload) + "\n";
    await Deno.writeTextFile("data.jsonl", output, { append: true });
    log.info(payload);
    log.info("200 OK");
    return new Response("Payload consumed and stored", { status: 200 });
  } catch (error) {
    log.error("400 Bad Request");
    return new Response(error, { status: 400 });
  }
});
