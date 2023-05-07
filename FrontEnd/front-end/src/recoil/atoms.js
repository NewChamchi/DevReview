import { atom } from "recoil";

export const rc_admin_isAdminModeAtom = atom({
    key: "rc_admin_isAdminMode",
    default: false,
});

export const rc_user_isLoginAtom = atom({
    key: "rc_user_isLogin",
    default: false,
});
