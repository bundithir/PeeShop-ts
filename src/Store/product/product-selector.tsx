import { RootState } from "../store";

export const Selectproducts = (state : RootState) => state.products.Products
export const SelectproductsLoading = (state : RootState) => state.products.LoadingProducts