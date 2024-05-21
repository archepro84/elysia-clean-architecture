import { createElysia } from "./common/elysia.ts";

const PORT = 3000;

const elysia = createElysia()
  .get('', "Elysia is running!")
  .get('ping', async () => {
    return {
      success: true,
      data: "pong"
    }
  });


elysia.listen({ port: PORT }, ({ hostname, port }) => {
  console.log(`Elysia is running on http://${hostname}:${PORT}`);
})