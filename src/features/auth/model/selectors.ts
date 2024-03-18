import { RootState } from "@/app/appStore";

export const selectCurrentToken = (state: RootState) => state.auth.accessToken;