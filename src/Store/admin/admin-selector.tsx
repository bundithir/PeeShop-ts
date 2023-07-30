import { RootState } from "../store";

export const SelectAdminProduct = (state : RootState) => state.admin.AdminProduct
export const SelectAddFormOpen = (state : RootState) => state.admin.AddProductOpen
export const SelectIsAddLoad = (state : RootState) => state.admin.AddLoading
export const SelectIsUpdLoad = (state : RootState) => state.admin.UpdLoading
export const SelectIsDelLoad = (state : RootState) => state.admin.DelLoading
