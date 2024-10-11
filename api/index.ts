import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { handle } from 'hono/vercel';
import consumerService from '../service/consumer';
import numberList from '../service/number-list';
import TinyLorem from 'tiny-lorem';
import { successResponse, badRequest } from '../utils/response';
import { validateNumber } from '../utils/validator';
const lorem = new TinyLorem();

export const config = {
  runtime: 'edge',
};

const app = new Hono().basePath('/api');
app.use('/api/*', cors());

app.get('/consumer', (c) => {
  const num = c.req.query('num') || 10;
  try {
    const amount = validateNumber(num, `/api/consumer: num=${num}, `);
    return c.json(successResponse(consumerService({ lorem, num: amount })));
  } catch (error: any) {
    console.error(error);
    return c.json(badRequest(error.message), 400);
  }
});

app.get('/number-list', (c) => {
  const { num = 10, min = 0, max = 100, decimal = 2 } = c.req.query();
  try {
    const _num = validateNumber(num, `${c.req.path}: num=${num}, `);
    const _min = validateNumber(min, `${c.req.path}: min=${min}, `);
    const _max = validateNumber(max, `${c.req.path}: max=${max}, `);
    const _decimal = validateNumber(decimal, `/api/list: decimal=${decimal}, `);
    return c.json(successResponse(numberList({ lorem, num: _num, min: _min, max: _max, decimal: _decimal })));
  } catch (error: any) {
    console.error(error);
    return c.json(badRequest(error.message), 400);
  }
});

export default handle(app);
