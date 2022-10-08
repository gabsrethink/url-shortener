import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('urls').del();

  // Inserts seed entries
  await knex('urls').insert([
    { shortenUrl: 'e7ab87', url: 'https://www.rethink.dev/' },
    { shortenUrl: '450a91', url: 'https://www.google.com/' },
  ]);
}
