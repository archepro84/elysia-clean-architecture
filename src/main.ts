import { createElysia } from './common/elysia'

const PORT = 3000

const elysia = createElysia()
  .get('', 'Elysia is running!')
  .get('ping', async () => {
    return {
      success: true,
      data: 'pong',
    }
  })

elysia.listen({ port: PORT }, ({ hostname, port }) => {
  console.log(`Elysia is running on http://${hostname}:${port}`)
})
