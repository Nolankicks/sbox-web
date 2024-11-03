import { GetPackages } from "$lib/types/SboxWeb";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ params })
{
    let pkgs = await GetPackages();

    return {
        packages: pkgs
    }
}