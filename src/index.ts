import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text(`Hello Secret: ${process.env.MY_SECRET}`)
})

export default {
  port: process.env.SERVER_PORT || 3000,
  fetch: app.fetch
}
