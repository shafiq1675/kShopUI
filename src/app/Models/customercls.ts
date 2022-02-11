export class Customercls {
    public constructor(init?: Partial<Customercls>) {
        Object.assign(this, init);
    }
    public customerId: number | undefined;
    public customerName: string | undefined;
    public mobileNumber: string | undefined;
    public email: string | undefined;
    public address: string | undefined ;
    
}
