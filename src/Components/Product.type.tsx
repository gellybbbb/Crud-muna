export interface IProduct{
    id: string;
    name: string;
    quantity: number;
    price: number;
    created_date: Date;
    updated_date: Date;
    user_id: string;
}


export const dummyProductList:IProduct[]=[{
    id:new Date().toJSON().toString(),
    name: "Tahoos",
    quantity: 2,
    price: 3,
    created_date: new Date(),
    updated_date: new Date(),
    user_id: "2"
}];

export enum PageEnum{
    list,
    add,
}