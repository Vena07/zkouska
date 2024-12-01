import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';

export async function GET() {
	const users = await db.select().from(user);
	return new Response(JSON.stringify(users), { status: 200 });
}