import { atom } from "recoil";
import {recoilPersist} from "recoil-persist";

export const isDarkMode = atom({
    key: "isDarkMode",
    default: false
});

const {persistAtom}  = recoilPersist({
    key: 'recoil-persist',
    storage: sessionStorage,
});

export const isLoginState = atom({
    key: "isLoginState",
    default: false,
    effects_UNSTABLE: [persistAtom],
});

export const signUpOpenState = atom({
    key: "signUpOpenState",
    default: false,
});

export const pinModalOpenState = atom({
    key: "pinModalOpenState",
    default: false,
});

export const currentPinState = atom({
    key: "currentPin",
    default: [],
});

export const isReplyOpenState = atom({
    key: "isReplyOpenState",
    default: false,
});

export const currentReplyState = atom({
    key: "currentReplyState",
    default: null,
});

export const commentListState = atom({
    key: "commentListState",
    default: [],
});

export const searchKeywordState = atom({
    key: "searchKeywordState",
    default: null,
});










