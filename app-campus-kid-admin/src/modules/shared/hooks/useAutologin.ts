import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { CurrentUserAtom } from "../../../state";
import { AuthorizeMutation } from "../../auth/mutations";
import { AuthorizeOutput } from "../../auth/types";
import { StorageAssistant } from "../assistants";
import { RoleEnum, StorageKeyEnum } from "../enums";
import { CurrentUser } from "../types";
import { buildRequestOptions } from "../utils";

const useAutologin = (): boolean => {
  const setCurrentUser = useSetRecoilState(CurrentUserAtom);

  const [loading, setLoading] = useState(true);

  const [doAuthorize] = useMutation<AuthorizeOutput>(AuthorizeMutation);

  useEffect(() => {
    const storedUser = StorageAssistant.getItem<CurrentUser>(
      StorageKeyEnum.AUTHENTICATION,
      true
    );

    if (storedUser) {
      doAuthorize(buildRequestOptions(null, storedUser.accessToken))
        .then(({ data }) => {
          if (!data) return;
          const currentUser = data.authorize;
          if ([RoleEnum.ADMIN, RoleEnum.TEACHER].includes(currentUser.role)) {
            StorageAssistant.setItem(
              StorageKeyEnum.AUTHENTICATION,
              currentUser,
              true
            );
            currentUser.isAuthenticated = true;
            setCurrentUser(currentUser);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [doAuthorize, setCurrentUser]);

  return loading;
};

export default useAutologin;
