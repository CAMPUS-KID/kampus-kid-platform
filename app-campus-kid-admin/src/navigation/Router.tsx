import { CircularProgress } from "@mui/material";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import { useRecoilValue } from "recoil";
import { LoginScreen } from "../modules/auth";
import { FacultyListScreen, SiteListScreen } from "../modules/school";
import { RoleEnum } from "../modules/shared/enums";
import { useAutologin } from "../modules/shared/hooks";
import { DashboardScreen } from "../modules/shared/screens/DashboardScreen";
import { FullCenteredContainer } from "../modules/shared/styles";
import { CurrentUserAtom } from "../state";

const Router = () => {
  const currentUser = useRecoilValue(CurrentUserAtom);

  const loading = useAutologin();

  if (loading)
    return (
      <FullCenteredContainer>
        <CircularProgress />
      </FullCenteredContainer>
    );

  const commonRoutes: RouteObject[] = [];

  const teacherRouter: RouteObject[] = [...commonRoutes];

  const adminRoutes: RouteObject[] = [
    ...commonRoutes,
    {
      path: '/sites',
      element: <SiteListScreen />,
    },
    {
      path: '/faculties',
      element: <FacultyListScreen />,
    },
  ];

  const authorizedRoutes: RouteObject[] = [
    {
      path: "/",
      element: <DashboardScreen />
    },
    ...(currentUser.role === RoleEnum.ADMIN ? adminRoutes : teacherRouter)
  ];

  const unauthorizedRoutes: RouteObject[] = [
    {
      path: "/",
      element: <LoginScreen />,
    },
  ];

  const router = createBrowserRouter(
    currentUser.isAuthenticated ? authorizedRoutes : unauthorizedRoutes
  );

  return <RouterProvider router={router} />;
};

export default Router;
