import { atom, RecoilState } from "recoil";
import { RoleEnum } from "../modules/shared/enums";
import { CurrentUser } from "../modules/shared/types";

const CurrentUserAtom: RecoilState<CurrentUser> = atom({
  key: "CurrentUserAtom",
  default: { role: RoleEnum.UNKNOWN } as CurrentUser,
});

export default CurrentUserAtom;
