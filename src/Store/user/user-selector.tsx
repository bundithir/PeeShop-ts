import { RootState } from "../store";

export const Selectuser = (state : RootState) => state.user.currentUser 
export const SelectuserLoading = (state : RootState) => state.user.LoadingUser