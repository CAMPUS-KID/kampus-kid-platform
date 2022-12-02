import { useQuery } from "@apollo/client"
import { Box, CircularProgress, Fab } from "@mui/material"
import { useRecoilValue } from "recoil"
import { CurrentUserAtom } from "../../../../state"
import { Page } from "../../../shared/components"
import { FullCenteredContainer } from "../../../shared/styles"
import { buildRequestOptions } from "../../../shared/utils"
import { GetSitesQuerie } from "../../queries"
import { GetSitesOutput } from "../../types"

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AddIcon from "@mui/icons-material/Add"


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
];

const SiteListScreen = () => {
    const currentUser = useRecoilValue(CurrentUserAtom);
    const { loading, data } = useQuery<GetSitesOutput>(GetSitesQuerie, buildRequestOptions(undefined, currentUser.accessToken));
    if (loading || !data)
        return (
            <Page title="Sites">
                <FullCenteredContainer>
                    <CircularProgress />
                </FullCenteredContainer>
            </Page>
        );
    return <Page title="Sites">
        <Box sx={{ height: '100vh', width: '100%' }}>
            <Fab sx={fabStyle} color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <DataGrid
                rows={data.getSites}
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

export default SiteListScreen