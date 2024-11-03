import { GetPackageGroup, GetPackageList } from "$lib/types/SboxWeb";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ params })
{
    let res = await GetPackageList();

    let featured = await GetPackageGroup(res, "Featured");
    let popular = await GetPackageGroup(res, "Popular");
    let updated = await GetPackageGroup(res, "Updated");
    let trending = await GetPackageGroup(res, "Trending");


    return {
        featured,
        popular,
        updated,
        trending
    }
}