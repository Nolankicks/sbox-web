import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async function ({ params })
{
    let link = new URL("https://services.facepunch.com/sbox/package/find");

    let res = await fetch(link.toString());

    let body = await res.json();

    let packages = body.Packages;

    return {
        packages
    }
}