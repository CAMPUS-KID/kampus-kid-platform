import { useQuery } from "@apollo/client"
import { Box, CircularProgress, Fab } from "@mui/material"
import { useRecoilValue } from "recoil"
import { CurrentUserAtom } from "../../../../state"
import { Page } from "../../../shared/components"
import { FullCenteredContainer } from "../../../shared/styles"
import { buildRequestOptions } from "../../../shared/utils"
import { GetFacultiesQuery, GetSitesQuerie } from "../../queries"
import { Faculty, GetFacultiesOutput, GetSitesOutput } from "../../types"

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AddIcon from "@mui/icons-material/Add"
import { useMemo } from "react"


const fabStyle = {
    position: 'absolute',
    bottom: 50,
    right: 50,
};

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'Id',
        type: 'number',
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 300,
    },
    {
        field: 'code',
        headerName: 'Code',
        width: 100,
    },
    {
        field: 'siteName',
        headerName: 'Site',
        width: 300,
    },
];

const FacultyListScreen = () => {
    const currentUser = useRecoilValue(CurrentUserAtom);
    const { loading: loadingFaculties, data: facultiesData } = useQuery<GetFacultiesOutput>(GetFacultiesQuery, buildRequestOptions(undefined, currentUser.accessToken));
    const { loading: loadingSites, data: sitesData } = useQuery<GetSitesOutput>(GetSitesQuerie, buildRequestOptions(undefined, currentUser.accessToken));

    const { loading, data } = useMemo<{ loading: boolean, data?: Faculty[] }>(() => {
        if (loadingFaculties || loadingSites || !sitesData || !facultiesData) return { loading: true };
        return {
            loading: false,
            data: facultiesData.getFaculties.map(faculty => {
                const siteName = sitesData.getSites.find(site => site.id == faculty.siteId)?.name;
                return { ...faculty, siteName }
            })
        }

    }, [facultiesData, sitesData, loadingFaculties, loadingSites])

    if (loading || !data)
        return (
            <Page title="Faculties">
                <FullCenteredContainer>
                    <CircularProgress />
                </FullCenteredContainer>
            </Page>
        );
    return <Page title="Faculties">
        <Box sx={{ height: '100vh', width: '100%' }}>
            <Fab sx={fabStyle} color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />

        </Box>
    </Page>
}

export default FacultyListScreen