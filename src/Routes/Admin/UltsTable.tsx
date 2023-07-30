import { AdminProduct } from "../../Store/admin/admin-reducer";
export type DataType = {
    key : number
    id : number ,
    name : string,
    price : number ,
    category : string ,
    image : string ,
    gender : string 
}
export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: string;
    inputType: "number" | "text" ,
    record: AdminProduct;
    index: number;
    children: React.ReactNode;
}

export const SelectionGender = ['men','women','kids']
export const SelectionCategory =['casualshirt','shirt','jeans','pants','t-shirt']
