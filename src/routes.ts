import express from 'express';
import URLController from './controllers/URLController';

const routes = express();

routes
  .get('/', URLController.get)
  .get('/:shortUrl', URLController.get)
  .post('/', URLController.create);

export default routes;
