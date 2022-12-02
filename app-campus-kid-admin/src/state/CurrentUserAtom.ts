import { atom, RecoilState } from "recoil";
import { RoleEnum } from "../modules/shared/enums";
import { CurrentUser } from "../modules/shared/types";

export const DefaultCurrentUser: CurrentUser = { role: RoleEnum.UNKNOWN };

const CurrentUserAtom: RecoilState<CurrentUser> = atom({
  key: "CurrentUserAtom",
  default: DefaultCurrentUser,
});

export default CurrentUserAtom;
