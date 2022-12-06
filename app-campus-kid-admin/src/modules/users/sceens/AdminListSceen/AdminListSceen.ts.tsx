import { useQuery } from "@apollo/client";
import { Box, CircularProgress, Fab } from "@mui/material";
import { useRecoilValue } from "recoil";
import { CurrentUserAtom } from "../../../../state";
import { Page } from "../../../shared/components";
import { FullCenteredContainer } from "../../../shared/styles";
import { buildRequestOptions } from "../../../shared/utils";
import { GetAllAdminsQuery } from "../../queries";
import { GetAllAdminsOutput } from "../../types";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";

const fabStyle = {
  position: "absolute",
  bottom: 50,
  right: 50,
};

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Id",
    type: "number",
  },
  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
  {
    field: "email",
    headerName: "Email",
    width: 100,
  },
];

const AdminListScreen = () => {
  const currentUser = useRecoilValue(CurrentUserAtom);

  const { loading, data } = useQuery<GetAllAdminsOutput>(
    GetAllAdminsQuery,
    buildRequestOptions(undefined, currentUser.accessToken)
  );

  if (loading || !data)
    return (
      <Page title="Admins">
        <FullCenteredContainer>
          <CircularProgress />
        </FullCenteredContainer>
      </Page>
    );
  return (
    <Page title="Admins">
      <Box sx={{ height: "100vh", width: "100%" }}>
        <Fab sx={fabStyle} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <DataGrid
          rows={data.getAllAdmins}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Page>
  );
};

export default AdminListScreen;
