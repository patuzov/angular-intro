export interface Customer {
    firstName: string;
    lastName: string;
    resident: boolean;
    credit: number;
}

export interface CustomerDto {
    fullName: string;
    credit: number;
    selected: boolean;
}