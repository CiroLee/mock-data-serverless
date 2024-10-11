import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import consumerService from '../service/consumer';
import TinyLorem from 'tiny-lorem';
import { successResponse, badRequest } from '../utils/response';
import { validateNumber } from '../utils/validator';
const lorem = new TinyLorem();

export const config = {
  runtime: 'edge',
};

const app = new Hono().basePath('/api');

app.get('/consumer', (c) => {
  const num = c.req.query('num') || 10;
  try {
    const amount = validateNumber(num);
    return c.json(successResponse(consumerService({ lorem, num: amount })));
  } catch (error: any) {
    console.error(error);
    return c.json(badRequest(error.message), 400);
  }
});

export default handle(app);
