import { GetPackageList } from "$lib/types/SboxWeb";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ params })
{
    let link = new URL("https://services.facepunch.com/sbox/package/find");
    link.searchParams.set("q", `org:${params.org}`);

    let res = await fetch(link.toString());

    let body = await res.json();

    let packages = body.Packages;

    console.log(packages[0]);

    return {
        packages
    }
}