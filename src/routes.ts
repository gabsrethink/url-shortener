import express from 'express';
import URLController from './controllers/URLController';

const routes = express();

routes
  .post('/', URLController.post)
  .get('/', URLController.getAllURL)
  .get('/:id', URLController.getURL);

export default routes;
