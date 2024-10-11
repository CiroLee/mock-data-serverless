# mock-data-serverless

serverless developed by [hono](https://hono.dev/) and deploy to [vercel](https://vercel.com/)

## development

```
pnpm install
npm run start
```

## API

| Path          | Method | Parameters             | Description                                                                                                                         | Default                          |
| ------------- | ------ | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| /api/consumer | GET    | num                    | return consumer data, accept `num` to special amount                                                                                | 10                               |
| /api/list     | GET    | num, min, max, decimal | return a list of random data, accept `num` to special amount, `min` and `max` to special range, `decimal` to special decimal places | num=12,min=0,max=2000, decimal=0 |
