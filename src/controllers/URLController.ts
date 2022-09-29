import { Request, Response } from 'express';
import crypto from 'crypto';
import fs from 'fs';
import { getURLId } from '../services/url.service';

const shortString = crypto.randomBytes(3).toString('hex');
let urls: any = {};

fs.readFile('./src/data/urls.json', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    urls = JSON.parse(data);
  }
});

const urlFile = () => {
  fs.writeFile('./src/data/urls.json', JSON.stringify(urls), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Produto inserido');
    }
  });
};

const post = async (request: Request, response: Response) => {
  const {
    url,
  }: {
    url: string;
  } = request.body;

  try {
    urls[shortString] = url;
    urlFile();
    response.json(url);
  } catch (error) {
    console.log(error.message);
  }
};

const getURL = async (request: Request, response: Response) => {
  const id = request.params.id;
  getURLId(id);
  response.json(urls[id]);
};

const getAllURL = async (_request: Request, response: Response) => {
  response.json(urls);
};

export default { post, getURL, getAllURL };
