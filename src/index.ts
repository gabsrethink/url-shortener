import express from 'express';
import URLController from './controllers/URLController';

const app = express();
app.use(express.json());

app.post('/', URLController.post);
app.get('/', URLController.getAllURL);
app.get('/:id', URLController.getURL);

app.listen(4000, () => console.log('Server running at http://localhost:4000'));
