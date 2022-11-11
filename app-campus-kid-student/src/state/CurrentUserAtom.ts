import { CurrentUser } from "@modules/auth/types";
import { atom, RecoilState } from "recoil";

const CurrentUserAtom: RecoilState<CurrentUser> = atom({ key: 'CurrentUserAtom' });

export default CurrentUserAtom;
