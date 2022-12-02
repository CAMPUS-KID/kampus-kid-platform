export interface Site {
    id: number,
    name: string,
    code: string
}

export interface GetSitesOutput { getSites: Site[] };

export interface Faculty {
    id: number,
    name: string,
    code: string
    siteId: number
}

export interface GetFacultiesOutput { getFaculties: Faculty[] };