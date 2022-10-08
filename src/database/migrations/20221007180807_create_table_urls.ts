import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('urls', (table) => {
    table.increments();
    table.string('shortenUrl').unique();
    table.string('url');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('urls');
}
