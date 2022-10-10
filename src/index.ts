import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);

export function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

app.listen(4000, () => console.log('Server running at http://localhost:4000'));
