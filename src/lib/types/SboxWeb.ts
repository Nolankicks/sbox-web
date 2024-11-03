export interface SboxPackage
{
    Ident: string;
    FullIdent: string;
    Title: string;
    Summary: string;
    Thumb: string;
    Org: Org;
    VotesUp: number;
    VotesDown: number;
}

export interface Org
{
    Ident: string;
    Title: string;
    Description: string;
    Thumb: string;
}

export const GetPackageList = async function (): Promise<any>
{
    let res = await fetch("https://services.facepunch.com/sbox/package/list");

    if (!res.ok)
    {
        return null;
    }

    let body = await res.json();

    return body;
}

export const GetPackageGroup = async function GetPackageGroup(body: any, title: string): Promise<SboxPackage[]> {

    if (body == null || !body.Groupings) {
        throw new Error("Failed to fetch packages");
    }

    return body.Groupings
        .filter((group: any) => group.Title === title)
        .flatMap((group: any) => group.Packages);
}