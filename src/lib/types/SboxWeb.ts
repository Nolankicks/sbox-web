export interface SboxPackage
{
    Ident: string;
    FullIdent: string;
    Title: string;
    Summary: string;
    Thumb: string;
    Org: Org;
}

export interface Org
{
    Ident: string;
    Title: string;
    Description: string;
    Thumb: string;
}

export const GetPackages = async function (): Promise<SboxPackage[] | null>
{
    let res = await fetch("https://services.facepunch.com/sbox/package/list");

    if (!res.ok)
    {
        return null;
    }

    let body = await res.json();

    let pkgs: SboxPackage[] = body.Groupings[0].Packages;

    return pkgs;
}