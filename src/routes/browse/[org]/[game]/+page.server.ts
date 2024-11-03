import type { SboxPackage } from "$lib/types/SboxWeb";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async function ({ params, url })
{
    let ident = url.pathname.split("/").pop();

    console.log(ident);

    let res = await fetch( `https://services.facepunch.com/sbox/package/get/${params.org}.${ident}` );

    let body = await res.json();

    let pkg: SboxPackage = body;

    return {
        pkg
    }
}