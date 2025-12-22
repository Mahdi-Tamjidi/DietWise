import { getDbConnection } from "@/lib/db";

export const getDietById = async (id: string) => {
  try {
    const sql = await getDbConnection();

    const [diet] = await sql`SELECT
    id,
    user_id,
    diet_plan,
    status,
    created_at,
    updated_at
     FROM diets WHERE id = ${id}`;

    return diet;
  } catch (error) {
    console.error("Error fetching summary by ID", error);
    return null;
  }
};
