import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ params })
{
    console.log(params);
}