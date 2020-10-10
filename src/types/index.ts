
export interface Admission{
    key: string | number;
    status: string,
    supplier: string;
    arrivalDate: string | number;
    waybillNum: number;
    amount: number;
    price: number;
}