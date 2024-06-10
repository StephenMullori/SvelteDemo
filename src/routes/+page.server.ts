import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db/db';
import { usersTable } from '$lib/server/db/schema';
export const load: PageServerLoad = async ({ params }) => {
	let gottenUser = await db.select().from(usersTable).all()[0];
	if (!gottenUser) {
		const usersSeed: (typeof usersTable.$inferInsert)[] = [];
		usersSeed.push({
			id: 'hi'
		});
		db.insert(usersTable).values(usersSeed);
	}
	return {
		userId: gottenUser.id
	};
};
