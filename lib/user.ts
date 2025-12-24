import { getDbConnection } from "@/lib/db";

export const hasActivePlan = async (email: string) => {
  const sql = await getDbConnection();

  const query =
    await sql`SELECT price_id, status FROM users WHERE email = ${email} AND status = 'active' AND price_id IS NOT NULL`;

  return query && query.length > 0;
};
