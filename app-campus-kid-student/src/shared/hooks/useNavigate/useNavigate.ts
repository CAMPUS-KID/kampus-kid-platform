import { Routes } from '@shared_constants';
import { NavigateActionEnum } from '@shared_enums';
import { useCallback, useMemo } from 'react';
import { useStackNavigation } from '..';

type RouteDefinition<TParams> = {
  screen: string;
  params: RouteDefinition<TParams> | TParams;
};

type RouteMap<TParams> = {
  [key: string]: RouteDefinition<TParams>;
};

const buildRouteMap = <TParams>(params: TParams): RouteMap<TParams> => ({
  [Routes.MOVIES.MOVIE_LIST]: {
    screen: Routes.NAVIGATORS.TABS,
    params: { screen: Routes.MOVIES.MOVIE_LIST, params }
  },
  [Routes.SERIES.SERIE_LIST]: {
    screen: Routes.NAVIGATORS.TABS,
    params: { screen: Routes.SERIES.SERIE_LIST, params }
  }
});

const useNavigate = () => {
  const navigation = useStackNavigation();
  const actionMap = useMemo(
    () => ({
      [NavigateActionEnum.PUSH]: navigation.push,
      [NavigateActionEnum.NAVIGATE]: navigation.navigate,
      [NavigateActionEnum.REPLACE]: navigation.replace
    }),
    [navigation]
  );
  return useCallback(
    <TParams>(
      route: string,
      params?: TParams,
      action: NavigateActionEnum = NavigateActionEnum.PUSH
    ) => {
      const routeMap = buildRouteMap(params);
      const selectedAction = actionMap[action];
      routeMap[route]
        ? selectedAction(routeMap[route].screen, routeMap[route].params)
        : selectedAction(route, params);
    },
    [actionMap]
  );
};

export default useNavigate;
