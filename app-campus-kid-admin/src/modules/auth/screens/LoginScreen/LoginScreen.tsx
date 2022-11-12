import { useRef } from "react";
import { useMutation } from "@apollo/client";
import { LoginOutput, LoginVariables } from "../../types";
import { LoginMutation } from "../../mutations";
import { buildRequestOptions } from "../../../shared/utils";
import { RoleEnum, StorageKeyEnum } from "../../../shared/enums";
import { LoginContainer, LoginFormContainer } from "./LoginScreen.styles";
import { CampusKidButton } from "../../../shared/styles";
import { useSetRecoilState } from "recoil";
import { CurrentUserAtom } from "../../../../state";
import { StorageAssistant } from "../../../shared/assistants";

const LoginScreen = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const setCurrentUser = useSetRecoilState(CurrentUserAtom);

  const [doLogin] = useMutation<LoginOutput, LoginVariables>(LoginMutation);

  // const {loading, error, data} = useQuery<LoginOutput, LoginVariables>(GetSubjectByIdQuery, buildRequestOptions({id}, token));

  const onLogin = async () => {
    if (!emailRef.current?.value || !passwordRef.current?.value) {
      alert("Please insert an email and password");
      return;
    }
    try {
      const { data: loginData } = await doLogin(
        buildRequestOptions({
          email: emailRef.current?.value,
          password: passwordRef.current?.value,
        })
      );
      if (!loginData) throw new Error();

      const currentUser = loginData.login;

      if (![RoleEnum.ADMIN, RoleEnum.TEACHER].includes(currentUser.role)) {
        alert(
          "You are not authorized to use this app, only Admins and Tecahers can login"
        );
        return;
      }

      StorageAssistant.setItem(StorageKeyEnum.AUTHENTICATION, currentUser, true);
      currentUser.isAuthenticated = true;
      setCurrentUser(currentUser);
    } catch {
      alert("Worng email or password");
    }
  };

  return (
    <LoginContainer>
      <h1>Campus Kid</h1>
      <LoginFormContainer>
        <input ref={emailRef} type="email" />
        <input ref={passwordRef} type="password" />
        <CampusKidButton onClick={onLogin}>Login</CampusKidButton>
      </LoginFormContainer>
    </LoginContainer>
  );
};

export default LoginScreen;
