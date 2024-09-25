import * as log from "jsr:@std/log";
import ngrok from "npm:ngrok";

const PORT = 8000;

Deno.serve({ port: PORT }, async (req: Request): Promise<Response> => {
  if (!["POST", "PUT", "PATCH"].includes(req.method)) {
    log.error("405 Method Not Allowed");
    return new Response("Only POST, PUT and PATCH requests accepted", {
      status: 405,
    });
  }
  try {
    const payload = await req.json();
    const output = JSON.stringify(payload) + "\n";
    await Deno.writeTextFile("data.jsonl", output, { append: true });
    log.info("200 OK");
    log.info(payload);
    return new Response("Payload consumed and stored", { status: 200 });
  } catch (error) {
    log.error("400 Bad Request");
    return new Response(error, { status: 400 });
  }
});

(async () => {
  const listener = await ngrok.connect({ addr: PORT });
  console.log(`Ingress established at ${listener}`);
})();
