import {
  redirectLogin,
} from "../plugins/profile";

export const title = "Chew 口香糖";
export const subtitle = "文字片段分享";

export const isSaraEnabled = true;
export const onClickSara = (profile) => {
  const isLoggedIn = !!profile;
  redirectLogin(!isLoggedIn);
};

export const menuItems = [];
