import { Request, Response } from 'express';
import { getUrl, createUrl } from '../services/url.service';

const get = async (request: Request, response: Response) => {
  try {
    const { shortUrl } = request.params;
    const results = await getUrl(shortUrl);
    if (results.length > 0) {
      response.json(results);
    } else {
      response.redirect(results.url);
    }
  } catch (error) {
    console.log(error);
  }
};

const create = async (request: Request, response: Response) => {
  try {
    const { url } = request.body;
    const shortenUrl = await createUrl(url);
    response.send(shortenUrl);
  } catch (error) {
    console.log(error);
  }
};

export default { get, create };
