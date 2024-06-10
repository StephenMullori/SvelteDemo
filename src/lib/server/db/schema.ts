import { sqliteTable, text, primaryKey, integer } from 'drizzle-orm/sqlite-core';

export const usersTable = sqliteTable('users', {
	id: text('id').primaryKey()
});

export const countersTable = sqliteTable('counters', {
	id: text('id').primaryKey(),
	value: integer('value').notNull().default(0)
});

export const usersCountersTable = sqliteTable(
	'usersCounters',
	{
		userId: text('userId').references(() => usersTable.id),
		counterId: text('counterId').references(() => countersTable.id)
	},
	(table) => ({
		pk: primaryKey({ columns: [table.userId, table.counterId] })
	})
);
