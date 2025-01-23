import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text(`Hello Hono! ${process.env.MY_SECRET}`)
})

export default app
