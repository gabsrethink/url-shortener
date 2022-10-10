import express from 'express';
import URLController from './controllers/URLController';

const routes = express();

routes
  .get('/', URLController.get) //lists all urls if none is specified
  .get('/:shortUrl', URLController.get)
  .post('/', URLController.create);

export default routes;
