import { GetPackageList } from "$lib/types/SboxWeb";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ params, url })
{
    return {
        org: params.org,
    }
}