import knex from '../database/index';

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

export default { getUrl };
