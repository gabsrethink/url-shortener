import express from 'express';
import handleError from './error/errorHandler';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);
//error
app.use(handleError);

app.listen(4000, () => console.log('Server running at http://localhost:4000'));
