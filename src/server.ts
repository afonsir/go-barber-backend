import express, { request, response } from 'express';
import routes from './routes';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: "Hello GoStack" });
});

app.listen(3333, () => {
  console.log('🚀 Served started on port 3333!')
});
