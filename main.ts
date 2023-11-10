Deno.serve(async (req: Request): Promise<Response> => {
  if (req.method !== "POST") {
    return new Response("Invalid method", { status: 405 });
  }
  try {
    const payload = await req.json();
    const output = JSON.stringify(payload) + "\n";
    await Deno.writeTextFile("data.jsonl", output, { append: true });
    return new Response("OK", { status: 200 });
  } catch (error) {
    return new Response(error, { status: 400 });
  }
});
