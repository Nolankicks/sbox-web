import type { SboxPackage } from "$lib/types/SboxWeb";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async function ({ params, url })
{
    let ident = url.pathname.split("/").pop();

    return {
        indnt: ident,
        org: params.org,
    }
}