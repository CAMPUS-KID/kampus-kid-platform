import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import { useRecoilValue } from "recoil";
import { LoginScreen } from "../modules/auth";
import { RoleEnum } from "../modules/shared/enums";
import { useAutologin } from "../modules/shared/hooks";
import { DashboardScreen } from "../modules/shared/screens/DashboardScreen";
import { CurrentUserAtom } from "../state";

const Router = () => {
  const currentUser = useRecoilValue(CurrentUserAtom);

  const loading = useAutologin();

  if (loading) return <p>Loading...</p>;

  const commonRoutes: RouteObject[] = [];

  const teacherRouter = [...commonRoutes];

  const adminRoutes = [...commonRoutes];

  const authorizedRoutes: RouteObject[] = [
    {
      path: "/",
      element: <DashboardScreen />,
      children:
        currentUser.role === RoleEnum.ADMIN ? adminRoutes : teacherRouter,
    },
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