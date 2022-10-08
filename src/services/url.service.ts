import knex from '../database/index';
import crypto from 'crypto';

export async function getUrl(shortUrl: string) {
  try {
    if (shortUrl) {
      const results = await knex('urls')
        .where('shortenUrl', shortUrl)
        .select('url');
      return results[0];
    } else {
      const results = await knex('urls');
      return results;
    }
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
