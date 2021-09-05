import { DEFAULT_USER_ICON, NO_POST_URL } from "../config";

export const handleImgError = (e: React.SyntheticEvent, type?: string) => {
  (e.target as HTMLImageElement).src = type === "post" ? NO_POST_URL : DEFAULT_USER_ICON;
};
