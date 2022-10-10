import knex from '../database/index';
import crypto from 'crypto';
import urlRepository from '../repositories/urlRepository';

export async function getUrl(shortUrl: string) {
  try {
    return await urlRepository.getUrl(shortUrl);
  } catch (error) {
    console.log(error);
  }
}

export async function createUrl(url: string) {
  try {
    const shortenUrl = crypto.randomBytes(3).toString('hex');
    await knex('urls').insert({ url, shortenUrl });
    return shortenUrl;
  } catch (error) {
    console.log(error);
    return null;
  }
}
